var canvas = document.querySelector("canvas");
canvas.width = 1024;
canvas.height = 1024;

var surface = canvas.getContext("2d");

var UnityLogo;
var AuroraLogo;
var SplashScreenBack;

var TransitionTimer = 0;

var UnityData;
var AuroraData;
var UInt;

var NextTimer = setInterval(function (){
	TransitionTimer++;
}, 1000);

createUnityLogo();
createAuroraLogo();
createBackground();

function LoadNextScreen()
{
	window.location.href ='MainMenuRpg2.html';
}

function update ()
{
	Transition();
	render();
}

UInt = setInterval(update,33.34);

function Transition()
{
	if(TransitionTimer == 5){
		TransitionTimer = 0;
		LoadNextScreen();
	}
}

function createBackground()
{
	SplashScreenBack = new Image();
	SplashScreenBack.src = "../img/White.png";
}

function createUnityLogo()
{
	UnityLogo = new Image();
	UnityLogo.src = "../img/Unity.png";
	UnityData = {};
	UnityData.x = 300;
	UnityData.y = 500;
	UnityData.width = 400;
	UnityData.height = 200;
}

function createAuroraLogo()
{
	AuroraLogo = new Image();
	AuroraLogo.src = "../img/Aurora logo.png";
	AuroraData ={};
	AuroraData.x = 150;
	AuroraData.y = 100;
	AuroraData.width = 700;
	AuroraData.height = 400;
}
function render()
{
	surface.clearRect(0,0,canvas.width,canvas.height);
	surface.drawImage(SplashScreenBack,0,0,1024,768);
	surface.drawImage(AuroraLogo,AuroraData.x,AuroraData.y,AuroraData.width,AuroraData.height);
	surface.drawImage(UnityLogo,UnityData.x,UnityData.y,UnityData.width,UnityData.height);
	
}
