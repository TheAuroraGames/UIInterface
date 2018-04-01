var canvas = document.querySelector("canvas");
canvas.width = 125;
canvas.height = 59;

var surface = canvas.getContext("2d");

var uInt;

var backButton = new Image();
backButton.src = "../img/BackButton.png";

var mouseX;
var mouseY;

function loadSettingsMenu(){
	window.location.href = 'SettingsMenu.html';
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
	surface.drawImage(backButton,0,0,125,59);
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
	if (mouseX > 0 && mouseX < 126 && mouseY > 0 && mouseY < 59){
		loadSettingsMenu();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
}

var AudioData = new Audio("../aud/Welcome Screen.mp3");
AudioData.loop = true;
AudioData.play();


var masterVolume = document.getElementById("master");
var musicVolume = document.getElementById("music");
var uiVolume = document.getElementById("ui");

masterVolume.addEventListener("mousemove", changeMasterVolume);
musicVolume.addEventListener("mousemove", changeMusicVolume);
uiVolume.addEventListener("mousemove", changeUiVolume);

function changeMasterVolume(){
	AudioData.volume = masterVolume.value/100;
	UiAduioData.volume = uiVolume.value/100;
}

function changeMusicVolume(){
	AudioData.volume = musicVolume.value/100;
}

function changeUiVolume(){
	UiAudioData.volume = uiVolume.value/100;
}




