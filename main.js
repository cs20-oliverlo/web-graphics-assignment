// Graphics and Animation Demo Start

// Variables
let fishImg = document.getElementById("fishy-img");
let cloudImg = document.getElementById("cloth-img");

// Set up canvas and 2D graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

document.getElementById("draw-rect1").addEventListener("click", rectangle1);
function rectangle1() {
// Solid Rectangle
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    cnv.width = 600;
    cnv.height = 400;
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 60);
}

document.getElementById("draw-rect2").addEventListener("click", rectangle2);
function rectangle2() {
// Outlined Rectangle
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    cnv.width = 600;
    cnv.height = 400;
    cnv.width = 600;
    cnv.height = 400;
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    ctx.strokeRect(50, 130, 100, 60);
}

document.getElementById("draw-text1").addEventListener("click", text1);
function text1() {
// Solid Text
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    cnv.width = 600;
    cnv.height = 400;
    ctx.font = "30px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Canvas Text", 300, 100);
}

document.getElementById("draw-text2").addEventListener("click", text2);
function text2() {
// Outline Text
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    cnv.width = 600;
    cnv.height = 400;
    ctx.font = "36px Times";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "red";
    ctx.strokeText("Canvas Text 2", 300, 130);
}

document.getElementById("draw-line").addEventListener("click", liner);
function liner() {
// Line
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    cnv.width = 600;
    cnv.height = 400;
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(0, 0, 255)";
    ctx.beginPath();
    ctx.moveTo(75, 50); // Start at (x1, y1)
    ctx.lineTo(200, 100); // Go to (x2, y2)
    ctx.stroke(); // Draw line
}

document.getElementById("draw-triangle1").addEventListener("click", tri1);
function tri1() {
// Filled Triangle
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    cnv.width = 600;
    cnv.height = 400;
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(100, 50); // Start at (x1, y1)
    ctx.lineTo(50, 150); // Start at (x2, y2)
    ctx.lineTo(150, 150); // Start at (x3, y3)
    ctx.fill(); // Fill shape
}

document.getElementById("draw-triangle2").addEventListener("click", tri2);
function tri2() {
// Filled Triangle
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    cnv.width = 600;
    cnv.height = 400;
    ctx.lineWidth = 2;
    ctx.strokeStyle = "green"
    ctx.beginPath();
    ctx.moveTo(100, 50); // Start at (x1, y1)
    ctx.lineTo(50, 150); // Start at (x2, y2)
    ctx.lineTo(150, 150); // Start at (x3, y3)
    ctx.closePath(); // Go back to start
    ctx.stroke(); // Draw line path
}

document.getElementById("draw-circle1").addEventListener("click", circle1)
function circle1() {
// Draw a solid circle
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    cnv.width = 600;
    cnv.height = 400;
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(250, 150, 100, 0, 2 * Math.PI);
    // ctx.arc(x, y, r, startAngle, endAngle);
    ctx.fill();
}

document.getElementById("draw-circle2").addEventListener("click", circle2)
function circle2() {
// Draw an outlined circle
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    cnv.width = 600;
    cnv.height = 400;
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, 2 * Math.PI);
    ctx.stroke();
}

document.getElementById("draw-image").addEventListener("click", image1)
function image1() {
// Draw an image
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    cnv.width = 600;
    cnv.height = 400;
    ctx.drawImage(fishImg, 50, 150);
}

document.getElementById("draw-assignment1").addEventListener("click", assignment1);
function assignment1() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    cnv.width = 400;
    cnv.height = 400;
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 1000, 300);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(200, 300, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, 1000, 100);
    ctx.drawImage(cloudImg, 150, 125);
    ctx.drawImage(cloudImg, 175, 100);
}