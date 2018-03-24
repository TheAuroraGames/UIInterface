var canvas= document.querySelector("canvas");
canvas.width= 1024;
canvas.height = 1024;

var surface = canvas.getContext ("2d");
var uInt;
var GameOver;

var buttonX = [405,350,388];
var buttonY = [545,600,650];
var buttonWidth = [98,208,127];
var buttonHeight = [36,34,46];

var mouseX;
var mouseY;


createGameOver();

function loadNextLevel() 
{
	window.location.href= 'MainMenuRPG2.html';
}

function createGameOver()
{
GameOver = new Image();
GameOver.src= "../img/Game Over.png";
}

function loadNextLevel()
{
	window.location.href = 'TotallyNotAnRPG2.html';

}
function update ()
{
	render();
}
uInt =setInterval(update,33.34);

canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);

function render()
{
	surface.clearRect(0,0,canvas.width,canvas.height);
	surface.drawImage(GameOver,0,0,1024,768);
	surface.drawImage(start, buttonX[0], buttonY[0], buttonWidth[0], buttonHeight[0]);
	surface.drawImage(levelSelection, buttonX[1], buttonY[1], buttonWidth[1], buttonHeight[1]);
	surface.drawImage(settings, buttonX[2], buttonY[2], buttonWidth[2], buttonHeight[2]);
	surface.drawImage(exit, buttonX[3], buttonY[3], buttonWidth[3], buttonHeight[3]);
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
	if (mouseX > 405 && mouseX < 503 && mouseY > 545 && mouseY < 581){
			loadNextLevel();
			canvas.removeEventListener("mousemove", checkPos);
			canvas.removeEventListener("mouseup", checkClick);
		}
	else
		{
			loadNextLevel();
		}
	}	





