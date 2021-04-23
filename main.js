var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_w = 60;
block_image_h = 60;

player_object = "";
block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {

        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);

    })


}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {

        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_w);
        block_image_object.scaleToHeight(block_image_h);
        block_image_object.set({

            top: player_y,
            left: player_x

        });
        canvas.add(block_image_object);

    });
}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    keypressed = e.keyCode;

    if (keypressed == '37') {
        left();
    }
    if (keypressed == '38') {
        up();
    }
    if (keypressed == '39') {
        right();
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '76') {
        new_image('spiderman_legs.png');
    }
    if (keypressed == '72') {
        new_image('hulk_face.png');
    }
    if (keypressed == '66') {
        new_image('ironman_body.png');
    }
    if (keypressed == '65') {
        new_image('thor_right_hand.png');
    }
    if (keypressed == '67') {
        new_image('captain_america_left_hand.png');
    }


    if (e.shiftKey == true && keypressed == '80') {
        block_image_w = block_image_w + 10;
        block_image_h = block_image_h + 10;
        document.getElementById("current_h").innerHTML = block_image_h;
        document.getElementById("current_w").innerHTML = block_image_w;
    }

    if (e.shiftKey == true && keypressed == '77') {
        block_image_w = block_image_w - 10;
        block_image_h = block_image_h - 10;
        document.getElementById("current_h").innerHTML = block_image_h;
        document.getElementById("current_w").innerHTML = block_image_w;
    }



}

function up(){
    if(player_y >= 0){
        player_y=player_y-block_image_h;
       canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <= 500){
        player_y=player_y+block_image_h;
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >= 0){
        player_x=player_x-block_image_w;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <= 450){
        player_x=player_x+block_image_w;
        canvas.remove(player_object);
        player_update();
    }
}