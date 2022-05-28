let car
let obstacles = [];
let gameover;
let points;
let obstacleSpeed = 128
let roadframes = 0

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  // Iteration 1: road drawing
  //
  ctx.fillStyle = "#808080" // Arrière plan gris
  ctx.fillRect(0,0,W,H)

  ctx.fillStyle = "#ffffff"
  lineSpace = 25
  for (let i = 0; i < 15; i++){
    ctx.fillRect((W /2) - 10,lineSpace, 20, 75) // Lignes blanche
    lineSpace+= 120
  }

  ctx.fillRect(25,0,25,H) // Bordure gauche
  ctx.fillRect(W -50,0,25,H) // Bordure droite
  
  //
  // Iteration 2: car drawing
  //

  car.draw()

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
  
  //
  // Iteration #5: collisions
  //

  obstacles.forEach((el)=>{
    if (el.hits(car)){
      gameover = true
    }
  })

  //
  // Iteration #6: points
  //
  ctx.font = "40px Arial"
  ctx.fillStyle = "#eed707"
  ctx.fillText(`Score : ${Math.floor(frames / 60)}`, 700, 60)

}

document.onkeydown = function (e) {
  if (!car) return;
}

let raf;
let frames = 0;
function animLoop() {
  frames++;
  if (!(frames % obstacleSpeed)){
    const obstacle = new Obstacle()
    obstacles.push(obstacle)
  }
  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  } else{
    ctx.font = "100px Arial"
    ctx.fillStyle = "#000000"
    ctx.fillText("GAME OVER", 202, 602)
    ctx.fillStyle = "#ff0007"
    ctx.fillText("GAME OVER", 200, 600)
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
    
  }

  car = new Car();
  obstacles = []
  animLoop();
}

document.getElementById("start-button").onclick = function() {
  gameover = false
  frames = 0
  startGame();
};

// auto-start
startGame();

document.addEventListener("keydown", event => {
  if (!gameover){
    if (event.key === "ArrowLeft"){
      car.moveLeft()
    }
  
    if (event.key === "ArrowRight"){
      car.moveRight()
    }
  }
})