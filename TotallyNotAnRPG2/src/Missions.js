var canvas= document.querySelector("canvas");
canvas.width= 1024;
canvas.height = 1024;

var surface = canvas.getContext ("2d");
var uInt;
var Missions;
var backArrow = new Image();
backArrow.src="../img/backArrow.png";
var mouseX;
var mouseY;


createMissions();


function createMissions()
{
Missions = new Image();
Missions.src= "../img/Missions.png";
}

function loadNextLevel()
{
	window.location.href = 'PauseMenu.html';

}

function loadMenu()
{
	window.location.href ="Missions.html";
}

function update ()
{
	render();
}
uInt =setInterval(update,33.34);

function render()
{
	surface.clearRect(0,0,canvas.width,canvas.height);
	surface.drawImage(Missions,0,0,1024,768);
	
	surface.drawImage(backArrow, 150,600);
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
	
function checkClick(mouseEvent)
{
	if (mouseX > 150 && mouseX < 278 && mouseY > 600 && mouseY < 720)
	{
		loadNextLevel();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else
		{
			loadMenu();
		}
}
canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);




