var canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 1024;

var MaleBar = {
	x:800,
	y:190,
	width:10,
	height:10
};
var FemaleBar = {
	x:870,
	y:190,
	width:10,
	height:10
};
var Strength ={
	x:570,
	y:220,
	width:200,
	height:10
};
var Defense ={
	x:570,
	y:255,
	width:200,
	height:10
};
var Endurance={
	x:570,
	y:290,
	width:200,
	height:10
};
var Agility ={
	x:570,
	y:327,
	width:200,
	height:10
};
var Intelligence ={
	x:570,
	y:370,
	width:200,
	height:10
};

var isMale = false;
var isFemale = false;
var isHuman = false;
var isZombie = false;

var surface = canvas.getContext("2d");

canvas.addEventListener("mousemove", checkPos);
canvas.addEventListener("mouseup", checkClick);

var CharacterScreenBack;
var NextArrow = new Image();
NextArrow.src = "../img/NextArrow.png";
var UInt;

createBackground();

//Put in Proper Linking
function LoadingScreen()
{
	window.location.href ='TotallyNotAnRpg2.html';
}

function update()
{
	render();
}

UInt = setInterval(update,33.34);

function createBackground()
{
	CharacterScreenBack = new Image();
	CharacterScreenBack.src = '../img/Character_Creation_Screen.png';
}

function render()
{
	surface.clearRect(0,0,canvas.width,canvas.height);
	surface.drawImage(CharacterScreenBack,0,0,1024,768);
	if(isMale == true && isFemale == false){
	surface.fillStyle = "blue";
    surface.fillRect(MaleBar.x, MaleBar.y, MaleBar.width, MaleBar.height);
	}
	if(isMale == false && isFemale == true){
	surface.fillStyle = "blue";
    surface.fillRect(FemaleBar.x, FemaleBar.y, FemaleBar.width, FemaleBar.height);
	}
	if((isMale == true || isFemale == true) && isHuman == true){
	surface.fillStyle = "blue";
    surface.fillRect(Strength.x, Strength.y, Strength.width*0.5, Strength.height);
	}
	else if((isMale == true || isFemale == true) && isZombie == true){
	surface.fillStyle = "blue";
    surface.fillRect(Strength.x, Strength.y, Strength.width*0.6, Strength.height);
	}
	if((isMale == true || isFemale == true) && isHuman == true){
	surface.fillStyle = "blue";
    surface.fillRect(Defense.x, Defense.y, Defense.width*0.5, Defense.height);
	}
	else if((isMale == true || isFemale == true) && isZombie == true){
	surface.fillStyle = "blue";
    surface.fillRect(Defense.x, Defense.y, Defense.width*0.3, Defense.height);
	}
	if((isMale == true || isFemale == true) && isHuman == true){
	surface.fillStyle = "blue";
    surface.fillRect(Endurance.x, Endurance.y, Endurance.width*0.4, Endurance.height);
	}
	else if((isMale == true || isFemale == true) && isZombie == true){
	surface.fillStyle = "blue";
    surface.fillRect(Endurance.x, Endurance.y, Endurance.width, Endurance.height);
	}
	if((isMale == true || isFemale == true) && isHuman == true){
	surface.fillStyle = "blue";
    surface.fillRect(Agility.x, Agility.y, Agility.width*0.7, Agility.height);
	}
	else if((isMale == true || isFemale == true) && isZombie == true){
	surface.fillStyle = "blue";
    surface.fillRect(Agility.x, Agility.y, Agility.width*0.3, Agility.height);
	}
	if((isMale == true || isFemale == true) && isHuman == true){
	surface.fillStyle = "blue";
    surface.fillRect(Intelligence.x, Intelligence.y, Intelligence.width*0.8, Intelligence.height);
	}
	else if((isMale == true || isFemale == true) && isZombie == true){
	surface.fillStyle = "blue";
    surface.fillRect(Intelligence.x, Intelligence.y, Intelligence.width*0.1, Intelligence.height);
	}
	if(isMale == true || isFemale == true){
	surface.drawImage(NextArrow, 750,600);
		
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

function checkClick(mouseEvent){
	if (mouseX > 55 && mouseX < 150 && mouseY > 150 && mouseY < 425){
			isMale = true;
			isFemale = false;
			isHuman = true;
			isZombie = false;
			
		}
	else if(mouseX > 25 && mouseX < 165 && mouseY > 450 && mouseY < 725){
			isMale = true;
			isFemale = false;
			isHuman = false;
			isZombie = true;
			

		}
	if(mouseX > 160 && mouseX < 255 && mouseY > 150 && mouseY < 425){
			isMale = false;
			isFemale = true;
			isHuman = true;
			isZombie = false;
			

		}
	else if(mouseX > 170 && mouseX < 280 && mouseY > 450 && mouseY < 725){
			isMale = false;
			isFemale = true;
			isHuman = false;
			isZombie = true;
			

		}
	if (mouseX > 750 && mouseX < 878 && mouseY > 600 && mouseY < 720){
		LoadingScreen();
		canvas.removeEventListener("mousemove", checkPos);
		canvas.removeEventListener("mouseup", checkClick);
	}
		
	
}