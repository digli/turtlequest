
function createCanvas() {
	var canvas = document.getElementById('paint');
	var style = window.getComputedStyle(paint);
	canvas.setAttribute('width', style.width);
	canvas.setAttribute('height', style.height);
}

function drawSquare() {
	var paint = document.getElementById("paint").getContext("2d");

	var x = 20;
	var y = 20;

	paint.moveTo(x, y);

	paint.lineTo(x + 20, y);
	paint.lineTo(x + 20, y + 20);
	paint.lineTo(x, y + 20);
	paint.lineTo(x, y);

	paint.stroke();
}