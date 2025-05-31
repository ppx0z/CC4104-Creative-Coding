let shapeSize; //tracks size of shape when cursor moves
let randomSize; //tracks size randomiser

let randomColor; //tracks random colour
let counter = 0; //counter to countdown when the colour will change

function setup() {
  createCanvas(500, 500);
  ellipseMode(CENTER);

  //to set randomColour to be a random colour
  randomColour = color(random(255), random(255), random(255));
}

frameRate(60);

function draw() {
   background(220);
   patternBG();
  
  if (counter > 19) {
    randomColour = color(random(255), random(255), random(255));
    
    counter = 0;
  }
  
  counter = counter + 1;
  
  //gives user option to pick 3 variations of the experiment
  if (key === '1') {
     optionOne();
   } else if (key === '2') {
      optionTwo();
   } else if (key === '3') {
     optionThree();
   }
}


//option 1
function optionOne(){ //if key '1' is pressed then this section of code will play
  for(let i=0;i<1000;i+=14){
   shapeSize = map(mouseX, 0 , width, 20,150);
   shapeSize = constrain(shapeSize, 20, 150);
    
   stroke('blue');
   strokeWeight(2);
   ellipse(width / 2, height / 2, shapeSize + i -500, shapeSize + i);
   
  }
}

//option 2
function optionTwo(){
  for(let i=0;i<1000;i+=14){
   randomSize = random(0, 100);
    
   stroke('blue');
   strokeWeight(2);
   ellipse(width / 2, height / 2, randomSize + i , randomSize + i);
  }
}

//option 3
function optionThree(){
  for(let i=0;i<1000;i+=14){
   shapeSize = map(mouseX, 0 , width, 20,150);
   shapeSize = constrain(shapeSize, 20, 150);
    
   stroke(randomColour);
   strokeWeight(2);
   ellipse(width / 2, height / 2, shapeSize + i - 500 , shapeSize + i + 110);
   
  }
}

function patternBG() {
  for(let i=0;i<1000;i+=10){
   noFill();
   stroke('purple');
   strokeWeight(3);
   ellipse(250,250,i,i);
 }
}

function mouseIsPressed () {
  //generate new random color, but only once when user clicks
  fillColor = color(random(0,255), random(0,255), random(0,255));
}