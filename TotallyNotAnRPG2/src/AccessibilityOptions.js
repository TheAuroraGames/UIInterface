var canvas = document.querySelector("canvas");
canvas.width = 1350;
canvas.height = 629;

var surface = canvas.getContext("2d");

var uInt;

var cblClicks = 0;
var lhClicks = 0;
var remainder1;
var remainder2;


var background;
var checkmark = new Image();
var backButton = new Image();
var checkBox = new Image();

checkmark.src = "../img/Checkmark.png";
backButton.src = "../img/BackButton.png";
checkBox.src = "../img/Checkbox.png";

var mouseX;
var mouseY;

createBackground();

function loadSettingsMenu(){
	window.location.href = 'SettingsMenu.html';
}

function createBackground(){
	background = new Image();
	background.src = "../img/Accessibility Options.png";
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
		surface.drawImage(background,0,0,1350,629);
		surface.drawImage(checkBox,725,130,70,67);
		surface.drawImage(checkBox,840,410,70,67);
		surface.drawImage(checkmark,730,135,50,42);
		surface.drawImage(backButton,370,520,125,59);
	}
	else if (remainder1 == 1 && remainder2 == 1){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(background,0,0,1350,629);
		surface.drawImage(checkBox,725,130,70,67);
		surface.drawImage(checkBox,840,410,70,67);
		surface.drawImage(checkmark,730,135,50,42);
		surface.drawImage(checkmark,845,415,50,42);
		surface.drawImage(backButton,370,520,125,59);
	}
	else if (remainder2 == 1){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(background,0,0,1350,629);
		surface.drawImage(checkBox,725,130,70,67);
		surface.drawImage(checkBox,840,410,70,67);
		surface.drawImage(checkmark,845,415,50,42);
		surface.drawImage(backButton,370,520,125,59);
	}
	else{
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(background,0,0,1350,629);
		surface.drawImage(checkBox,725,130,70,67);
		surface.drawImage(checkBox,840,410,70,67);
		surface.drawImage(backButton,370,520,125,59);
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
	if (mouseX > 725 && mouseX < 795 && mouseY > 130 && mouseY < 197){
		cblClicks++;
		remainder1 = cblClicks % 2;
	}
	else if (mouseX > 840 && mouseX < 910 && mouseY > 410 && mouseY < 476){
		lhClicks++;
		remainder2 = lhClicks % 2;
	}
	else if (mouseX > 370 && mouseX < 495 && mouseY > 520 && mouseY < 579){
		loadSettingsMenu();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
}
	
		
	
	
	
	
	
	
	
