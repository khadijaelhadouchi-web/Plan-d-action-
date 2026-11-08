const boutiques = [
    {
        id: 1,
        nom: "ordinateur",
        prix: 7500,
        categorie: "Informatique"
    },
    {
        id: 2,
        nom: "souris",
        prix: 120,
        categorie: "Accessoires"
    },
    {
        id: 3,
        nom: "clavier",
        prix: 250,
        categorie: "Accessoires"
    },
    {
        id: 4,
        nom: "téléphone",
        prix: 4500,
        categorie: "Electronique"
    },
    {
        id: 5,
        nom: "casque",
        prix: 199,
        categorie: "Audio"
    },
    {
        id: 6,
        nom: "imprimante",
        prix: 1800,
        categorie: "Informatique"
    }
]

function prouitsMoins(){
    return boutiques.filter(Element=>Element.prix<200)
}
console.log(prouitsMoins());
function produitId(id){
return boutiques.find(Element=>Element.id==id)
}
console.log(produitId(4))
function générerTab(){
     return boutiques.map(noms=>noms.nom)
}
console.log(générerTab())
function somme(){
    return boutiques.reduce((now,next) => now + next.prix,0)
}
console.log("La sommer est: "+somme());

