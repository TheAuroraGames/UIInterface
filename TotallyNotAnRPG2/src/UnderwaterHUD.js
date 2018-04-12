var canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 1024;

var surface = canvas.getContext("2d");

var uInt;
var oxyLoss = 0;

var airTimer = setInterval(function (){
	oxyLoss++
}, 1000);

var underwaterHUD;
var mouseX;
var mouseY;
var minimap;
var icon;

var healthBar = {
	x: 240,
	y: 610,
	width: 570,
	height: 20
};

var currentHealth = 10;
var maxHealth = 10;
var healthPercent = currentHealth/maxHealth;

var airBar = {
	x: 240,
	y: 640,
	width: 570,
	height: 20
};

var currentAir = 10;
var maxAir = 10;
var airPercent = currentAir/maxAir;

var expBar = {
	x: 30,
	y: 230,
	width: 380,
	height: 10
};


canvas.addEventListener("mousemove", checkPos);
//canvas.addEventListener("mouseup", checkClick);
window.addEventListener("keydown", onKeyDown);

minimap = new Image();
minimap.src = "../img/rustmap.png";

icon = new Image();
icon.src = "../img/navigator_icon.png";

HUDbackground();

function HUDbackground(){
	underwaterHUD = new Image();
	underwaterHUD.src = "../img/HUD_main.png";
}

function update(){
	render();
	oxygenLoss();
}

uInt =setInterval(update,33.34);

function render(){
	surface.clearRect(0,0,canvas.width,canvas.height);
	surface.drawImage(underwaterHUD,0,0,1030,1100);
	
	surface.drawImage(minimap,811,508,195,185);
	surface.drawImage(icon,830,665,16,16);
	
	surface.fillStyle = "red";
	surface.fillRect(healthBar.x, healthBar.y, healthBar.width, healthBar.height);

	surface.fillStyle = "green";
	surface.fillRect(healthBar.x, healthBar.y, healthBar.width * healthPercent, healthBar.height);
	
	surface.fillStyle = "yellow";
	surface.fillRect(airBar.x, airBar.y, airBar.width, airBar.height);
	
	surface.fillStyle = "blue";
	surface.fillRect(airBar.x, airBar.y, airBar.width * airPercent, airBar.height);
	
	surface.fillStyle = "orange";
	surface.fillRect(expBar.x, expBar.y, expBar.width, expBar.height);
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

function onKeyDown (event){
	switch (event.keyCode)
	{
		case 75://k
			currentHealth--;
			if (currentHealth > 0){
				healthPercent= currentHealth/maxHealth;
			}
			
			else {
				currentHealth = 0;
				healthPercent = currentHealth/maxHealth;
			}
			break;
		
		case 76://l
			currentAir--;
			if (currentAir > 0){
				airPercent = currentAir/maxAir;
			}
			
			else {
				currentAir = 0;
				airPercent = currentAir/maxAir;
			}
			break;
		
	}
}

function oxygenLoss (){
	if (oxyLoss < 11){
		currentAir = currentAir - 0.03;
		if (currentAir > 0){
			airPercent = currentAir/maxAir;
		}
		
		else {
			currentAir = 0
			airPercent = currentAir/maxAir;
		}
	}
	
	else {
		currentHealth = currentHealth - 0.03;
		if (currentHealth > 0){
			healthPercent = currentHealth/maxHealth;
		}
		
		else {
			currentHealth = 0;
			healthPercent = currentHealth/maxHealth;
		}
	}
}
	








