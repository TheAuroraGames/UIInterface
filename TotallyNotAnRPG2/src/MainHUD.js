var canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 1024;
var surface = canvas.getContext("2d");
var uInt;
var HUD;
var mouseX;
var mouseY;
var MiniMap;
var Navi;

canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);
window.addEventListener("keydown", onKeyDown);

MiniMap = new Image();
MiniMap.src = "../img/rustmap.png";

Navi= new Image ();
Navi.src = "../img/navigator_icon.png";

HUDimage();

function HUDimage()
{
	HUD = new Image();
	HUD.src = "../img/HUD_main.png";
}
function update()
{
	render();
}
uInt =setInterval(update,33.34);

function render ()
{
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(HUD,0,0,1030,1100);
		surface.drawImage(MiniMap,811,508,195,185);
		surface.drawImage(Navi,830,665,16,16);
}



function checkPos (mouseEvent){
	if(mouseEvent.pageX || mouseEvent.pageY == 0){
		mouseX = mouseEvent.pageX - this.offsetLeft;
		mouseY = mouseEvent.pageY - this.offsetTop;
	}else if (mouseEvent.offsetX || mouseEvent.offsetY == 0){
		mouseX = mouseEvent.offsetX;
		mouseY = mouseEvent.offsetY;
	}
}

function checkClick(mouseEvent){
	if (mouseX > 750 && mouseX < 878 && mouseY > 600 && mouseY < 720){
			LoadContinue();
			canvas.removeEventListener("mousemove", checkPos);
			canvas.removeEventListener("mouseup", checkClick);
		}

	
	}	
	
function onKeyDown(event)
{
		
		switch(event.keyCode)
	{
		case 65://A
		LoadGameOver();
			break;
	}
}

