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
    let pixelsEffect = Math.floor(Math.random() * 10) + 5

    ctx.fillStyle = "#874e51"
    for(let i = 0; i < pixelsEffect; i++){
      //                                    x                                   y                                                        w        h
      ctx.fillRect(Math.floor(this.x + (Math.random() * (this.w + 20))) - 20,Math.floor(this.y + (Math.random() * (this.h))),  20   ,   20)
    }
  }

  hits(car) {
    // TODO
    return (
      (this.y + this.h) > car.y &&
      this.y < (car.y + car.h) &&
      (this.x + this.w )> car.x &&
      this.x < (car.x + car.w)
    );
  }


}