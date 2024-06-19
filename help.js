let tp = 'Helper Bot';
let o = 'Online';
let tnap = 'Hi! What is your question?';
let stage = 0;
let c;
let cc;
let facecolor;
let numDots = 9;  // Number of dots
let radius = 50;   // Radius of the circle path for the dots
let angle = 0;     // Initial angle
let colorclick=false;  //jesli jest klikniete 
let img


function setup() {
  c = color(135, 55, 255);
  cc = color(174,136,230);
  facecolor=color(135, 55, 255);
  createCanvas(1920, 1080);
  textSize (30);
  textFont ('Comic Sans MS');
 angleMode(DEGREES);  // Use degrees for angles
 img = loadImage('LINGODUO_LOGO.png');
 
}





function draw() {
  if(mouseIsPressed){
    colorclick=true;
  }else{
  colorclick=false;
  }
 background (cc);
 //logo
 image(img, 1200, 200);
    //rectangle chat
    fill(255);
  strokeWeight(1);
  stroke (51);
  rect(60,60,1120,550);
  strokeWeight(1);
  stroke (51);
  rect(60,160,1120,550);

  // smiley face
  fill (facecolor);
  circle(110,110,60,60);
  fill(255);
  circle(95, 105, 20,20);
  circle(125, 105,20,20);
  fill(0);
  circle(95, 105, 10,10);
  circle(125, 105,10,10);
  arc(110,120, 30, 30, 0, 180);
  //napis
  textSize(30);
  text(tp, 170, 110);
  textSize(15);
  text (o, 175, 130);
  noStroke();
  fill(0,200,0);
  circle(230,125,7,7);
  
  
  
   
  if (stage == 0 ){
     //pierwsza wiadomosc
    fill (c);
    rect(120, 200, 500, 80, 15)
    textSize (20);
    fill (255);
    text (tnap, 140, 235);
    //what u want
    button (100,600,500,80,'Learn more about my subscription plan'); //2
    button (650,600,500,80,'Change subscription plan');//3
  }
  if (stage == 2 ){
    fill (cc);
    rect(650, 200, 500, 80, 15)
    textSize (20);
    fill (255);
    text ('Learn more about my subscription plan', 680, 235);
    fill (c);
    rect(120, 300, 700, 80, 15)
    textSize (20);
    fill (255);
    text ('Your super special offer plan is 99.99$/day for unlimited lessons', 140, 330);
    //this is your plan
    button (100,600,500,80,'Unsubscribe'); //2
    button (650,600,500,80,'See other subscription plans');//3
  }
  if (stage == 3 ){
    fill (cc);
    rect(650, 200, 500, 80, 15)
    textSize (20);
    fill (255);
    text ('Change subscription plan', 680, 235);
    fill (c);
    rect(120, 300, 390, 80, 15)
    textSize (20);
    fill (255);
    text ('Are you sure you want to cancel?', 140, 330);
    //Do you want to see other plans
    button (100,600,500,80,'See other subscription plans'); //2
    button (650,600,500,80,'Unsubscribe');//3
  }
  if (stage == 4 ){
    fill (cc);
    rect(650, 200, 500, 80, 15)
    textSize (20);
    fill (255);
    text ('Unsubscribe', 680, 235);
    fill (c);
    rect(120, 300, 700, 80, 15)
    textSize (20);
    fill (255);
    text ('Are you sure you want to unsubscribe?', 140, 330);
    //this is your plan
    //Do you really want to cancel your special plan?
    button (100,600,500,80,'Yes'); //2
    button (650,600,500,80,'see other options');//3
  }
  if (stage == 5 ){    //other plans
    fill (cc);
    rect(650, 200, 500, 80, 15)
    textSize (20);
    fill (255);
    text ('See other subscription plans', 680, 235);
    fill (c);
    rect(120, 300, 700, 270, 15)
    textSize (20);
    fill (255);
    text ('Basic plan 69.99$', 140, 330);
    text ('Pro plan 99.99$', 140, 400);
    text ('Super pro plan 119.99$', 140, 470);
    text ('Choose your plan today!', 140, 540);
    // are you sure you want to cancel?
    button (100,600,500,80,'Cancel'); //2
    button (650,600,500,80,'Choose plan ');//3
  }
  if (stage>=6 && stage<30){
    
    
    
    
    push();
   translate(width / 2-30, height / 2);  // Move origin to center of canvas

  let angleStep = 360 / numDots;  // Angle between each dot

  for (let i = 0; i < numDots; i++) {
    let currentAngle = angle + i * angleStep;  // Angle for the current dot
    let x = cos(currentAngle) * radius;  // X position based on angle and radius
    let y = sin(currentAngle) * radius;  // Y position based on angle and radius

    let alpha = map(i, 0, numDots, 50, 255);  // Calculate alpha for fading effect

    let purple = color(135, 55, 255, alpha);  // Create a purple color with alpha

    fill(purple);  // Fill with purple color
    noStroke();
    ellipse(x, y, 20, 20);  // Draw dot with increased size
  }

  angle += 5;  // Increment angle for faster rotation effect 
  pop();
  
  
  
  
    button (100,600,1050,80,);
    fill (255);
    textSize(30);
    text('Refresh', 550, 650);
  };
   if (stage>=30 && stage<32){
 
    button (100,600,1050,80,);
    fill (facecolor);
    textSize(30);
    text('Uh oh! Seems like our server ran into a problem!', 290, height/2-50);
    text('You tried to unsubscribe too many times.', 330, height/2);
    fill (255);
    text('Unsubscribe manually', 450, 650);
  };
  if (stage >=32){
  window.open ('https://faron012.github.io/mfaronCC/ ', '_self');
  }
  
}




function mouseReleased(){    //ebu
if (checkMouseOver(100,600,500,80) == true){
stage = stage+2;
}
if (checkMouseOver(650,600,500,80) == true){
stage = stage +3;
}

}





function checkMouseOver(x,y,w,h){      //sprawdza czy myszka jest tad tym przyciskiem 
let check = false;
if(mouseX>x && mouseX<x+w && mouseY > y && mouseY < y+h){
  check = true;
}else{
check = false;
}
return check
}




function button(x,y,w,h,t) {    //rysuje przycisz
  push();
   
if(checkMouseOver(x,y,w,h)== true && colorclick==false){
fill (cc);
if (stage>=6 && stage<20){
   colorMode(HSB);
   let hue=random(160,250);
   c= color(hue, 255, 120);
   }else{
   c=color(135, 55, 255);
   }
mouseOver = true;
} else {
fill (c);
}
rect(x,y,w,h);
fill (255);
text(t, x+70, y+45);
pop();

}
