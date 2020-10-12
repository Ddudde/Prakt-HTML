window.onload = function() {
	var canvas = document.getElementById("test");
	var context = canvas.getContext('2d');
	canvas.height = 200;
	canvas.width = 300;
		
	context.fillStyle = "rgb(200, 0, 0)";
	context.fillRect(15, 15, 130, 100); 
	context.fillStyle = "rgb(0, 200, 0)";
	context.fillRect(30, 30, 100, 70);
}