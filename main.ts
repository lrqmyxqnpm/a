let Y = 0
let X = 0
let S1 = game.createSprite(2, 2)
basic.forever(function () {
    X = S1.get(LedSpriteProperty.X)
    Y = S1.get(LedSpriteProperty.Y)
    S1.move(1)
    led.plot(X, Y)
    S1.ifOnEdgeBounce()
    S1.turn(Direction.Right, 45)
})
