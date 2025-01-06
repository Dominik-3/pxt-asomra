radio.setGroup(53)

Sensors.SetLightLevel()

input.onButtonPressed(Button.A, function() {
    Sensors.SetLightLevel()
})

Sensors.OnLightDrop(function() {
    
})
radio.onReceivedNumber(function(receivedNumber: number) {
    
})

radio.sendNumber(0)