// let myName = document.querySelector(".myname");

// let moreNames = "Lucas Ernst Joachim Jirkhem Nordeborg";
// myName.addEventListener("mouseover", (e) => {
// 	myName.textContent = moreNames;
// });

// myName.addEventListener("mouseout", (e) => {
// 	myName.textContent = "Lucas Nordeborg";
// });

// let yo = document.querySelector(".yo");

// document.addEventListener("onload", (e) => {});

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
