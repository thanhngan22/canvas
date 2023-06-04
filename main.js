const colors = [
      "#BA4949",
      "#38858A",
      "#397097",
      "#A4893C",
      "#7D53A2",
      "#AF4E91",
      "#518A58",
      "#545764"];

// ep1
const cv1 = document.getElementById("__ep3")
// console.log(cv1)

const c1 = cv1.getContext("2d")
// console.log(ctx1)

// set height and width 
cv1.width = window.innerWidth
cv1.height = window.innerHeight

/*
// line
c1.beginPath();
c1.moveTo(225, 225);
c1.lineTo(300, 300);
c1.stroke();

// rectangle
c1.beginPath();
c1.rect(50, 50, 100, 100);
c1.stroke();

// circle
c1.beginPath();
c1.arc(300, 300, 30, 0, Math.PI * 2, false);
c1.stroke();
*/

// create class for circle
class Circle {
    constructor (x, y, dx, dy, r, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.color = color;
    }

    drawStroke () {
        c1.beginPath();
        c1.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c1.strokeStyle = this.color;
        c1.stroke();
    }

    drawFill() {
        c1.beginPath();
        c1.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c1.fillStyle(this.color);
        c1.fill();
    }

    updateStroke() {
        c1.beginPath();
        this.x += this.dx;
        this.y += this.dy;
        c1.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c1.strokeStyle = this.color;
        c1.stroke();
    }

    updateFill() {
        c1.beginPath();
        this.x += this.dx;
        this.y += this.dy;
        c1.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c1.fillStyle = this.color;
        c1.fill();
    }

    // bounce off the wall  
    bounce() {
        if (this.x + this.r > cv1.width || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.r > cv1.height || this.y - this.r < 0) {
            this.dy = -this.dy;
        }

    }

}

// create circle
let circleArray = [];
for (let i = 0; i < 100; i++) {
    let r = 30;
    let x = Math.random() * (cv1.width - r * 2) + r;
    let y = Math.random() * (cv1.height - r * 2) + r;
    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;
    let color = colors[Math.floor(Math.random() * colors.length)];
    circleArray.push(new Circle(x, y, dx, dy, r, color));
}

// animate
function animate() {
    requestAnimationFrame(animate);
    // c1.clearRect(0, 0, cv1.width, cv1.height);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].updateStroke();
        // circleArray[i].updateFill();
        circleArray[i].bounce();
    }

}

animate();