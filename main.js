const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const groundY = canvas.height - 40;
const gravity = 0.6;
const jumpVelocity = -12;

const dino = {
  x: 80,
  y: groundY,
  vy: 0,
  isJumping: false,
};

const obstacle = {
  x: canvas.width + 120,
  width: 22,
  height: 34,
  speed: 5,
  resetOffset: 120,
};

let score = 0;
let isGameOver = false;

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

function drawObstacle() {
  ctx.fillStyle = "#4d5b63";
  ctx.fillRect(obstacle.x, groundY - obstacle.height, obstacle.width, obstacle.height);
}

function drawScore() {
  ctx.fillStyle = "#2f3a40";
  ctx.font = '20px "Trebuchet MS", sans-serif';
  ctx.fillText(`Score: ${Math.floor(score)}`, 16, 28);
}

function drawGameOver() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.textAlign = "center";
  ctx.fillStyle = "#1f2428";
  ctx.font = 'bold 36px "Trebuchet MS", sans-serif';
  ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 10);
  ctx.font = '20px "Trebuchet MS", sans-serif';
  ctx.fillText("Press Space or Up to restart", canvas.width / 2, canvas.height / 2 + 28);
  ctx.textAlign = "start";
}

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawGround();
  drawDino(dino.x, dino.y);
  drawObstacle();
  drawScore();

  if (isGameOver) {
    drawGameOver();
  }
}

function jump() {
  if (dino.isJumping) return;

  dino.vy = jumpVelocity;
  dino.isJumping = true;
}

function updateDino() {
  if (!dino.isJumping) return;

  dino.vy += gravity;
  dino.y += dino.vy;

  if (dino.y >= groundY) {
    dino.y = groundY;
    dino.vy = 0;
    dino.isJumping = false;
  }
}

function updateObstacle() {
  obstacle.x -= obstacle.speed;

  if (obstacle.x + obstacle.width < 0) {
    obstacle.x = canvas.width + obstacle.resetOffset;
  }
}

function getDinoHitbox() {
  return {
    x: dino.x + 1,
    y: dino.y - 53,
    width: 44,
    height: 53,
  };
}

function getObstacleHitbox() {
  return {
    x: obstacle.x + 1,
    y: groundY - obstacle.height + 1,
    width: obstacle.width - 2,
    height: obstacle.height - 2,
  };
}

function isColliding(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function hasCollision() {
  const dinoBox = getDinoHitbox();
  const obstacleBox = getObstacleHitbox();
  return isColliding(dinoBox, obstacleBox);
}

function resetGame() {
  dino.y = groundY;
  dino.vy = 0;
  dino.isJumping = false;
  obstacle.x = canvas.width + obstacle.resetOffset;
  score = 0;
  isGameOver = false;
}

function gameLoop() {
  if (!isGameOver) {
    updateDino();
    updateObstacle();
    score += 0.1;

    if (hasCollision()) {
      isGameOver = true;
    }
  }

  drawScene();
  requestAnimationFrame(gameLoop);
}

window.addEventListener("keydown", (event) => {
  const isJumpKey = event.code === "Space" || event.code === "ArrowUp";
  if (!isJumpKey) return;

  event.preventDefault();
  if (event.repeat) return;

  if (isGameOver) {
    resetGame();
    return;
  }

  jump();
});

gameLoop();
