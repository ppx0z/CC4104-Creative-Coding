let randomColour;
let counter= 0;

function setup() {
  createCanvas(400, 600);
  noFill();
  strokeWeight(3);
  rectMode(CENTER);
  
  //to set randomColour to be a random colour
  randomColour = color(random(255), random(255), random(255));
  
  frameRate(1);
}



function draw() {
  background(220);
  generatePattern();
  
  if (counter > 2) {
    randomColour = color(random(255), random(255), random(255));
    
    counter = 0;
  }
  
  counter = counter + 1;
}

function generatePattern(){
  let space = 30;
  for (x=0; x<width+random(30); x+=space){
    for (y=0;y<height+random(40); y+=space){
      line(x,y,x+space,y);
      line(x,y,x,y+space);
      stroke(randomColour);
      square(x,y,random(20))
      stroke(randomColour)
      square(x+space/2,y+space/2,10)
    }
  }
}