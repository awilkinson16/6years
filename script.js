/* filepath: c:\Users\adamj\Desktop\New folder\script.js */
const canvas = document.getElementById('fallingHearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
const heartImage = new Image();
heartImage.src = 'https://cdn-icons-png.flaticon.com/512/833/833472.png'; // Replace with your heart image URL if needed

class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.5;
  }
  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(heartImage, this.x, this.y, this.size, this.size);
  }
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0 - this.size;
      this.x = Math.random() * canvas.width;
    }
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    hearts.push(new Heart());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(heart => {
    heart.update();
    heart.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

heartImage.onload = () => {
  init();
  animate();
};