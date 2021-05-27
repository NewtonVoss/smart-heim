input.onPinPressed(TouchPin.P2, function () {
    dør = dør * -1
})
let dør = 0
led.enable(false)
smarthome.crashSensorSetup(DigitalPin.P2)
let strip = neopixel.create(DigitalPin.P3, 1, NeoPixelMode.RGB)
dør = 1
basic.forever(function () {
    if (dør == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        servos.P1.setAngle(90)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        servos.P1.setAngle(0)
    }
})
