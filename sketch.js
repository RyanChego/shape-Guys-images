var blockGuy;
var blockGirl;
var evilCircles;

function preload(){
blockGuy=loadImage("block guy.png");
blockGirl=loadImage("block girl.png");
evilCircles=loadImage("evil circles.png");
}


function setUp(){
    createCanvas(600,600);
    blockGuy1=createSprites(450,450,50,50);
    blockGuy1.addImage(blockGuy);
}

function draw(){
    background("white");
    
    drawSprites();
}