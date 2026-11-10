let compteur = 0;

let number =document.getElementById("number");
let augemmenter = document.getElementById("aug");
let diminuer = document.getElementById("dim");
let  reinitialiseur = document.getElementById("ret");
augemmenter.addEventListener("click", () => {
    number.textContent = Augemmenter();

})
diminuer.addEventListener("click",()=>{
    number.textContent=Diminuer();
})
reinitialiseur.addEventListener("click",()=>{
    number.textContent=Réinitialiser()
})

function Augemmenter() {
    if(compteur<9){

        return ++compteur;
    }else{
        number.style.color="red"
        return ++ compteur;
    }
}
function Diminuer() {
    if (compteur > 0) {
         --compteur;
    }
    if(compteur<10){
        number.style.color="black"
        
     }
     return compteur;
}
function Réinitialiser() {
    number.style.color="black"
    return compteur = 0;
}


