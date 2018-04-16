var canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 1024;
var surface = canvas.getContext("2d");
var uInt;
var HUD;
var mouseX;
var mouseY;
var MiniMap;
var Navi;
var NaviData;
var leftPressed;
var rightPressed;
var upPressed;
var downPressed;


function LoadNextLevel()
{
	window.location.href ='WeaponWheel.html';
}

var fuelBar = {
	x: 240,
	y: 610,
	width: 570,
	height: 20
};

var currentFuel = 10;
var maxFuel = 10;
var fuelPercent = currentFuel/maxFuel;

var armourBar = {
	x: 240,
	y: 640,
	width: 570,
	height: 20
};

var currentArmour = 10;
var maxArmour = 10;
var armourPercent = currentArmour/maxArmour;

var heatBar = {
	x: 75,
	y: 587,
	width: 165,
	height: 20
};

var currentHeat = 10;
var maxHeat = 10;
var heatPercent = currentHeat/maxHeat;

var expBar = {
	x: 30,
	y: 230,
	width: 380,
	height: 10
};

canvas.addEventListener("mousemove", checkPos);
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

MiniMap = new Image();
MiniMap.src = "../img/rustmap.png";



HUDimage();
createNavi();

function createNavi()
{
	Navi= new Image ();
	Navi.src = "../img/navigator_icon.png";
	NaviData={
	x:830,
	y:665,
	width:16,
	height:16
	};
}
function HUDimage()
{
	HUD = new Image();
	HUD.src = "../img/HUD_main.png";
}
function update()
{
	render();
}
uInt =setInterval(update,33.34);

function render ()
{
		surface.clearRect(0,0,canvas.width,canvas.height);
		surface.drawImage(HUD,0,0,1030,1100);
		surface.drawImage(MiniMap,811,508,195,185);
		
		surface.fillStyle = "red";
		surface.fillRect(fuelBar.x, fuelBar.y, fuelBar.width, fuelBar.height);

		surface.fillStyle = "green";
		surface.fillRect(fuelBar.x, fuelBar.y, fuelBar.width * fuelPercent, fuelBar.height);
	
		surface.fillStyle = "yellow";
		surface.fillRect(armourBar.x, armourBar.y, armourBar.width, armourBar.height);
	
		surface.fillStyle = "blue";
		surface.fillRect(armourBar.x, armourBar.y, armourBar.width * armourPercent, armourBar.height);
		
		surface.fillStyle = "yellow";
		surface.fillRect(heatBar.x, heatBar.y, heatBar.width, heatBar.height);
		
		surface.fillStyle = "red";
		surface.fillRect(heatBar.x, heatBar.y, heatBar.width * heatPercent, heatBar.height);
	
		surface.fillStyle = "orange";
		surface.fillRect(expBar.x, expBar.y, expBar.width, expBar.height);
		
		surface.fillStyle = "black";
		surface.fillText("EXP", 205, 238);
	
		surface.fillStyle = "black";
		surface.fillText("Fuel:" + currentFuel + "/10", 405 , 618)
	
		surface.fillStyle = "black";
		surface.fillText("Armour:" + currentArmour + "/10", 405, 648);
		
		surface.fillStyle = "black";
		surface.fillText("Heat:" + currentHeat + "/10", 120 , 595);
		
		if (leftPressed== true)
		{
			surface.drawImage(Navi,NaviData.x--,NaviData.y,NaviData.width,NaviData.height);
			if (NaviData.x<810) NaviData.x =810;
		}
		else if (rightPressed==true)
		{
			surface.drawImage(Navi,NaviData.x++,NaviData.y,NaviData.width,NaviData.height);
			if (NaviData.x>990) NaviData.x= 990;
		}
		else if (upPressed==true){
			surface.drawImage(Navi,NaviData.x,NaviData.y--,NaviData.width,NaviData.height);
			if (NaviData.y<508) NaviData.y = 508;
		}
		else if (downPressed==true){
			surface.drawImage(Navi,NaviData.x,NaviData.y++,NaviData.width,NaviData.height);
			if (NaviData.y>678) NaviData.y=678;
		}
		else
		{
			surface.drawImage(Navi,NaviData.x,NaviData.y,NaviData.width,NaviData.height);
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

	
function onKeyDown(event)
{
		
		switch(event.keyCode)
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
		case 79://o
			if (currentFuel > 0){
				currentFuel--;
				fuelPercent = currentFuel/maxFuel;
			}
			
			else {
				currentFuel = 0;
				fuelPercent = currentFuel/maxFuel;
			}
			break;
		case 80://p
			if (currentFuel < 10){
				currentFuel++;
				fuelPercent = currentFuel/maxFuel;
			}
			
			else {
				currentFuel = 10;
				fuelPercent = currentFuel/maxFuel;
			}
			break;
		case 75://k
			if (currentArmour > 0){
				currentArmour--;
				armourPercent = currentArmour/maxArmour;
			}
			
			else {
				currentArmour = 0;
				armourPercent = currentArmour/maxArmour;
			}
			break;
		case 76://l
			if (currentArmour < 10){
				currentArmour++;
				armourPercent = currentArmour/maxArmour;
			}
			
			else {
				currentArmour = 10;
				armourPercent = currentArmour/maxArmour;
			}
			break;
		case 78://n
			if (currentHeat > 0){
				currentHeat--;
				heatPercent = currentHeat/maxHeat;
			}
			
			else {
				currentHeat = 0
				heatPercent = currentHeat/maxHeat;
			}
			break;
		case 77://m
			if (currentHeat < 10){
				currentHeat++;
				heatPercent = currentHeat/maxHeat;
			}
			
			else {
				currentHeat = 10;
				heatPercent = currentHeat/maxHeat;
			}
			break;
		case 88://X
			LoadNextLevel();
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