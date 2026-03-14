const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const groundY = canvas.height - 40;

function drawGround() {
  ctx.strokeStyle = "#57666f";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.lineTo(canvas.width, groundY);
  ctx.stroke();
}

function drawDino(x, y) {
  // Simple placeholder dino made from rectangles.
  ctx.fillStyle = "#2f3a40";

  // Body
  ctx.fillRect(x, y - 36, 42, 26);

  // Head
  ctx.fillRect(x + 28, y - 54, 18, 18);

  // Legs
  ctx.fillRect(x + 6, y - 10, 8, 10);
  ctx.fillRect(x + 24, y - 10, 8, 10);

  // Eye
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(x + 38, y - 50, 3, 3);
}

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawGround();
  drawDino(80, groundY);
}

drawScene();
