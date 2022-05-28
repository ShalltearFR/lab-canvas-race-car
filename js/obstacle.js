function random(from, to) {
  // TODO
}

class Obstacle {
  constructor() {
    // TODO
    this.w = Math.floor(Math.random() * 350) + 50
    this.h = 25
    this.x = Math.floor(Math.random() * (W - this.w))
    this.y = 0
  }

  draw() {
    // TODO
    ctx.fillStyle = "#870007"
    ctx.fillRect(this.x, this.y, this.w,this.h)
  }

  hits(car) {
    // TODO
  }


}