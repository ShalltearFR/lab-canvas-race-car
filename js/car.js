//const ctx = document.querySelector('canvas').getContext('2d');


class Car {
  constructor() {
    const img = document.createElement('img');

    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.w = 100;
      this.h = this.w / imgRatio;
      this.x = 450;
      this.y = 400;
      
      //this.draw();
    }
    img.src = "../images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    const ctx = document.querySelector('canvas').getContext('2d');
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveLeft() {
    // TODO
  }
  moveRight() {
    // TODO
  }
}

//const newCar = new Car();




//const carglass = new Car()
//carglass.draw()