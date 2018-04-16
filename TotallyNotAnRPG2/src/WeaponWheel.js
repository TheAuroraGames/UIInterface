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
var isVisible = false;
var isChosen = false;
var WeaponChoice;

function LoadNextLevel()
{
	window.location.href ='PauseMenu.html';
}



var WeaponsArray =[
{weapon:"Bow",source:'../img/Arch.png'},{weapon:"Axe",source:'../img/Axe.png'},{weapon:"Dagger",source:'../img/Dagger.png'},{weapon:"Staff",source:'../img/Staff.png'},{weapon:"Sword",source:'../img/Sword.png'}
];



var WeaponIndex = 0;
var Weapon = new Image();

var SelectedWeapon = new Image();
createWeapon();

canvas.addEventListener("mousemove", checkPos);
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

MiniMap = new Image();
MiniMap.src = "../img/rustmap.png";

function createWeapon()
{	
	Weapon.src=WeaponsArray[WeaponIndex].source;
}


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
		if(isVisible == true){
			surface.drawImage(Weapon,100,400,100,100);
			surface.fillStyle = "white";
			surface.fillText(WeaponsArray[WeaponIndex].weapon,100,500);
			surface.fillText("Select your Weapon",100,400);
		}
		if(isChosen == true){
			surface.drawImage(SelectedWeapon,100,607,85,85);
			surface.fillStyle = "white";
			surface.fillText(WeaponsArray[WeaponChoice].weapon,100,680);
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
		case 84://T
			isVisible = true;
			break;
		case 82:
	
			WeaponIndex++;
			WeaponIndex=WeaponIndex%5;
			createWeapon();
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
		case 84://T
			isVisible = false;
			isChosen = true;
			WeaponChoice = WeaponIndex;
			SelectedWeapon.src = WeaponsArray[WeaponChoice].source;
			break;
			
	}
}