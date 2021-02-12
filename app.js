let lucas = document.querySelector(".lucas");
let nordeborg = document.querySelector(".nordeborg");
let webDev = document.querySelector(".web-developer");
let inDev = document.querySelector(".in-developement");
window.onload = () => {
	lucas.style.margin = `0`;
	nordeborg.style.margin = `0`;
	setTimeout(() => {
		inDev.style.opacity = `100`;
	}, 340);
};

let btnBgSwe = document.querySelector("#bgleft");
let btnTextSwe = document.querySelector("#swe");

let btnBgEng = document.querySelector("#bgright");
let btnTextEng = document.querySelector("#texteng");
const btnSwe = document.querySelector(".btn-swe");

btnSwe.addEventListener("click", () => {
	console.log("fart");
	btnBgSwe.style.fill = "#b64100";
	btnTextSwe.style.fill = "white";

	btnBgEng.style.fill = "white";
	btnTextEng.style.fill = "#b64100";
});

const btnEng = document.querySelector(".btn-eng");

btnEng.addEventListener("click", () => {
	console.log("fart");
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
		webDev.style.zIndex = `1`;
		inDev.style.zIndex = `1`;
		hamup.style.transform = `translateX(0px) rotateZ(0deg)`;
		hamdown.style.transform = `translateX(0px) translateY(0px) rotateZ(0deg)`;
		hamMenu.style.zIndex = `-1`;
	} else if (hamState === 0) {
		hamState++;
		webDev.style.zIndex = `0`;
		inDev.style.zIndex = `0`;
		hamup.style.transform = `translateX(10px) rotateZ(45deg)`;
		hamdown.style.transform = `translateX(-15px) translateY(20px) rotateZ(-45deg)`;
		hamMenu.style.zIndex = `3`;
	}
});
