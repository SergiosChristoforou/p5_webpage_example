function setup() {
 createCanvas(400, 400);
}

function draw() {
 background(255);
  
  fill(0)
  rect(0,0,mouseX,mouseY)
  
  x=400-mouseX
  
  fill(175)
  rect(mouseX,0,x,mouseY)
  
  y=400-mouseY
  
  fill (255)
  rect(0,mouseY,mouseX,y)
  
  fill(100)
  rect(mouseX,mouseY,x,y)
}