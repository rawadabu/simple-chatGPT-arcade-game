var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var targetX = canvas.width / 2;
var targetY = canvas.height / 2;
var targetRadius = 10;

var score = 0;

function update() {
    // Move the target randomly
    targetX += Math.floor(Math.random() * 3) - 1;
    targetY += Math.floor(Math.random() * 3) - 1;

    // Keep the target within the canvas bounds
    if (targetX < targetRadius) {
        targetX = targetRadius;
    }
    if (targetX > canvas.width - targetRadius) {
        targetX = canvas.width - targetRadius;
    }
    if (targetY < targetRadius) {
        targetY = targetRadius;
    }
    if (targetY > canvas.height - targetRadius) {
        targetY = canvas.height - targetRadius;
    }

    // Clear the canvas and redraw the target
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(targetX, targetY, targetRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();

    // Update the score
    document.getElementById("score").innerHTML = score;
}

function handleClick(event) {
    // Calculate the distance between the click and the target
    var dx = event.clientX - targetX;
    var dy = event.clientY - targetY;
    var distance = Math.sqrt(dx * dx + dy * dy);

    // If the click was inside the target, increment the score
    if (distance <= targetRadius) {
        score++;
    }
}

function startGame() {
    // Add a click event listener to the canvas
    canvas.addEventListener("click", handleClick);

    // Start the game loop
    setInterval(update, 10);
}

// Add a click event listener to the start button
document.getElementById("startButton").addEventListener("click", startGame);
