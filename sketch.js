var backImage;
var screen1;
var title;
var playButton;
var homeButton;
//var score;
//var gameOver,restart,gameOverImage,restartImage;
//var PLAY = 1;
//var END = 0;
var gameState = 0;
//var dolphinImg;
var cuteGirl;
var idle1;

function preload(){

backImage = loadImage("Save The Animals/Beach Background.jpg");


//dolphinImg = loadImage("Save The Animals/Cute Dolphin 2.png");

idle1 = loadAnimation("Cute Girl/Idle (1).png","Cute Girl/Idle (2).png","Cute Girl/Idle (3).png","Cute Girl/Idle (4).png","Cute Girl/Idle (5).png","Cute Girl/Idle (6).png","Cute Girl/Idle (7).png","Cute Girl/Idle (8).png","Cute Girl/Idle (9).png","Cute Girl/Idle (10).png","Cute Girl/Idle (11).png","Cute Girl/Idle (12).png","Cute Girl/Idle (13).png","Cute Girl/Idle (14).png","Cute Girl/Idle (15).png","Cute Girl/Idle (16).png");
}

function setup() {
createCanvas(windowWidth, windowHeight);
   
 screen1 = new Screen1(); 
 screen1.display(); 
 
cuteGirl = createSprite(200,200);

}

function draw() {

background(220);

cuteGirl.addAnimation("Idle",idle1);
drawSprites();

}

function windowResized(){

resizeCanvas(windowWidth,windowHeight);
}

function mouseClicked(){


if(gameState === 0){
gameState = 1;

}


return false;

}

