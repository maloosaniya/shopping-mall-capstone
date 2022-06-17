var bg,bgImage,mallImage,mall,gcustomer,gc
var playerammount=10000;
var playerImage,player
var dooropen,doorclosed
var exitmall,entrymall
var do,dc
function preload(){
bgImage=loadImage("assets/entry of the mall.jpeg")
mallImage=loadImage("assets/stores in the mall.jpeg")
gcustomer=loadImage("assets/customers.jpeg")
dooropen=loadImage("assets/door+open.png")
doorclosed=loadImag("assets/door+closed.png")
exitmall=loadImage("assets/exitmall.jpeg")

}

function setup(){
  createCanvas(800,500)
bg =createSprite(400,250,800,500)
 mall=createSprite(200,350,50,50)
 gcustomer=createSprite(400,50,250,50)
 do=createSprites(150,30,230,50)
dc=createSprite()
exitmall=createSprites()
entrymall=createSprites()
bg.addImage("background",bgImage)

bg.scale=0.4;


//gc.addAnimation("gc",gcustomer);
//gc.scale=0.6;
}


function draw(){
  //if(bg){
    //bgImage.visible=false;
  //}
  if(keyDown("space")){
    bg.velocityX=-3;
    mall.addImage("mall",mallImage)
    mall.scale=0.6;
  }
  
drawSprites()
}