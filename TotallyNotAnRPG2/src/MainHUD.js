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
var NaviData;
var leftPressed;
var rightPressed;
var upPressed;
var downPressed;

canvas.addEventListener("mousemove", checkPos);
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

MiniMap = new Image();
MiniMap.src = "../img/rustmap.png";



HUDimage();
createNavi();

function createNavi()
{
	Navi= new Image ();
	Navi.src = "../img/navigator_icon.png";
	NaviData={
	x:830,
	y:665,
	width:16,
	height:16
	};
}
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
		if (leftPressed== true)
		{
			surface.drawImage(Navi,NaviData.x--,NaviData.y,NaviData.width,NaviData.height);
		}
		else if (rightPressed==true)
		{
			surface.drawImage(Navi,NaviData.x++,NaviData.y,NaviData.width,NaviData.height);
		}
		else if (upPressed==true){
			surface.drawImage(Navi,NaviData.x,NaviData.y--,NaviData.width,NaviData.height);
		}
		else if (downPressed==true){
			surface.drawImage(Navi,NaviData.x,NaviData.y++,NaviData.width,NaviData.height);
		}
		else
		{
			surface.drawImage(Navi,NaviData.x,NaviData.y,NaviData.width,NaviData.height);
		}
		
		
		
		
		
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

	
function onKeyDown(event)
{
		
		switch(event.keyCode)
	{
		case 65://A
			leftPressed = true;
			break;
		case 68: // D
			rightPressed = true;
			break;
		case 87: // W
			upPressed= true;
			break;
		case 83://S
			downPressed = true;
			break;
			
	}
}
function onKeyUp(event)
{
		switch(event.keyCode)
	{
		case 65://A
			leftPressed = false;
			break;
		case 68: // D
			rightPressed = false;
			break;
		case 87: // W
			upPressed= false;
			break;
		case 83://S
			downPressed = false;
			break;
			
	}
}