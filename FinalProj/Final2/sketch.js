var cracks = []; //contains crack positions and ids
var imageCrack=[];
var screenCrack=[];
var MOUSEX,MOUSEY;
var mySound;
function preload(){
mySound = loadSound('crash.mp3');
imageCrack[1]=loadImage('crack.png');
imageCrack[2]=loadImage('crack2.png');
imageCrack[3]=loadImage('crack3.png');
imageCrack[4]=loadImage('crack4.png');
imageCrack[5]=loadImage('crack5.png');
imageCrack[6]=loadImage('crack6.png');
imageCrack[7]=loadImage('crack7.png');
imageCrack[8]=loadImage('crack8.png');
imageCrack[0]=loadImage('crack9.png');
}

function Crack(id, pos, size){
  this.id = id;
  this.pos = pos;
  this.size = size;
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(0);//207,212,197);  
  imageMode(CENTER);
  frameRate(30);
  scale(2);
head(windowWidth/4, windowHeight/2);

} 

function draw() {
  //background(255);
  //image(imageCrack[floor(random(0,8))],400,100,100,100);
  for(var i=0; i < cracks.length; i++){
    
    image(imageCrack[cracks[i].id], cracks[i].pos.x, cracks[i].pos.y, cracks[i].size, cracks[i].size);
  }
 
}

function mousePressed(){
  scale(2);
  var crackSize=random(50,100);
  cracks.push(new Crack(floor(random(0,8)), createVector(mouseX, mouseY), crackSize));
  

  //image(imageCrack[floor(random(0,8))],mouseX/2,mouseY/2,crackSize,crackSize);
  MOUSEX=mouseX;
  MOUSEY=mouseY;
  mySound.setVolume(0.1);
  mySound.play();
  XRay(windowWidth/4, windowHeight/2,mouseX,mouseY,5,color(255));
  // }
   
//  XRay(windowWidth/4, windowHeight/2,7,color(0)); 

}

function mouseReleased(){
scale(2);
XRay(windowWidth/4, windowHeight/2,MOUSEX,MOUSEY,7,color(0));

head(windowWidth/4, windowHeight/2);
 
}

 function head(x,y){
  var headCenterX = x;
  var headCenterY = y-150;
  fill(182,31,36);
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(headCenterX-55,headCenterY-70);
  vertex(headCenterX-25,headCenterY-90);
  vertex(headCenterX+25,headCenterY-90);
  vertex(headCenterX+55,headCenterY-70);
  vertex(headCenterX+70,headCenterY-10);
  vertex(headCenterX+50,headCenterY+75);
  vertex(headCenterX+5,headCenterY+100);
  vertex(headCenterX-5,headCenterY+100);
  vertex(headCenterX-50,headCenterY+75);
  vertex(headCenterX-70,headCenterY-10);
  vertex(headCenterX-55,headCenterY-70);
  endShape(close); //red part
  
  fill(233,176,74);
  strokeWeight(2);
  beginShape();
  vertex(headCenterX-50,headCenterY-60);
  vertex(headCenterX-30,headCenterY-70);
  vertex(headCenterX-18,headCenterY-50);
  vertex(headCenterX,headCenterY-40);
  vertex(headCenterX+18,headCenterY-50);
  vertex(headCenterX+30,headCenterY-70);
  vertex(headCenterX+50,headCenterY-60);
  vertex(headCenterX+55,headCenterY-25);
  vertex(headCenterX+65,headCenterY-18);
  vertex(headCenterX+62,headCenterY+10);
  vertex(headCenterX+52,headCenterY+20);
  vertex(headCenterX+40,headCenterY+60);
  vertex(headCenterX,headCenterY+80);
  vertex(headCenterX-40,headCenterY+60);
  vertex(headCenterX-52,headCenterY+20);
  vertex(headCenterX-62,headCenterY+10);
  vertex(headCenterX-65,headCenterY-18);
  vertex(headCenterX-55,headCenterY-25);
  vertex(headCenterX-50,headCenterY-60);
  endShape(close); //yellow part
  
  noFill();
  triangle(headCenterX,headCenterY-55,headCenterX+10,headCenterY-65,headCenterX-10,headCenterY-65);
  
  eyes(headCenterX,headCenterY);
  
  noFill();

  arc(headCenterX-30,headCenterY-90,20,40,0,HALF_PI);
  arc(headCenterX+30,headCenterY-90,20,40,HALF_PI,PI);
  
  lineOnFace(headCenterX,headCenterY);
  
}



function lineOnFace(x,y){
  strokeWeight(1);
  line(x,y-20,x,y+50);
  line(x-40,y-4,x,y+7);
  line(x+40,y-4,x,y+7);
  line(x-12,y,x-53,y-17);
  line(x+12,y,x+52,y-17);
  strokeWeight(0.5);
  line(x-55,y-25,x-52,y+10);
  line(x+55,y-25,x+52,y+10);
  strokeWeight(2);
  line(x+40,y+60,x+50,y+75);
  line(x-40,y+60,x-50,y+75);
  line(x,y+80,x,y+95);
  line(x,y+95,x-5,y+100);
  line(x,y+95,x+5,y+100);
  
  beginShape();
  vertex(x-65,y+10);
  vertex(x-56,y+25);
  vertex(x-46,y+68);
  vertex(x,y+95);
  vertex(x+46,y+68);
  vertex(x+56,y+25);
  vertex(x+65,y+10);
  endShape();
}



function eyes(x,y){
  
  var color2=color(255,249,224);
  var color1=color(0);
  var lerpAmt = map(mouseX, 0, width, 0, 1.0);
  var lerpedCol = lerpColor(color1, color2, lerpAmt);
  fill(lerpedCol);
  beginShape();
  vertex(x-45,y-13);
  vertex(x-12,y);
  vertex(x-12,y+4);
  vertex(x-40,y-4);
  vertex(x-50,y-10);
  vertex(x-45,y-13);
  endShape(close);
  
  beginShape();
  vertex(x+45,y-13);
  vertex(x+12,y);
  vertex(x+12,y+4);
  vertex(x+40,y-4);
  vertex(x+50,y-10);
  vertex(x+45,y-13);
  endShape(close);
  
}

function XRay(x,y,x1,y1,strokeWei,_color){
  
  strokeWeight(strokeWei);
  fill(_color);
  stroke(_color);
  quad(x-40,(y-10)/2+30,x-12,(y+2)/2+35,x1/2,y1/2,x1/2,y1/2);
  quad(x+12,(y+2)/2+35,x+40,(y-10)/2+30,x1/2,y1/2,x1/2,y1/2)
  //line((x-30),(y+40)/2,x1/2,y1/2);
  //line(x+30,(y+40)/2,x1/2,y1/2);

 /* stroke(0);
  strokeWeight(strokeWei+2);
  line((x-30),(y+40)/2,mouseX/2,mouseY/2);
  line(x+30,(y+40)/2,mouseX/2,mouseY/2);
  */
}
