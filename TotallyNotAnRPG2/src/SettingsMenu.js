var canvas = document.querySelector("canvas");
canvas.width = 1350;
canvas.height = 629;

var surface = canvas.getContext("2d");

var uInt;

var settingsBackground;
var accessibility = new Image();
var audio = new Image();
var mappings = new Image();
var gameplay = new Image();
var graphics = new Image();
var mainMenuButton = new Image();
var pauseMenuButton = new Image();

accessibility.src = "../img/AccessibilityOptionsButton.png";
audio.src = "../img/AudioSettingsButton.png";
mappings.src = "../img/ControllerMappingsButton.png";
gameplay.src = "../img/GameplaySettingsButton.png";
graphics.src = "../img/GraphicsSettingsButton.png";
mainMenuButton.src = "../img/BackToMainMenuButton.png";
pauseMenuButton.src = "../img/BackToPauseMenuButton.png";

var buttonX = [500,550,500,510,530];
var buttonY = [150,230,330,415,500];
var buttonWidth = [424,311,422,379,369];
var buttonHeight = [69,68,48,76,85];

var mouseX;
var mouseY;

createBackground();

function loadAccessibilitySettings(){
	window.location.href = 'AccessibilityOptions.html';
}

function loadAudioSettings(){
	window.location.href = 'AudioOptions.html';
}

function loadMappingsSettings(){
	window.location.href = 'ControllerMappings.html';
}

function loadGameplaySettings(){
	window.location.href = 'GameplaySettings.html';
}

function loadGraphicsSettings(){
	window.location.href = 'GraphicsSettings.html'; 
}

function loadMainMenu(){
	window.location.href = 'TotallyNotAnRpg2.html';
}

function loadPauseMenu(){
	window.location.href = 'PauseMenu.html';
}

function loadSettingsMenu(){
	window.location.href = 'SettingsMenu.html';
}

function createBackground(){
	settingsBackground = new Image();
	settingsBackground.src = "../img/SettingsScreen.png";
}

uInt = setInterval(update,33.34);

canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);

function update()
{
	render();
}

function render(){
	surface.clearRect(0,0,canvas.width,canvas.height);
	surface.drawImage(settingsBackground,0,0,1350,629);
	
	surface.drawImage(accessibility, buttonX[0], buttonY[0], buttonWidth[0], buttonHeight[0]);
	surface.drawImage(audio, buttonX[1], buttonY[1], buttonWidth[1], buttonHeight[1]);
	surface.drawImage(mappings, buttonX[2], buttonY[2], buttonWidth[2], buttonHeight[2]);
	surface.drawImage(gameplay, buttonX[3], buttonY[3], buttonWidth[3], buttonHeight[3]);
	surface.drawImage(graphics, buttonX[4], buttonY[4], buttonWidth[4], buttonHeight[4]);
	surface.drawImage(mainMenuButton, 350, 520, 150, 70);
	surface.drawImage(pauseMenuButton, 905, 520, 150, 70);
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

function checkClick (mouseEvent){
	if (mouseX > 500 && mouseX < 924 && mouseY > 150 && mouseY < 219){
		loadAccessibilitySettings();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else if (mouseX > 550 && mouseX < 861 && mouseY > 230 && mouseY < 298){
		loadAudioSettings();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else if (mouseX > 500 && mouseX < 922 & mouseY > 330 && mouseY < 378){
		loadMappingsSettings();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else if (mouseX > 510 && mouseX < 889 & mouseY > 415 && mouseY < 491){
		loadGameplaySettings();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else if (mouseX > 530 && mouseX < 899 && mouseY > 500 && mouseY < 585){
		loadGraphicsSettings();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else if (mouseX > 350 && mouseX < 500 && mouseY > 520 && mouseY < 590){
		loadMainMenu();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else if (mouseX > 905 && mouseX < 1055 && mouseY > 520 && mouseY < 590){
		loadPauseMenu();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
	else{ 
		loadSettingsMenu();
	}
}
















	





	

	
	
	
	
	
	
	
	
	
