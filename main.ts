controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Muneco.y += 5
})
let Muneco: Sprite = null
scene.setBackgroundImage(assets.image`espacio`)
info.setScore(0)
info.setLife(3)
Muneco = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    .........ffff...........
    .......fff22fff.........
    ......fff2222fff........
    .....fffeeeeeefff.......
    .....ffe222222eef.......
    .....fe2ffffff2ef.......
    .....ffffeeeeffff.......
    ....ffefbf44fbfeff......
    ....fee41fddf14eef......
    .....ffffdddddeef.......
    ....fddddf444eef........
    ....fbbbbf2222f4e.......
    ....fbbbbf2222fd4.......
    .....fccf45544f44.......
    ......ffffffff..........
    ........ff..ff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(Muneco)
Muneco.setStayInScreen(true)
