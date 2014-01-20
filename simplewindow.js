
// HTML Canvas Reference
// http://www.w3schools.com/tags/ref_canvas.asp 
	
// JavaScript parser
// https://github.com/dmajda/pegjs/blob/master/examples/javascript.pegjs

function calibrateCanvas() {
	var canvas = document.getElementById('paint');
	var style = window.getComputedStyle(paint);
	canvas.setAttribute('width', style.width);
	canvas.setAttribute('height', style.height);

	// initiate global paint (this function is called with onload)
	paint = document.getElementById("paint").getContext("2d");
}

function drawBox() {
	var x = 80;
	var y = 420;
	var side = 60;

	paint.beginPath();
	paint.moveTo(x, y);
	paint.lineTo(x + side, y);
	paint.lineTo(x + side, y + side);
	paint.lineTo(x, y + side);
	paint.lineTo(x, y);

	paint.stroke();
}

function drawMoon() {
	paint.beginPath();
	paint.arc(110, 450, 30, 0, 2*Math.PI);
	paint.stroke();
}

function execute() {
	var code = document.getElementById('code').value;

	try {
		paint.beginPath();
		eval(code);
		paint.stroke();
	} catch(err) {
		alert('Syntax error (probably)');
	}
}

function clearCanvas() {
	var canvas = document.getElementById('paint');
	canvas.width = canvas.width;
}

function Turtle(x, y) {
	this.x = x;
	this.y = y;
	this.direction = 90;
}

Turtle.prototype.forward = function(distance) {
	paint.moveTo(this.x, this.y);
	var rad = this.direction * Math.PI / 180;
	this.x += distance * Math.cos(rad);
	this.y -= distance * Math.sin(rad);
	paint.lineTo(this.x, this.y);
}

Turtle.prototype.left = function(degrees) {
	this.direction += degrees;
	this.direction %= 360;
}

Turtle.prototype.moveTo = function(x, y) {
	this.x = x;
	this.y = y;
}
