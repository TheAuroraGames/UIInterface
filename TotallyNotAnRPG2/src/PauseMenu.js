var canvas= document.querySelector("canvas");
canvas.width= 1024;
canvas.height = 1024;


var surface = canvas.getContext ("2d");
var uInt;
var PauseMenu;
var Missions1 = new Image();
var Settings = new Image();
var FullMap = new Image();
var SkillTree = new Image();
var Crafting = new Image();
var MainMenu1 = new Image();

Missions1.src = "../img/Missions1.png";
Settings.src = "../img/Settings.png";
FullMap.src = "../img/FullMap.png";
SkillTree.src = "../img/SkillTree.png";
Crafting.src = "../img/Crafting.png";
MainMenu1.src = "../img/MainMenu1.png";


var buttonX = [550,563,568,425,340,600];
var buttonY = [460,495,540,524,650,630];
var buttonWidth = [175,200,190,180,90,100];
var buttonHeight = [87,82,75,60,45,58];


var mouseX;
var mouseY;


createPauseMenu();

function createPauseMenu()
{
PauseMenu = new Image();
PauseMenu.src= "../img/PauseMenu.png";
}

function loadMenu()
{
	window.location.href = "MainMenu.html";
}


canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);

function update ()
{
	render();
}
uInt =setInterval(update,33.34);

function render()
{
	surface.clearRect(0,0,canvas.width,canvas.height);
	surface.drawImage(PauseMenu,0,0,1024,768);
	
	surface.drawImage(Missions1, buttonX[0], buttonY[0], buttonWidth[0], buttonHeight[0]);
	surface.drawImage(Settings, buttonX[1], buttonY[1], buttonWidth[1], buttonHeight[1]);
	surface.drawImage(FullMap, buttonX[2], buttonY[2], buttonWidth[2], buttonHeight[2]);
	surface.drawImage(SkillTree, buttonX[3], buttonY[3], buttonWidth[3], buttonHeight[3])
	surface.drawImage(Crafting, buttonX[4], buttonY[4], buttonWidth[4], buttonHeight[4])
	surface.drawImage(MainMenu1, buttonX[5], buttonY[5], buttonWidth[5], buttonHeight[5]);
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
			loadMenu();
		}
	}	
