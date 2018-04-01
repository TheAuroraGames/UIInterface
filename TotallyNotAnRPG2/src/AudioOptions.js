var AudioData = new Audio("../aud/jump.wav");
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
}

function changeMusicVolume(){
	AudioData.volume = musicVolume.value/100;
}

function changeUiVolume(){
	AudioData.volume = uiVolume.value/100;
}



