input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    music.playTone(392, music.beat(BeatFraction.Sixteenth))
    blinky.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    blinky.change(LedSpriteProperty.Y, 1)
    music.playTone(131, music.beat(BeatFraction.Eighth))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(392, music.beat(BeatFraction.Sixteenth))
    blinky.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    music.playTone(131, music.beat(BeatFraction.Eighth))
    blinky.change(LedSpriteProperty.Y, -1)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    game.pause()
})
let blinky: game.LedSprite = null
blinky = game.createSprite(2, 2)
let fruit = game.createSprite(randint(0, 5), randint(0, 5))
game.startCountdown(30000)
blinky.set(LedSpriteProperty.Blink, 100)
basic.forever(function () {
    if (blinky.isTouching(fruit)) {
        fruit.delete()
        fruit = game.createSprite(randint(0, 5), randint(0, 5))
        game.addScore(1)
    }
})
