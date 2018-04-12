var canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 1024;
var surface = canvas.getContext("2d");
var uInt;
var HUD;
var mouseX;
var mouseY;

canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);
window.addEventListener("keydown", onKeyDown);

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
		console.log("hi");
		switch(event.keyCode)
	{
		case 65://A
		LoadGameOver();
			break;
	}
}

