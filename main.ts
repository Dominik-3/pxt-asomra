radio.setGroup(53)

let dobehl = false
let cas1 = 0
let cas2 = 0
Sensors.SetLightLevel()

radio.onReceivedNumber(function (receivedNumber: number) {
    if(receivedNumber === 1) {
        music.playTone(440, 400)
        cas1 = control.millis()
    }
    
    if (receivedNumber === 0) {
        basic.showString("N")
        basic.clearScreen()
        Sensors.SetLightLevel()
        dobehl = true
    }
})

input.onButtonPressed(Button.B, function() {
    dobehl = false
    cas1 = 0
    cas2 = 0
})

input.onButtonPressed(Button.A, function () {
    Sensors.SetLightLevel()
})

Sensors.OnLightDrop(function () {
    if(dobehl === false) {
        dobehl = true
        cas2 = control.millis()
        music.playTone(520, 400)
        radio.sendNumber((cas2 - cas1) / 1000)
        basic.showNumber((cas2 - cas1) / 1000)
    }
})


