// BABY STEPS
// 1.Adicionar backgroundColor ao h1
function colorH1(corDeFundo) {document.getElementById("header-container").style.backgroundColor = corDeFundo}
colorH1("green")

// 2.Adicionar backgroundColor a primeira section
function sectionOne(colorSectionOne) {document.querySelector("section").style.backgroundColor = colorSectionOne}
sectionOne("blue")

// 3.Adicionar backgroundColor a segunda section
function sectionTwo(colorSecondTwo) {document.querySelectorAll("section")[1].style.backgroundColor = colorSecondTwo}
sectionTwo("red")

// Adicionar backgroundColor ao footer
function colorFooter(colorFooterSingle) {document.querySelector("footer").style.backgroundColor = colorFooterSingle}
colorFooter("black")

// Adicionar backgroundColor a classe first-class e classe seconde-class
function alteraCor(color1, color2) {
document.querySelectorAll(".first-class")[0].style.backgroundColor = color1;
document.querySelectorAll(".first-class")[1].style.backgroundColor = color1;
document.querySelectorAll(".seconde-class")[0].style.backgroundColor = color2;
document.querySelectorAll(".seconde-class")[1].style.backgroundColor = color2;
}
alteraCor("black", "purple");