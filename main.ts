radio.setGroup(53)

let cas1 = 0
let cas2 = 0
Sensors.SetLightLevel()

radio.onReceivedNumber(function (receivedNumber: number) {
    music.playTone(440, 400)
    if(receivedNumber === 1) {
        cas1 = control.millis()
    }
    
    if (receivedNumber === 0) {
        basic.showString("N")
        basic.clearScreen()
        control.reset()
    }
})


input.onButtonPressed(Button.AB, function () {
    Sensors.SetLightLevel()
})

Sensors.OnLightDrop(function () {
    cas2 = control.millis()
    music.playTone(520, 400)
    radio.sendNumber((cas2 - cas1) / 1000)
    basic.showNumber((cas2 - cas1)/1000)
    basic.pause(10000)
    control.reset()
})


