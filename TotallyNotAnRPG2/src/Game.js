var canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 1024;

var surface = canvas.getContext("2d");

surface.font = "30px Arial";
surface.fillStyle = "black";
surface.textAlign = "center";

canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);
window.addEventListener("keydown", onKeyDown);

var GameBack;
var backArrow = new Image();
backArrow.src ="../img/backArrow.png";
var UInt;

createBackground();

function LoadGameOver()
{
	window.location.href = 'GameOverUI.html';
}

//Put In proper linking
function LoadContinue()
{
	window.location.href ='PauseMenu.html';
}

function update ()
{
	render();
}

UInt = setInterval(update,33.34);


function createBackground()
{
	GameBack = new Image();
	GameBack.src = "../img/White.png";
}

function render()
{
	surface.clearRect(0,0,canvas.width,canvas.height);
	surface.drawImage(GameBack,0,0,1024,768);
	surface.drawImage(backArrow,750,600);
	surface.font = "30px Arial";
	surface.fillText("This screen will be the HUD elements and the game.",500,350);
	
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
			console.log("hi");
		switch(event.keyCode)
		{
			case 65://A
			LoadGameOver();
			break;
		}
	}
