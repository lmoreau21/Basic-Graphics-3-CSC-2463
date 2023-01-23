function setup() {
  createCanvas(800, 400);
}

function draw() {
  shapeWidth = 300;
  background(0);
  noStroke()
  
  fill("yellow")
  arc(width/4,height/2,shapeWidth,shapeWidth,-3*PI/4,-5*PI/4,PIE)
  
  fill("red")
  rect(width/2+shapeWidth/6, height/2, shapeWidth,shapeWidth/2)
  circle(width*3/4, height/2, shapeWidth)
  
  fill("white")
  circle(width*3/4-shapeWidth/4, height/2, shapeWidth/3.5)
  circle(width*3/4+shapeWidth/4, height/2, shapeWidth/3.5)
  
  fill("blue")
  circle(width*3/4-shapeWidth/4, height/2, shapeWidth/6)
  circle(width*3/4+shapeWidth/4, height/2, shapeWidth/6)
}