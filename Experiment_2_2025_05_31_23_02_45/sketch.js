let canvasBG = 'white';
let defaultBS = 2; //default brush size

function setup() {
  createCanvas(900, 600);
  background(canvasBG);
  canvasMenu ();
}

function canvasMenu (){
  //creates navbar
  fill('#001429');
  rect(0,0,900,120);
  
  //adds text for brush selection
  fill('white');
  textSize(16);
  text("Press: 1 - Default Brush", 20,20);
  text("Press: 2 - Eraser", 20,40);
  text("Press: 3 - Chaos Brush", 20,60);
  
  //buttons for the painting tool
  button = createButton('Clear Canvas');
  button.position(400, 10);
  button.mouseClicked(clearScreen);
}

function draw() {
  if(key === '1'){
   defaultBrush();
  } else if (key === '2'){
   eraserBrush()
  } else if (key === '3'){
    chaosBrush();
  }
  
}

function defaultBrush(){
  if (mouseIsPressed){
    stroke(defaultBS);
    stroke('blue');
    line(pmouseX,pmouseY, mouseX, mouseY);
  }
}

function eraserBrush(){
  if (mouseIsPressed){
    stroke(defaultBS);
    stroke(canvasBG);
    line(pmouseX,pmouseY, mouseX, mouseY);
  }
}

function chaosBrush(){
 if (mouseIsPressed){
    let sz = random(10);
    strokeWeight(random(20));
    let spread = random(50);
    let rand1 = random(mouseX - spread, mouseX + spread);
    let rand2 = random(mouseY - spread, mouseY + spread);
    let rand3 = random(mouseX - spread, mouseX + spread);
    let rand4 = random(mouseY - spread, mouseY + spread);
    let rand5 = random(mouseX - spread, mouseX + spread);
    let rand6 = random(mouseY - spread, mouseY + spread);
    let rand7 = random(mouseX - spread, mouseX + spread);
    let rand8 = random(mouseY - spread, mouseY + spread);
		
    stroke('yellow');
    rect(rand1, rand2, sz, sz);
    stroke('blue');
    ellipse(rand3, rand4, sz, sz);
    stroke('pink');
    ellipse(rand5, rand6, sz, sz);
    stroke('red');
    triangle(rand7, rand8, rand1, rand3)
    
 }
}

function clearScreen(){ //function to clear canvas
  fill(canvasBG);
  noStroke();
  rect(0,120, width, height);
}


