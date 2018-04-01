var canvas = document.querySelector("canvas");
canvas.width = 1350;
canvas.height = 629;

var surface = canvas.getContext("2d");

var uInt;

var backgroundScreen;
var checkBox = new Image();
var checkmark = new Image();
var checkmark2 = new Image();
var backButton = new Image();

checkmark.src = "../img/Checkmark.png";
checkmark2.src = "../img/Checkmark2.png";
checkBox.src = "../img/Checkbox.png";
backButton.src = "../img/BackButton.png";

var aaClicks = 0;
var vsClicks = 0;
var remainder1;
var remainder2;

var mouseX;
var mouseY;

createBackground();

function loadSettingsMenu(){
	window.location.href = 'SettingsMenu.html';
}

function createBackground(){
	backgroundScreen = new Image();
	backgroundScreen.src = "../img/Graphics Settings.png";
}

uInt = setInterval(update,33.34);

canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);

function update()
{
	render();
}

function render(){
	if (remainder1 == 1){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(backgroundScreen,0,0,1350,629);
		surface.drawImage(checkBox,630,220,70,67);
		surface.drawImage(checkBox,670,330,70,67);
		surface.drawImage(checkmark,635,225,50,42);
		surface.drawImage(backButton,400,540,125,59);
	}
	else if (remainder1 == 1 && remainder2 == 1){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(backgroundScreen,0,0,1350,629);
		surface.drawImage(checkBox,630,220,70,67);
		surface.drawImage(checkBox,670,330,70,67);
		surface.drawImage(checkmark,635,225,50,42);
		surface.drawImage(checkmark2,675,335,50,42);
		surface.drawImage(backButton,400,540,125,59);
	}
	else if (remainder2 == 1){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(backgroundScreen,0,0,1350,629);
		surface.drawImage(checkBox,630,220,70,67);
		surface.drawImage(checkBox,670,330,70,67);
		surface.drawImage(checkmark2,675,335,50,42);
		surface.drawImage(backButton,400,540,125,59);
	}
	else{
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(backgroundScreen,0,0,1350,629);
		surface.drawImage(checkBox,630,220,70,67);
		surface.drawImage(checkBox,670,330,70,67);
		surface.drawImage(backButton,400,540,125,59);
	}
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
	if(mouseX > 630 && mouseX < 700 && mouseY > 220 && mouseY < 287){
		aaClicks++;
		remainder1 = aaClicks % 2;
	}
	
	else if (mouseX > 670 && mouseX < 740 && mouseY > 330 && mouseY < 397){
		vsClicks++;
		remainder2 = vsClicks % 2;
	}
	
	else if (mouseX > 400 && mouseX < 525 && mouseY > 540 && mouseY < 599){
		loadSettingsMenu();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
}






