let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
basic.forever(function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.show()
})
