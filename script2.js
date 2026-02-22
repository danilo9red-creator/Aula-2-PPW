const botao = document.getElementById("whatsappBtn");
const icone = document.getElementById("whatsappIcon");

botao.addEventListener("mouseover", function () {
    icone.style.color = "#161817";
});

botao.addEventListener("mouseout", function () {
    icone.style.color = "";
});