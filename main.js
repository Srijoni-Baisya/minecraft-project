var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

player_object = "";
block_object = "";

block_width = 30;
block_height = 30;

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(200);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function newImage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=='65'){
        block_width=block_width+10;
        block_height=block_height+10;
        console.log("a and shift key pressed together");
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if(e.shiftKey==true && keyPressed=='77'){
        console.log("m and shift key pressed together");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if(keyPressed=='66'){
        newImage("brick.png");
        console.log("b");
    }

    if(keyPressed=='67'){
        newImage("cloud.jpg");
        console.log("c");
    }

    if(keyPressed=='68'){
        newImage("dirt.png");
        console.log("d");
    }

    if(keyPressed=='71'){
        newImage("ground.png");
        console.log("g");
    }

    if(e.shiftKey==true && keyPressed=='71'){
        newImage("light_green_grass.png");
        console.log("Shift+g");
    }

    if(keyPressed=='76'){
        newImage("leaf.PNG");
        console.log("l");
    }

    if(keyPressed=='80'){
        newImage("gravel_path.png");
        console.log("p");
    }

    if(keyPressed=='82'){
        newImage("roof.jpg");
        console.log("r");
    }

    if(keyPressed=='83'){
        newImage("sky.PNG");
        console.log("s");
    }

    if(keyPressed=='84'){
        newImage("trunk.jpg");
        console.log("t");
    }

    if(keyPressed=='85'){
        newImage("unique.png");
        console.log("u");
    }

    if(keyPressed=='87'){
        newImage("wood.png");
        console.log("w");
    }

    if(keyPressed=='89'){
        newImage("yellow_wall.png");
        console.log("y");
    }

    if(keyPressed=='37'){
        left();
        console.log("left");
    }

    if(keyPressed=='39'){
        right();
        console.log("right");
    }

    if(keyPressed=='38'){
        up();
        console.log("up");
    }

    if(keyPressed=='40'){
        down();
        console.log("down");
    }
}

function up(){
    if(player_y>0){
        player_y=player_y-block_height;
        console.log("block image height = "+block_height);
        console.log("When Up key is pressed, player_x = "+player_x+" , player_y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<460){
        player_y=player_y+block_height;
        console.log("block image height = "+block_height);
        console.log("When Down key is pressed, player_x = "+player_x+" , player_y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>0){
        player_x=player_x-block_width;
        console.log("block image width = "+block_width);
        console.log("When Left key is pressed, player_x = "+player_x+" , player_y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<850){
        player_x=player_x+block_width;
        console.log("block image width = "+block_width);
        console.log("When Right key is pressed, player_x = "+player_x+" , player_y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}