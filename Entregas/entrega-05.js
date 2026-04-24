let posx=100
let posy=150
let sentido=1 
let sentidox=1
let diamnetro=200
let tinte=360
let tinteComplementario=0
let diametro=100

function setup() {
  createCanvas(700,700);
  colorMode(HSB,360,100,100)

  frameRate(20);
  
}

function draw() {
   textAlign(CENTER,CENTER);
  textSize(40);
  text("blabla"+ "\n bloblo"+ "\n"+frameCount + "\n blibli", width/2, height/2);
  posx=posx + 12 * sentido;
  posy=posy + 0 ;
  if(posx>width-diametro/2);
   if(tinte>180)
    tinteComplementario=tinte-180
  if(tinte<180)
    tinteComplementario=tinte+180
  
  background(tinteComplementario,100,100);
  push
  translate(posx,posy)
  fill(tinte,40,100)
  ellipse(0,0,diametro,diametro)
  diametro=(mouseX,mouseY)/3
  fill(0,0,0)
  
  tinte= tinte-5
  if(tinte<0){
    tinte=360}
 
    
   
}
