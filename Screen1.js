class Screen1{

constructor(){

}

display(){

if(gameState === 0){

image(backImage,0,0,windowWidth,windowHeight);

title = createImg("./Save The Animals/Title.png");
title.id("myTitle");
title.position(160,0);

}
}
}

