var canvas = document.querySelector("canvas");
canvas.width = 1350;
canvas.height = 629;

var surface = canvas.getContext("2d");

var uInt;

var background;
var checkBox = new Image();
var checkmark = new Image();

checkBox.src = "../img/Checkbox.png";
checkmark.src = "../img/Checkmark.png";

var minimapClicks = 0;
var objectiveClicks = 0;
var notificationClicks = 0;
var remainder1;
var remainder2;
var remainder3;

var mouseX;
var mouseY;

createBackground();

function loadSettingsScreen(){
	window.location.href = 'SettingsMenu.html';
}

function createBackground(){
	background = new Image();
	background.src = "../img/Gameplay Settings.png";
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
		surface.drawImage(checkBox,650,230,70,67);
		surface.drawImage(checkBox,780,320,70,67);
		surface.drawImage(checkBox,720,415,70,67);
		surface.drawImage(checkmark,655,235,50,42);
	}
	else if (remainder1 == 1 && remainder2 == 1){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(background,0,0,1350,629);
		surface.drawImage(checkBox,650,230,70,67);
		surface.drawImage(checkBox,780,320,70,67);
		surface.drawImage(checkmark,655,235,50,42);
		surface.drawImage(checkmark,785,325,50,42);
	}
	else if (remainder2 == 1){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(background,0,0,1350,629);
		surface.drawImage(checkBox,650,230,70,67);
		surface.drawImage(checkBox,780,320,70,67);
		surface.drawImage(checkBox,720,415,70,67);
		surface.drawImage(checkmark,785,325,50,42);
	}
	else if (remainder2 == 1 && remainder3 == 1){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(background,0,0,1350,629);
		surface.drawImage(checkBox,720,415,70,67);
		surface.drawImage(checkBox,780,320,70,67);
		surface.drawImage(checkmark,785,325,50,42);
		surface.drawImage(checkmark,725,420,50,42);
	}
	else if (remainder3 == 1){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(background,0,0,1350,629);
		surface.drawImage(checkBox,650,230,70,67);
		surface.drawImage(checkBox,780,320,70,67);
		surface.drawImage(checkBox,720,415,70,67);
		surface.drawImage(checkmark,725,420,50,42);
	}
	else if (remainder1 == 1 && remainder3 == 1){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(background,0,0,1350,629);
		surface.drawImage(checkBox,650,230,70,67);
		surface.drawImage(checkBox,780,320,70,67);
		surface.drawImage(checkBox,720,415,70,67);
		surface.drawImage(checkmark,655,235,50,42);
		surface.drawImage(checkmark,725,420,50,42);
	}
	else if (remainder1 == 1 && remainder2 == 1 && remainder3 == 1){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(background,0,0,1350,629);
		surface.drawImage(checkBox,650,230,70,67);
		surface.drawImage(checkBox,780,320,70,67);
		surface.drawImage(checkBox,720,415,70,67);
		surface.drawImage(checkmark,655,235,50,42);
		surface.drawImage(checkmark,785,325,50,42);
		surface.drawImage(checkmark,725,420,50,42);
	}
	else{
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(background,0,0,1350,629);
		surface.drawImage(checkBox,650,230,70,67);
		surface.drawImage(checkBox,780,320,70,67);
		surface.drawImage(checkBox,720,415,70,67)
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
	if (mouseX > 650 && mouseX < 720 && mouseY > 230 && mouseY < 297){
		minimapClicks++;
		remainder1 = minimapClicks % 2;
	}
	else if (mouseX > 780 && mouseX < 850 && mouseY > 320 && mouseY < 387){
		objectiveClicks++;
		remainder2 = objectiveClicks % 2;
	}
	else if (mouseX > 720 && mouseX < 790 && mouseY > 415 && mouseY < 482){
		notificationClicks++;
		remainder3 = notificationClicks % 2;
	}
}












