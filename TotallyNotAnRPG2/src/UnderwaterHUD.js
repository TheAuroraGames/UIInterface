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
var iconData;

var leftPressed;
var rightPressed;
var upPressed;
var downPressed;

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

function createIcon (){
	icon = new Image();
	icon.src = "../img/navigator_icon.png"
	iconData = {
	x:830,
	y:665,
	width:16,
	height:16
	};
}

function loadGameOver (){
	window.location.href = "GameOverUI.html";
}

function checkDeath (){
	if (currentHealth == 0){
		loadGameOver();
	}
}


canvas.addEventListener("mousemove", checkPos);
//canvas.addEventListener("mouseup", checkClick);
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

minimap = new Image();
minimap.src = "../img/rustmap.png";

icon = new Image();
icon.src = "../img/navigator_icon.png";

HUDbackground();
createIcon();


function HUDbackground(){
	underwaterHUD = new Image();
	underwaterHUD.src = "../img/HUD_main.png";
}

function update(){
	render();
	checkDeath();
	oxygenLoss();
}

uInt =setInterval(update,33.34);

function render(){
	surface.clearRect(0,0,canvas.width,canvas.height);
	surface.drawImage(underwaterHUD,0,0,1030,1100);
	
	surface.drawImage(minimap,811,508,195,185);
	
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
	
	surface.fillStyle = "black";
	surface.fillText("EXP", 205, 238);
	
	surface.fillStyle = "black";
	surface.fillText("Health:" + currentHealth + "/10", 405 , 618)
	
	surface.fillStyle = "black";
	surface.fillText("Oxygen:" + currentAir + "/10", 405, 648);
	
	if (leftPressed== true)
		{
			surface.drawImage(icon,iconData.x--,iconData.y,iconData.width,iconData.height);
			if (iconData.x < 810)
				iconData.x = 810;
		}
	else if (rightPressed==true)
		{
			surface.drawImage(icon,iconData.x++,iconData.y,iconData.width,iconData.height);
			if (iconData.x > 990)
				iconData.x = 990;
		}
	else if (upPressed==true){
			surface.drawImage(icon,iconData.x,iconData.y--,iconData.width,iconData.height);
			if (iconData.y < 508)
				iconData.y = 508;
		}
	else if (downPressed==true){
			surface.drawImage(icon,iconData.x,iconData.y++,iconData.width,iconData.height);
			if (iconData.y > 678)
				iconData.y = 678;
		}
	else
		{
			surface.drawImage(icon,iconData.x,iconData.y,iconData.width,iconData.height);
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

function onKeyDown (event){
	switch (event.keyCode)
	{
			
		case 65://A
			leftPressed = true;
			break;
		case 68: // D
			rightPressed = true;
			break;
		case 87: // W
			upPressed= true;
			break;
		case 83://S
			downPressed = true;
			break;
		
	}
}

function onKeyUp(event)
{
		switch(event.keyCode)
	{
		case 65://A
			leftPressed = false;
			break;
		case 68: // D
			rightPressed = false;
			break;
		case 87: // W
			upPressed= false;
			break;
		case 83://S
			downPressed = false;
			break;
			
	}
}

function oxygenLoss (){
	if (oxyLoss ==1){
		currentAir--;
		airPercent = currentAir/maxAir;
		oxyLoss = 0;
		if (currentAir <= 0){
			oxyLoss =3;
			currentAir = 0;
		}
	}
		
	else if (oxyLoss == 4){
			currentHealth--;
			healthPercent = currentHealth/maxHealth;
			oxyLoss = 3;
			if (currentHealth < 0){
			currentHealth = 0;
			
		}
		}
	}
	








