var system1,system2;
var myBtn1, myBtn2;
var count1, count2, count1Before, count2Before;
var imageDog,imageCat;
var sizeDog,sizeCat;
var Dog,Cat;
function preload() {
  imageDog= loadImage('love.png');
  imageCat= loadImage('love.png');
  Dog = loadAnimation("dog001.png", "dog009.png");
  Cat = loadAnimation("cat001.png", "cat010.png");
}

function setup() {
  //frameRate(30);
  createCanvas(windowWidth, windowHeight); 
  background(207,231,230);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  system1 = new Particle(createVector(random(0,windowWidth/2), windowHeight-100));
  system2 = new Particle(createVector(random(windowWidth/2,windowWidth), windowHeight-100));
  sizeDog=200;
  sizeCat=200;
  count1=0;
  count2=0;
  count1Before=0;
  count2Before=0;
  
  
myBtn1 = createButton('Love');
myBtn2 = createButton('Love');
myBtn1.position(windowWidth /4, windowHeight-100);
 // myBtn1.mouseClicked(draw1);
myBtn2.position(windowWidth *3 /4, windowHeight-100);
} 

function draw() {
 //system2.addParticle();
background(207,231,230);
var s = "Cats Or Dogs";
  textSize(70);
  textStyle(BOLD);
  fill(239,156,124);
  //fill(162,74,66);
  textAlign(CENTER);
  text(s, windowWidth/4, 50, windowWidth/2, 280);
image(imageDog, windowWidth/4, windowHeight*2/5, sizeDog, sizeDog);
image(imageCat, windowWidth*3/4, windowHeight*2/5, sizeCat,sizeCat);
animation(Dog,windowWidth/4, windowHeight*3/4);
animation(Cat,windowWidth*3/4, windowHeight*3/4);
myBtn1.mouseClicked(function(){system1.lifespan=1;
                              system1.position=createVector(random(0,windowWidth/2), windowHeight);
                              count1Before=count1;
                              count1++;
                              });
 // system2.run();
 if(count1>count1Before){
 sizeDog+=5;
 count1Before++;
 }
 
   if(system1.lifespan!==0){
   system1.run();
    }
  if(system1.lifespan> windowHeight+10){
   
   system1.position=createVector(random(0,windowWidth/2), windowHeight);
   system1.lifespan=0;
  }
  //ellipse(mouseX, mouseY, 20, 20);


myBtn2.mouseClicked(function(){system2.lifespan=1;
                              system2.position=createVector(random(windowWidth/2,windowWidth), windowHeight);
                              count2Before=count2;
                              count2++;
                              });
 // system2.run();
 if(count2>count2Before){
 sizeCat+=5;
 count2Before++;
 }
 
   if(system2.lifespan!==0){
   system2.run();
    }
  if(system2.lifespan> windowHeight+10){
   
   system2.position=createVector(random(windowWidth/2,windowWidth), windowHeight);
   system2.lifespan=0;
  }
  //ellipse(mouseX, mouseY, 20, 20);
}

function love(x,y,size,opacityLove){
    fill(207,231,230,opacityLove);
    noStroke();
    ellipse(x,y,size+3.5,size+3.5);
	  strokeWeight(2);
  	stroke(255,opacityLove);
  	fill(240,84,106,opacityLove);
  	ellipse(x,y,size,size);
  	fill(255,opacityLove);
  	beginShape();
  	bezier(x, y-size/4, x-size*3/4, y-size*3/4, x-size, y+size/4, x, y+size*3/5);
  	bezier(x,y-size/4,x+size*3/4,y-size*3/4,x+size,y+size/4,x,y+size*3/5);
  	endShape();
  	
}
/* function mousePressed(){
   if(!system1.isDead()){
   system1.run();}
  }*/

/*function draw1() {
 //system2.addParticle();
 
  system1.run();
  //ellipse(mouseX, mouseY, 20, 20);
}*/



var Particle = function(position) {
 
  this.position = position.copy();
  //this.img= loadImage("https://www.openprocessing.org/sketch/394633/files/love.png");
  this.lifespan = 0;
  this.opacityObject = 2; //floor(map(this.lifespan,0,windowHeight/2,255,0));
  
};

Particle.prototype.run = function() {
  
  this.update();
  this.display();
   this.opacityObject = floor(map(this.lifespan,0,windowHeight/2,255,0));
};

// Method to update position
Particle.prototype.update = function(){
   this.acceleration = createVector(random(-0.5,0.5), 0);
  this.velocity = createVector(random(-0.5,0.5), -2);
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan +=2;
 
  if(this.opacityObject>253){
     this.opacityObject=253;
   }
};

// Method to display
Particle.prototype.display = function() {
 // background(207,231,230);
  stroke(200);
  strokeWeight(2);
  
  love(this.position.x, this.position.y, 12, this.opacityObject);
 // image(this.img,this.position.x, this.position.y,100,100);
   
   
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
 // if (this.lifespan <0) {
    if (this.lifespan > windowHeight/2) {
    return true;
  } else {
    return false;
  }
};

/*var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};*/

