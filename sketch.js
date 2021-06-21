var player;
var target;
var edges;

function setup() {
  createCanvas(600,721);
  edges=createEdgeSprites();
 player= createSprite(40,680,30,30);
 target= createSprite(550,40,30,30);
 obs1 = createSprite(160,300,80,20);
 obs2 = createSprite(310,360,80,20);
 obs3 = createSprite(280,300,80,20);
 obs4 = createSprite(190,360,80,20);
 obs5 = createSprite(400,300,80,20);
 obs6 = createSprite(430,360,80,20);
 obs7 = createSprite(520,300,80,20);
 obs8 = createSprite(550,360,80,20);
 obs9 = createSprite(40,300,80,20);
 obs10 = createSprite(70,360,80,20);

 player.shapecolor = "pink"
 target.shapeColor = "orange"
 obs1.shapeColor = "rgb(214, 22, 182)"
 obs2.shapeColor = "rgb(214, 22, 182)"
 obs3.shapeColor = "rgb(214, 22, 182)"
 obs4.shapeColor = "rgb(214, 22, 182)"
 obs5.shapeColor = "rgb(214, 22, 182)"
 obs6.shapeColor = "rgb(214, 22, 182)"
 obs7.shapeColor = "rgb(214, 22, 182)"
 obs8.shapeColor = "rgb(214, 22, 182)"
 obs9.shapeColor = "rgb(214, 22, 182)"
 obs10.shapeColor = "rgb(214, 22, 182)"
 
 }
function draw() {
  background("black");

if(keyDown("up")){
  player.y=player.y-6;
}
if(keyDown("down")){
  player.y=player.y+6;
}
if(keyDown("left")){
  player.x=player.x-6;
}
if(keyDown("right")){
  player.x=player.x+6;
}
stroke("white");
textSize(20)

if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
if(player.isTouching(obs1)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs2)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs3)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs4)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs5)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs6)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs7)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs8)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs9)){
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs10)){
  text("YOU LOSE",200,200);
}



  drawSprites();
  
}
