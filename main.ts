input.onButtonPressed(Button.A, function () {
    num_2 += 1
    basic.showNumber(num_2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("swap")
    num_2 += 1
    num_1 += 1
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let num_1 = 0
let num_2 = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
