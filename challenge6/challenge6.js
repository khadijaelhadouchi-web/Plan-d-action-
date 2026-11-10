const livres = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", prix: 50 },
    { titre: "Les Misérables", auteur: "Victor Hugo", prix: 80 },
    { titre: "L'Étranger", auteur: "Albert Camus", prix: 60 },
    { titre: "L'Alchimiste", auteur: "Paulo Coelho", prix: 70 }
];

let DivCarte = document.getElementById("Carte");

livres.forEach((Element) => {
    let div=document.createElement("div")
    let p = document.createElement("p");
    div.appendChild(p)
    let pdeux = document.createElement("p");
    div.appendChild(pdeux)
    let ptrois = document.createElement("p");
    div.appendChild(ptrois)
    p.textContent = Element.titre
    pdeux.textContent = Element.auteur
    ptrois.textContent = Element.prix
    DivCarte.appendChild(div)
    div.classList.add("border")
    div.classList.add("h-max")
    div.classList.add("w-max")
})
let nomberLivres=document.createElement("h3");
DivCarte.appendChild(nomberLivres);
nomberLivres.textContent= `le nombre total des livres est ${livres.length}`






