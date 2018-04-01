var canvas = document.querySelector("canvas");
canvas.width = 1350;
canvas.height = 629;

var surface = canvas.getContext("2d");

var uInt;

var mappingsBackground = new Image();
var mappingsBackground2 = new Image();
var mappingsButton = new Image();
var backButton = new Image();

mappingsBackground.src = "../img/Controller Mappings.png";
mappingsBackground2.src = "../img/ControllerMappings2.png";
mappingsButton.src = "../img/SwitchMappingsButton.png";
backButton.src = "../img/backArrow.png";

var mouseX;
var mouseY;

var clicks = 0;
var remainder;

//MainBackground();

function loadSettingsMenu(){
	window.location.href = "SettingsMenu.html"
}

/*function MainBackground(){
	mappingsBackground = new Image();
	mappingsBackground.src = "../img/ControllerMappings.png";
}*/

uInt = setInterval(update,33.34);

canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);

function update()
{
	render();
}

function render(){
	if (remainder == 0){
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(mappingsBackground,0,0,1350,629);
		surface.drawImage(mappingsButton,660,510,175,82);
	}
	
	else {
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(mappingsBackground2,0,0,1350,629);
		surface.drawImage(mappingsButton,660,510,175,82);
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
	if (mouseX > 660 && mouseX < 835 && mouseY > 510 && mouseY < 592){
		clicks++;
		remainder = clicks % 2;
	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	