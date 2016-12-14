var food=[];
var chi1,chi2,chi3;
var veg1,veg2,veg3;
var menu;
var table;
var rice;
var nood;
var porr;
var checkbox1,checkbox2,checkbox3,checkbox4,checkbox5,checkbox6,checkbox7,checkbox8,checkbox9;
var ratio;
var pos=[];
var posCheck=[];
var posChLength=0;
var b;
var bills=[];
var loc;
var sel;
var opt=['Rice','Noodles','Porridge'];

function preload(){
  //chi1
  food[1]=loadImage("DicedChickenWHotPepperSc.png");
  //chi2
  food[2]=loadImage("LemonChicken.png");
  //chi3=
  food[3]=loadImage("SpicyChicken.png");
  //veg1=
  food[4]=loadImage("BeanCurdSzhchuanStyle.png");
  //veg2=
  food[5]=loadImage("ChineseEggplanWithGarlicSauce.png");
  //veg3=
  food[6]=loadImage("CrispyDryStringBeans.png");
  //rice=
  food[7]=loadImage("Rice.png");
  //nood=
  food[8]=loadImage("Noodles.png");
  //porr=
  food[9]=loadImage("porridge.png");
  menu=loadImage("menu111.jpg");
  table=loadImage("table.jpg");
}

function Bill(id, pos){
  this.id = id;
  this.pos = pos;
  //this.size = size;
}

function setup(){
  createCanvas(960,600);
  ratio=windowHeight/1000;
  background(255);
  image(table,-180,0,900,600);
  image(menu,720,0,240,600);
  pos[0]=createVector(20,20);
  pos[1]=createVector((20+100),0);
  pos[2]=createVector((20+250),20);
  pos[3]=createVector((20+300),20);
  pos[4]=createVector((20+500),0);
   pos[5]=createVector((0),180);
   pos[6]=createVector((70+180),200);
   pos[7]=createVector((70+200),180);
   pos[8]=createVector((70+380),180);
   loc=createVector(160,400);
  //bills[0]=new Bill(0,loc);
  
  //opt=['Rice','Noodles','Porridge'];


  checkbox1 = createCheckbox(false);
  checkbox1.position(740,90);
  checkbox1.changed(function(){
    /*if (this.checked()) {
      b =pos.splice(floor(random(0,(pos.length-posChLength))),1);
      posCheck.push(b);
    image(chi1,posCheck[posCheck.length-1].x,posCheck[posCheck.length-1].y);
    posChLength++;
  } else {
   image(table,-180,0,900,600);
  image(menu,720,0,240,600);
  pos.push(posCheck.splice(posCheck.length-1,1));
  posChLength--;
  }});*/
  if (this.checked()) {

  bills.push(new Bill(1, pos[3]));
  }
    else {
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===1){
        bills.splice(i,1);
      }
    }

    }
  });
  
  checkbox2 = createCheckbox(false);
  checkbox2.position(740,135);
  checkbox2.changed(function(){
       /*if (this.checked()) {
       b =pos.splice(floor(random(0,(pos.length-posChLength))),1);
      posCheck.push(b);
    image(chi2,posCheck[posCheck.length-1].x,posCheck[posCheck.length-1].y);
    posChLength++;
  } else {
   image(table,-180,0,900,600);
  image(menu,720,0,240,600);
  pos.push(posCheck.splice(posCheck.length-1,1));
  posChLength--;
  }});*/
  if (this.checked()) {

  bills.push(new Bill(2, pos[5]));
  }
    else {
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===2){
        bills.splice(i,1);
      }
    }
    }
  });
  
  checkbox3 = createCheckbox(false);
  checkbox3.position(740,175);
  checkbox3.changed(function(){
      if (this.checked()) {

  bills.push(new Bill(3, pos[1]));
  }
    else {
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===3){
        bills.splice(i,1);
      }
    }
    }
  });
  checkbox4 = createCheckbox(false);
  checkbox4.position(740,260);
  checkbox4.changed(function(){
      if (this.checked()) {
  bills.push(new Bill(4, pos[4]));
  }
    else {
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===4){
        bills.splice(i,1);
      }
    }
    }
  });
  checkbox5 = createCheckbox(false);
  checkbox5.position(740,300);
  checkbox5.changed(function(){
     if (this.checked()) {
  bills.push(new Bill(5, pos[6]));
  }
    else {
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===5){
        bills.splice(i,1);
      }
    }
    }
  });
  checkbox6 = createCheckbox(false);
  checkbox6.position(740,345);
  checkbox6.changed(function(){
     if (this.checked()) {
  bills.push(new Bill(6, pos[8]));
  }
    else {
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===6){
        bills.splice(i,1);
      }
    }
    }
  });
 
/* bills.push(new Bill(7, loc));
 sel = createSelect();
  sel.position(775, 400);
  sel.option(1);
  sel.option(2);
  sel.option('Porridge');
  sel.changed(function(){
    if(sel.value==='Rice'){
      for(var i=0;i<bills.length;i++){
      if(bills[i].id===8||bills[i].id===9){
        bills[i].id=7;
      }
    }
    }
    if(sel.value==='Noodles'){
      for(var a=0;a<bills.length;i++){
      if(bills[a].id===7||bills[a].id===9){
        bills[a].id=8;
      }
    }
    }
    if(sel.value==='Porridge'){
     for(var i=0;i<bills.length;i++){
      if(bills[i].id===7||bills[i].id===8){
        bills[i].id=9;
      }
    }
    }
    else{
  
    }
  });*/
  
  
checkbox7 = createCheckbox(false);
  checkbox7.position(740,430);
  checkbox7.changed(function(){
    if (this.checked()) {
  bills.push(new Bill(7, loc));
  if(checkbox8.checked()){
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===8){
        bills.splice(i,1);
        
      }
    }
  }
  if(checkbox9.checked()){
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===9){
        bills.splice(i,1);
      }
    }
  }
  }
    else {
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===7){
        bills.splice(i,1);
      }
    }
    }
  });
  
  checkbox8 = createCheckbox(false);
  checkbox8.position(740,468);
  checkbox8.changed(function(){
     if (this.checked()) {
  bills.push(new Bill(8, loc));
  if(checkbox7.checked()){
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===7){
        bills.splice(i,1);
      }
    }
  }
  if(checkbox9.checked()){
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===9){
        bills.splice(i,1);
      }
    }
  }
  }
    else {
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===8){
        bills.splice(i,1);
      }
    }
    }
  });
  
  checkbox9 = createCheckbox(false);
  checkbox9.position(740,508);
  checkbox9.changed(function(){
    if (this.checked()) {
  bills.push(new Bill(9, loc));
  if(checkbox7.checked()){
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===7){
        bills.splice(i,1);
      }
    }
  }
  if(checkbox8.checked()){
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===8){
        bills.splice(i,1);
      }
    }
   
  }
  }
    else {
    for(var i=0;i<bills.length;i++){
      if(bills[i].id===9){
        bills.splice(i,1);
      }
    }
    }
  });
}

function draw(){
  image(table,-180,0,900,600);
   image(menu,720,0,240,600);
for(var i=0; i < bills.length; i++){
    if(bills[i].id===7||bills[i].id===8||bills[i].id===9){
      image(food[bills[i].id], bills[i].pos.x, bills[i].pos.y,160,165);
    }
    else{
      image(food[bills[i].id], bills[i].pos.x, bills[i].pos.y);
    }
  }
}
