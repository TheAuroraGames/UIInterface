var canvas = document.querySelector("canvas");
canvas.width = 1350;
canvas.height = 629;

var surface = canvas.getContext("2d");

var uInt;

var background;
var backButton = new Image();

backButton.src = "../img/BackToMainMenuButton.png"

var mouseX;
var mouseY;

createBackground();

function createBackground(){
	background = new Image();
	background.src = "../img/Credits.png";
}

function loadMainMenu(){
	window.location.href = 'MainMenuRpg2.html';
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
	surface.drawImage(background,0,0,1350,629);
	surface.drawImage(backButton,310,485,150,70);
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
	if (mouseX > 310 && mouseX < 460 && mouseY > 485 && mouseY < 555){
		loadMainMenu();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
}
	
	
	
	
	
	
	
	
	
	

