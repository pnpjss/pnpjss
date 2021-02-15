let webDev = document.querySelector(".web-developer");
let inDev = document.querySelector(".in-developement");

let btnBgSwe = document.querySelector("#bgleft");
let btnTextSwe = document.querySelector("#swe");

let btnBgEng = document.querySelector("#bgright");
let btnTextEng = document.querySelector("#texteng");
const btnSwe = document.querySelector(".btn-swe");

btnSwe.addEventListener("click", () => {
	btnBgSwe.style.fill = "#b64100";
	btnTextSwe.style.fill = "white";

	btnBgEng.style.fill = "white";
	btnTextEng.style.fill = "#b64100";
});

const btnEng = document.querySelector(".btn-eng");

btnEng.addEventListener("click", () => {
	btnBgSwe.style.fill = "white";
	btnTextSwe.style.fill = "#b64100";

	btnBgEng.style.fill = "#b64100";
	btnTextEng.style.fill = "white";
});

let hamup = document.querySelector("#hamup");
let hamdown = document.querySelector("#hamdown");
let hamMenu = document.querySelector(".ham-menu");
const btnHam = document.querySelector(".btn-ham");
let hamState = 0;

btnHam.addEventListener("click", () => {
	if (hamState === 1) {
		hamState--;

		hamup.style.transform = `translateX(0px) rotateZ(0deg)`;
		hamdown.style.transform = `translateX(0px) translateY(0px) rotateZ(0deg)`;
		hamMenu.style.zIndex = `-1`;
		hamMenu.style.opacity = `0`;
	} else if (hamState === 0) {
		hamState++;

		hamup.style.transform = `translateX(10px) rotateZ(45deg)`;
		hamdown.style.transform = `translateX(-15px) translateY(20px) rotateZ(-45deg)`;
		hamMenu.style.zIndex = `1`;
		hamMenu.style.opacity = `1`;
	}
});
