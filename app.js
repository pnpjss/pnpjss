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
let btnBgEng = document.querySelector("#bgleft");
let eng = document.querySelector(".svgright");
let btnSwe = document.querySelector(".btn-swe");

btnSwe.addEventListener("click", () => {
	btnBgSwe.style.fill = "#b64100";
	btnTextSwe.style.fill = "white";
});
