

// HTML Canvas Reference
// http://www.w3schools.com/tags/ref_canvas.asp 
	

function calibrateCanvas() {
	var canvas = document.getElementById('paint');
	var style = window.getComputedStyle(paint);
	canvas.setAttribute('width', style.width);
	canvas.setAttribute('height', style.height);
}

function drawBox() {
	var paint = document.getElementById("paint").getContext("2d");

	var x = 60;
	var y = 30;

	paint.moveTo(x, y);

	paint.lineTo(x + 50, y);
	paint.lineTo(x + 50, y + 50);
	paint.lineTo(x, y + 50);
	paint.lineTo(x, y);

	paint.stroke();
}

function drawMoon() {
	var paint = document.getElementById("paint").getContext("2d");

	paint.beginPath();
	paint.arc(300, 400, 100, 0, 2*Math.PI);
	paint.stroke();
}

function execute() {
	var paint = document.getElementById("paint").getContext("2d");
	var code = document.getElementById('code').value;

	eval(code);

//	var temp = code.split(';');

//	for (var i = 0; i < temp.length; i++) {
//		eval(temp[i].trim() + ";");
//	}
}

function clearCanvas() {
	var canvas = document.getElementById('paint');
	canvas.width = canvas.width;
}