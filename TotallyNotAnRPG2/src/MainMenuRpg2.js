var canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 1024;

var surface = canvas.getContext("2d");

canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);

var MainMenuBack;

var UInt;

createBackground();

function LoadNewGame()
{
	window.location.href ='CharacterScreen.html';
}

//Put In proper linking
function LoadContinue()
{
	window.location.href ='TotallyNotAnRpg2.html';
}
//Put in proper linking
function LoadSettings()
{
	window.location.href ='SettingsMenu.html';
}
//put in proper linking
function LoadCredits()
{
	window.location.href ='Credits.html';
}

function update ()
{
	render();
}

UInt = setInterval(update,33.34);


function createBackground()
{
	MainMenuBack = new Image();
	MainMenuBack.src = "../img/Start_Menu.png";
}

function render()
{
	surface.clearRect(0,0,canvas.width,canvas.height);
	surface.drawImage(MainMenuBack,0,0,1024,768);
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
	if (mouseX > 150 && mouseX < 830 && mouseY > 300 && mouseY < 425){
			LoadNewGame();
			canvas.removeEventListener("mousemove", checkPos);
			canvas.removeEventListener("mouseup", checkClick);
		}
	else if(mouseX > 150 && mouseX < 830 && mouseY > 440 && mouseY < 495){
		LoadContinue();
			canvas.removeEventListener("mousemove", checkPos);
			canvas.removeEventListener("mouseup", checkClick);
	}
	else if(mouseX > 150 && mouseX < 830 && mouseY > 505 && mouseY < 565){
		LoadSettings();
			canvas.removeEventListener("mousemove", checkPos);
			canvas.removeEventListener("mouseup", checkClick);
	}
	else if(mouseX > 150 && mouseX < 830 && mouseY > 570 && mouseY < 620){
		LoadCredits();
			canvas.removeEventListener("mousemove", checkPos);
			canvas.removeEventListener("mouseup", checkClick);
	}
	
	}	
