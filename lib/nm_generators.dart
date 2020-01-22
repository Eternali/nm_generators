/// Copyright Conrad Heidebrecht. All rights reserved.
/// Use of this source code is governed by a BSD-style license that can be
/// found in the LICENSE file.

import 'dart:math';

import 'package:flutter/material.dart';

typedef NMGenerator = BoxDecoration Function(Color base,
    {Color accent, NMTheme style});

/// 3D shape the neumorphic widget can take.
enum NMShape {
  concave,
  convex,
}

/// Direction the light source casting shadows comes from.
/// Ideally this will be deprecated in lieu of an [Offset] to make it
/// even more customizable.
enum NMLightSource {
  bottomLeft,
  topLeft,
  topRight,
  bottomRight,
}

/// Theme dictating neumorphic design customizations.
class NMTheme {
  NMTheme({
    this.borderRadius = 20,
    this.distance = 4,
    this.intensity = 0.25,
    this.blur = 8,
    this.gradientBackground = true,
    this.shape = NMShape.concave,
    this.lightSource = NMLightSource.topLeft,
  }) {
    blur ??= distance * 2;
  }

  /// The border radius of the widget.
  double borderRadius;

  /// The distance from the underlying widget that should be emulated.
  double distance;

  /// The contrast of shadows to background.
  double intensity;

  /// The dispersion of shadows on the underlying widget.
  /// Defaults to [distance] times 2.
  double blur;

  /// Whether or not the background of the widget should have a gradient
  /// to emulate a 3D shape.
  bool gradientBackground;

  /// Whether or not the shape of the widget should be concave or convex.
  NMShape shape;

  /// The direction of the light source casting shadows.
  NMLightSource lightSource;

  /// Return a new [NMTheme] copied from [this] with any number of parameters changed.
  NMTheme copyWith({
    double borderRadius,
    double distance,
    double intensity,
    double blur,
    bool gradientBackground,
    NMShape shape,
    NMLightSource lightSource,
  }) =>
      NMTheme(
        borderRadius: borderRadius ?? this.borderRadius,
        distance: distance ?? this.distance,
        intensity: intensity ?? this.intensity,
        blur: blur ?? (distance != null ? null : this.blur),
        gradientBackground: gradientBackground ?? this.gradientBackground,
        shape: shape ?? this.shape,
        lightSource: lightSource ?? this.lightSource,
      );

  @override
  String toString() {
    return 'NMTheme: ' +
        {
          'borderRadius': borderRadius,
          'distance': distance,
          'intensity': intensity,
          'blur': blur,
          'gradientBackground': gradientBackground,
          'shape': shape,
          'lightSource': lightSource,
        }.toString();
  }
}

class NMGenerators {
  static NMTheme theme = NMTheme();

  /// Generate a shadow color from the [base] color and a relative [intensity].
  /// Positive intensity denotes a darker shade while negative intensity
  /// denotes a lighter shade.
  /// Credit for the algorithm goes to https://neumorphism.io
  static Color colorGen(Color base, double intensity) {
    final t = intensity ?? 0;
    String e = base.value.toRadixString(16).substring(2);
    if (e.length < 6) e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2];
    String o = '';
    for (int n = 0; n < 3; n++) {
      var a = int.parse(e.substring(2 * n, 2 * n + 2), radix: 16);
      a = min(max(0, (a + a * t).round()), 255);
      o += ('00' + a.toRadixString(16)).substring(a.toRadixString(16).length);
    }

    return Color(int.parse(o, radix: 16)).withAlpha(255);
  }

  /// Receives a [NMTheme] and returns a shadow offset generated from
  /// the [NMLightSource].
  static Offset sourceToOffset(NMTheme style) {
    Offset off;
    switch (style.lightSource) {
      case NMLightSource.bottomLeft:
        off = Offset(style.distance, -style.distance);
        break;
      case NMLightSource.topLeft:
        off = Offset(style.distance, style.distance);
        break;
      case NMLightSource.topRight:
        off = Offset(-style.distance, style.distance);
        break;
      case NMLightSource.bottomRight:
        off = Offset(-style.distance, -style.distance);
        break;
    }
    return off;
  }

  /// Common neumorphic box.
  /// Takes a [base] color which is usually the background color of the app
  /// and returns a [BoxDecoration] that can be used make a neumorphic widget.
  /// The [accent] color can be optionally specified to change the color of
  /// the container.
  static NMGenerator box = (Color base, {Color accent, NMTheme style}) {
    style ??= theme;
    final offset = sourceToOffset(style);

    return BoxDecoration(
      borderRadius: style.borderRadius == 0
          ? null
          : BorderRadius.circular(style.borderRadius),
      color: accent ?? base,
      gradient: accent == null
          ? LinearGradient(
              begin: Alignment(
                -offset.dx.clamp(-1, 1).toDouble(),
                -offset.dy.clamp(-1, 1).toDouble(),
              ),
              end: Alignment(
                offset.dx.clamp(-1, 1).toDouble(),
                offset.dy.clamp(-1, 1).toDouble(),
              ),
              colors: [
                style.gradientBackground
                    ? colorGen(
                        base, style.shape == NMShape.concave ? 0.07 : -0.1)
                    : base,
                style.gradientBackground
                    ? colorGen(
                        base, style.shape == NMShape.concave ? -0.1 : 0.07)
                    : base,
              ],
            )
          : null,
      boxShadow: [
        BoxShadow(
          color: colorGen(base, -1 * style.intensity),
          offset: offset,
          blurRadius: style.blur,
        ),
        BoxShadow(
          color: colorGen(base, style.intensity),
          offset: offset.scale(-1, -1),
          blurRadius: style.blur,
        ),
      ],
    );
  };

  /// Common neumorphic button.
  static NMGenerator button = (Color base, {Color accent, NMTheme style}) {
    style ??= theme;

    return box(base, accent: accent, style: style.copyWith(distance: 1));
  };
}
