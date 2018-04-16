var canvas= document.querySelector("canvas");
canvas.width= 1024;
canvas.height = 1024;

var surface = canvas.getContext ("2d");
var uInt;
var GameOver;

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

function loadContinue()
{
	window.location.href = 'MainHUD.html';

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
	if (mouseX > 415 && mouseX < 603 && mouseY > 360 && mouseY < 416){
			loadContinue();
			canvas.removeEventListener("mousemove", checkPos);
			canvas.removeEventListener("mouseup", checkClick);
		}
	else if (mouseX > 415 && mouseX < 610 && mouseY > 460 && mouseY < 516){
				loadNextLevel();
				canvas.removeEventListener("mousemove", checkPos);
				canvas.removeEventListener("mouseup", checkClick);
		}
	else if (mouseX > 415 && mouseX < 610 && mouseY > 530 && mouseY < 586){
				loadNextLevel();
				canvas.removeEventListener("mousemove", checkPos);
				canvas.removeEventListener("mouseup", checkClick);
		}
	}	





