var canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 1024;

var surface = canvas.getContext("2d");

var uInt;
var underwaterHUD;
var mouseX;
var mouseY;

var healthBar = {
	x: 100;
	y: 100;
	width: 

canvas.addEventListener("mousemove", checkPos);
//canvas.addEventListener("mouseup", checkClick);
//window.addEventListener("keydown", onKeyDown);

HUDbackground();

function HUDbackground(){
	underwaterHUD = new Image();
	underwaterHUD.src = "../img/HUD_main.png";
}

function render(){
	surface.clearRect(0,0,canvas.width,canvas.height);
	surface.drawImage(underwaterHUD,0,0,1030,1100);
}

function update(){
	render();
}

uInt =setInterval(update,33.34);

function checkPos (mouseEvent){
	if(mouseEvent.pageX || mouseEvent.pageY == 0){
		mouseX = mouseEvent.pageX - this.offsetLeft;
		mouseY = mouseEvent.pageY - this.offsetTop;
	}else if (mouseEvent.offsetX || mouseEvent.offsetY == 0){
		mouseX = mouseEvent.offsetX;
		mouseY = mouseEvent.offsetY;
	}
}









