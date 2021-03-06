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


var buttonX = [400,410,400,620,640,630];
var buttonY = [450,550,655,460,550,650];
var buttonWidth = [175,200,220,230,210,220];
var buttonHeight = [87,82,75,80,95,90];


var mouseX;
var mouseY;


createPauseMenu();

function createPauseMenu()
{
PauseMenu = new Image();
PauseMenu.src= "../img/PauseMenu.png";
}

function loadMissions(){
	window.location.href = 'Missions.html';
}

function loadSettingsMenu(){
	window.location.href = 'SettingsMenu.html';
}

function loadMap(){
	window.location.href = 'Map.html';
}

function loadSkillTree(){
	window.location.href = 'SkillTree.html';
}

function loadCraftingMenu(){
	window.location.href = 'Crafting.html';
}

function loadMainMenu()
{
	window.location.href = 'MainMenuRpg2.html';
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
	if (mouseX > 400 && mouseX < 575 && mouseY > 450 && mouseY < 537){
		loadMissions();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else if (mouseX > 410 && mouseX < 610 && mouseY > 550 && mouseY < 632){
		loadSettingsMenu();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else if (mouseX > 400 && mouseX < 620 && mouseY > 655 && mouseY < 730){
		loadMap();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else if (mouseX > 620 && mouseX < 850 && mouseY > 460 && mouseY < 540){
		loadSkillTree();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else if (mouseX > 640 && mouseX < 850 && mouseY > 550 && mouseY < 645){
		loadCraftingMenu();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else if (mouseX > 630 && mouseX < 850 && mouseY > 650 && mouseY < 740){
		loadMainMenu();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
}
	
		

	
	
	
	
	
	
	
	