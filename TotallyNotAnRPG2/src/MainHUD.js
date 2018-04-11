var canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 1024;
var surface = canvas.getContext("2d");
var uInt;
var HUD
var mouseX;
var mouseY;


HUDimage();

function HUDimage()
{
	HUD = new Image();
	HUD.src = "../img/HUD_main.png";
}

function render ()
{
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(HUD,0,0,1030,1100);
}

function update()
{
	render();
}
uInt =setInterval(update,33.34);

