let car
let obstacles = [];
let gameover;
let points;
let obstacleSpeed = 128

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  //
  ctx.fillStyle = "#808080"
  ctx.fillRect(0,0,W,H)

  ctx.fillStyle = "#ffffff"
  let lineSpace = 25
  for (let i = 0; i < 15; i++){
    ctx.fillRect((W /2) - 10,lineSpace, 20, 75)
    lineSpace+= 120
  }

  ctx.fillStyle = "#ffffff"
  ctx.fillRect(25,0,25,H)

  ctx.fillRect(W -50,0,25,H)
  
  //
  // Iteration 2: car drawing
  //

  car.draw()

  // TODO

  //
  // Iteration #4: obstacles
  //
  
  obstacles.forEach((el)=>{
    if (!(frames % 7)){
    el.y += 50
  }
    el.draw()
  })
  

  if (obstacles.length >= 5){
    obstacles.shift()
  }
  
  // TODO

  //
  // Iteration #5: collisions
  //

  // TODO

  //
  // Iteration #6: points
  //

  // TODO

}

document.onkeydown = function (e) {
  if (!car) return;

  // TODO
}

let raf;
let frames = 0;
function animLoop() {
  frames++;
//console.log(frames)
    if (!(frames % obstacleSpeed)){
      const obstacle = new Obstacle()
      obstacles.push(obstacle)
    }
  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
    
  }

  // TODO
  car = new Car();
  animLoop();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

// auto-start
startGame();


document.addEventListener("keydown", event => {

  if (event.key === "ArrowLeft"){
    car.moveLeft()
  }

  if (event.key === "ArrowRight"){
    car.moveRight()
  }
  console.log(event)
})