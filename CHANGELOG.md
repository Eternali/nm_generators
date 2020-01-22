## [0.1.0] - 22 January 2020

* Fixed bug where a neumorphic box will error when an attempt is made to change its shape
    * `borderRadius` in the neumorphic theme for the box must be explicitly set to `0` because if you attempt to copy the generated `BoxDecoration` with a shape, there cannot be a borderRadius specified as well and if you explicitly set it to null `copyWith` won't recognise that as an override and will still error.

## [0.0.1] - 22 January 2020

* Initial release
