/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria Varghese
 * Created on: Nov 2024
 * This program uses bluetooth radio 
*/

radio.setGroup(1)
basic.showIcon(IconNames.Happy)

//variable
let distanceToObject: number = 0

//useing bluetooth radio 
input.onButtonPressed(Button.A, function() {
   distanceToObject = sonar.ping(
        DigitalPin.P1, 
        DigitalPin.P2, 
        PingUnit.Centimeters)
    basic.showNumber(distanceToObject)
    basic.showString(' cm')
        radio.sendString('Too close')
    basic.showIcon(IconNames.Square)
})

radio.onReceivedString(function (receivedString) {

    if (distanceToObject < 10) {
        basic.showString(receivedString)
    } 
    basic.showIcon(IconNames.Happy)
})

//cleanup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
