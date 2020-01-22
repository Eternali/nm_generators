/// Copyright Conrad Heidebrecht. All rights reserved.
/// Use of this source code is governed by a BSD-style license that can be
/// found in the LICENSE file.

import 'package:flutter/material.dart';
import 'package:flutter_circle_color_picker/flutter_circle_color_picker.dart';
import 'package:nm_generators/nm_generators.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        canvasColor: Color(0xffdddddd),
        primarySwatch: Colors.purple,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Color color;

  @override
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    color = Theme.of(context).canvasColor;
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final nmTheme = NMGenerators.theme;
    final size = MediaQuery.of(context).size.width * 0.5;
    final borderColor =
        color.computeLuminance() > 0.5 ? Colors.black : Colors.white;

    return Scaffold(
      backgroundColor: color,
      body: SafeArea(
        child: Column(
          children: <Widget>[
            Expanded(
              flex: 2,
              child: Stack(
                children: <Widget>[
                  Align(
                    alignment: Alignment.topLeft,
                    child: GestureDetector(
                      onTap: () {
                        setState(() {
                          NMGenerators.theme = nmTheme.copyWith(
                            lightSource: NMLightSource.topLeft,
                          );
                        });
                      },
                      child: Container(
                        width: 30,
                        height: 30,
                        decoration: BoxDecoration(
                          color: nmTheme.lightSource == NMLightSource.topLeft
                              ? Colors.yellow
                              : Colors.transparent,
                          border: Border.all(color: borderColor),
                          borderRadius: BorderRadius.only(
                            bottomRight: Radius.circular(25),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Align(
                    alignment: Alignment.topRight,
                    child: GestureDetector(
                      onTap: () {
                        setState(() {
                          NMGenerators.theme = nmTheme.copyWith(
                            lightSource: NMLightSource.topRight,
                          );
                        });
                      },
                      child: Container(
                        width: 30,
                        height: 30,
                        decoration: BoxDecoration(
                          color: nmTheme.lightSource == NMLightSource.topRight
                              ? Colors.yellow
                              : Colors.transparent,
                          border: Border.all(color: borderColor),
                          borderRadius: BorderRadius.only(
                            bottomLeft: Radius.circular(25),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Align(
                    alignment: Alignment.bottomRight,
                    child: GestureDetector(
                      onTap: () {
                        setState(() {
                          NMGenerators.theme = nmTheme.copyWith(
                            lightSource: NMLightSource.bottomRight,
                          );
                        });
                      },
                      child: Container(
                        width: 30,
                        height: 30,
                        decoration: BoxDecoration(
                          color:
                              nmTheme.lightSource == NMLightSource.bottomRight
                                  ? Colors.yellow
                                  : Colors.transparent,
                          border: Border.all(color: borderColor),
                          borderRadius: BorderRadius.only(
                            topLeft: Radius.circular(25),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Align(
                    alignment: Alignment.bottomLeft,
                    child: GestureDetector(
                      onTap: () {
                        setState(() {
                          NMGenerators.theme = nmTheme.copyWith(
                            lightSource: NMLightSource.bottomLeft,
                          );
                        });
                      },
                      child: Container(
                        width: 30,
                        height: 30,
                        decoration: BoxDecoration(
                          color: nmTheme.lightSource == NMLightSource.bottomLeft
                              ? Colors.yellow
                              : Colors.transparent,
                          border: Border.all(color: borderColor),
                          borderRadius: BorderRadius.only(
                            topRight: Radius.circular(25),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Center(
                    child: Container(
                      width: size,
                      height: size,
                      decoration: NMGenerators.box(color),
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              flex: 3,
              child: Container(
                margin: const EdgeInsets.all(30),
                decoration: NMGenerators.box(
                  color,
                  style: nmTheme.copyWith(
                    borderRadius: 20,
                  ),
                ),
                child: ListView(
                  padding: const EdgeInsets.all(10),
                  children: <Widget>[
                    Row(
                      children: <Widget>[
                        Text('Color'),
                        GestureDetector(
                          onTap: () {
                            showDialog(
                              context: context,
                              builder: (_) => AlertDialog(
                                content: Container(
                                  child: CircleColorPicker(
                                    size: const Size(280, 280),
                                    initialColor: color,
                                    onChanged: (c) {
                                      setState(() {
                                        color = c;
                                      });
                                    },
                                    strokeWidth: 4,
                                    thumbSize: 36,
                                  ),
                                ),
                              ),
                            );
                          },
                          child: Container(
                            width: 30,
                            height: 30,
                            margin: const EdgeInsets.only(left: 20),
                            decoration: BoxDecoration(
                              color: color,
                              borderRadius: BorderRadius.circular(10),
                              border: Border.all(
                                color: borderColor,
                                width: 2,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                    Row(
                      children: <Widget>[
                        Text('Radius'),
                        Expanded(
                          child: Slider.adaptive(
                            value: nmTheme.borderRadius,
                            min: 0,
                            max: size / 2,
                            onChanged: (value) {
                              setState(() {
                                NMGenerators.theme = nmTheme.copyWith(
                                  borderRadius: value,
                                );
                              });
                            },
                          ),
                        ),
                      ],
                    ),
                    Row(
                      children: <Widget>[
                        Text('Distance'),
                        Expanded(
                          child: Slider.adaptive(
                            value: nmTheme.distance,
                            min: 0,
                            max: size / 6,
                            onChanged: (value) {
                              setState(() {
                                NMGenerators.theme = nmTheme.copyWith(
                                  distance: value,
                                );
                              });
                            },
                          ),
                        ),
                      ],
                    ),
                    Row(
                      children: <Widget>[
                        Text('Intensity'),
                        Expanded(
                          child: Slider.adaptive(
                            value: nmTheme.intensity,
                            min: 0,
                            max: 0.6,
                            onChanged: (value) {
                              setState(() {
                                NMGenerators.theme = nmTheme.copyWith(
                                  intensity: value,
                                );
                              });
                            },
                          ),
                        ),
                      ],
                    ),
                    Row(
                      children: <Widget>[
                        Text('Blur'),
                        Expanded(
                          child: Slider.adaptive(
                            value: nmTheme.blur,
                            min: 0,
                            max: size / 3,
                            onChanged: (value) {
                              setState(() {
                                NMGenerators.theme = nmTheme.copyWith(
                                  blur: value,
                                );
                              });
                            },
                          ),
                        ),
                      ],
                    ),
                    Row(
                      children: <Widget>[
                        Text('Gradient Background'),
                        GestureDetector(
                          onTap: () {
                            setState(() {
                              NMGenerators.theme = nmTheme.copyWith(
                                gradientBackground: !nmTheme.gradientBackground,
                              );
                            });
                          },
                          child: Container(
                            alignment: Alignment.center,
                            width: 60,
                            height: 40,
                            margin: const EdgeInsets.symmetric(
                                horizontal: 20, vertical: 5),
                            decoration: NMGenerators.button(
                              color,
                              style: nmTheme.copyWith(
                                gradientBackground: true,
                                shape: nmTheme.gradientBackground
                                    ? NMShape.convex
                                    : NMShape.concave,
                              ),
                            ),
                            child: Text(
                              nmTheme.gradientBackground ? 'ON' : 'OFF',
                              style: theme.textTheme.body1.copyWith(
                                color: nmTheme.gradientBackground
                                    ? theme.primaryColor
                                    : null,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                    Row(
                      children: <Widget>[
                        Text('Shape'),
                        Spacer(),
                        GestureDetector(
                          onTap: () {
                            setState(() {
                              NMGenerators.theme = nmTheme.copyWith(
                                shape: NMShape.concave,
                              );
                            });
                          },
                          child: Container(
                            width: 120,
                            height: 40,
                            alignment: Alignment.center,
                            decoration: NMGenerators.button(
                              color,
                              style: nmTheme.copyWith(
                                gradientBackground: false,
                              ),
                              accent: nmTheme.shape == NMShape.concave
                                  ? theme.primaryColor
                                  : color,
                            ).copyWith(
                              borderRadius: BorderRadius.only(
                                topLeft: Radius.circular(nmTheme.borderRadius),
                                bottomLeft:
                                    Radius.circular(nmTheme.borderRadius),
                              ),
                            ),
                            child:
                                Text(NMShape.concave.toString().split('.')[1]),
                          ),
                        ),
                        GestureDetector(
                          onTap: () {
                            setState(() {
                              NMGenerators.theme = nmTheme.copyWith(
                                shape: NMShape.convex,
                              );
                            });
                          },
                          child: Container(
                            width: 120,
                            height: 40,
                            alignment: Alignment.center,
                            decoration: NMGenerators.button(
                              color,
                              style: nmTheme.copyWith(
                                gradientBackground: false,
                              ),
                              accent: nmTheme.shape == NMShape.convex
                                  ? theme.primaryColor
                                  : color,
                            ).copyWith(
                              borderRadius: BorderRadius.only(
                                topRight: Radius.circular(nmTheme.borderRadius),
                                bottomRight:
                                    Radius.circular(nmTheme.borderRadius),
                              ),
                            ),
                            child:
                                Text(NMShape.convex.toString().split('.')[1]),
                          ),
                        ),
                        Spacer(),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
