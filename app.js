let webDev = document.querySelector(".web-developer");
let inDev = document.querySelector(".in-developement");

let btnBgSwe = document.querySelector("#bgleft");
let btnTextSwe = document.querySelector("#swe");
let whoParaTitleEng;
let whoParaTitleSwe;
let whoPara = document.querySelector(".whodis-paragraph");
let whoParaEng =
	"27 y/o rookie coder, currently studying the web developement programme at Yrgo in Gothenburg.";
let whoParaSwe =
	"27 årig rookie coder som för närvarande studerar webbutveckling på Yrgo i Göteborg";
let btnBgEng = document.querySelector("#bgright");
let btnTextEng = document.querySelector("#texteng");
const btnSwe = document.querySelector(".btn-swe");

btnSwe.addEventListener("click", () => {
	whoPara.textContent = whoParaSwe;
	btnBgSwe.style.fill = "#b64100";
	btnTextSwe.style.fill = "white";
	underConstruction.textContent = hamSwe;
	btnBgEng.style.fill = "white";
	btnTextEng.style.fill = "#b64100";
});

const btnEng = document.querySelector(".btn-eng");

btnEng.addEventListener("click", () => {
	whoPara.textContent = whoParaEng;
	btnBgSwe.style.fill = "white";
	btnTextSwe.style.fill = "#b64100";
	underConstruction.textContent = hamEnglish;
	btnBgEng.style.fill = "#b64100";
	btnTextEng.style.fill = "white";
});

let hamup = document.querySelector("#hamup");
let hamdown = document.querySelector("#hamdown");
let hamMenu = document.querySelector(".ham-menu");
let abow = document.querySelector(".abow-line");
let hamState = 0;
let underConstruction = document.querySelector(".under-construction");

let hamEnglish = "under construction";
let hamSwe = "chilla, inte klar än";

const btnHam = document.querySelector(".btn-ham");

btnHam.addEventListener("click", () => {
	if (hamState === 1) {
		hamState--;

		hamup.style.transform = `translateX(0px) rotateZ(0deg)`;
		hamdown.style.transform = `translateX(0px) translateY(0px) rotateZ(0deg)`;
		hamMenu.style.zIndex = `-1`;
		hamMenu.style.opacity = `0`;
		abow.style.width = `0%`;
	} else if (hamState === 0) {
		hamState++;

		abow.style.width = `8rem`;
		hamup.style.transform = `translateX(10px) rotateZ(45deg)`;
		hamdown.style.transform = `translateX(-15px) translateY(20px) rotateZ(-45deg)`;
		hamMenu.style.zIndex = `1`;
		hamMenu.style.opacity = `1`;
	}
});
