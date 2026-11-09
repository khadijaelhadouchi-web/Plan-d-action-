let compteur = 0;
const number = Number(document.getElementById("number"));
const augemmenter = document.getElementById("aug");
const diminuer = document.getElementById("dim");
const reinitialiseur = document.getElementById("ret");
augemmenter.addEventListener("click", () => {
    number.textContent += Augemmenter();

}

)

function Augemmenter() {
    return compteur++;
}
function Diminuer() {
    if (compteur > 0) {
        return compteur--;
    }
}
function Réinitialiser() {
    return compteur = 0;
}


