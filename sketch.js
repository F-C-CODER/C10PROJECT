
function setup(){
  createCanvas(1300,700)
}

function draw(){
  background("yellow")
  console.log("my project is running")
  text(mouseX+ ","+ mouseY,mouseX,mouseY)
}