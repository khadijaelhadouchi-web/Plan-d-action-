
const apprenants = [
    {
        id: 1,
        nom: "Khadiha",
        age: 22,
        note: 18
    },
    {
        id: 2,
        nom: "Hind",
        age: 18,
        note: 14
    },
    {
        id: 3,
        nom: "Mohemmed",
        age: 25,
        note: 16
    },
    {
        id: 4,
        nom: "Said",
        age: 20,
        note: 10
    },
    {
        id: 5,
        nom: "Wiam",
        age: 19,
        note: 9
    }
]
function AjouterUnApprenant(nom, age, note) {
    let lestId = apprenants[apprenants.length - 1].id;
    apprenants.push(
        {
            id: ++lestId,
            nom: nom,
            age: age,
            note: note
        }
    )

}
AjouterUnApprenant("hanan", 15, 21)
AjouterUnApprenant("wiii", 7, 5)
console.log(apprenants)
function modifier(id, note) {
    for (let i = 0; i < apprenants.length; i++) {
        
        if (apprenants[i].id == id) {
            apprenants[i].note = note;
            break;
        } else {
            console.log("Id nexicte pas ")
        }
    }


}
modifier(5, 155)
console.log(apprenants);
function suppremierApprenant(id){
    for(let i=0;i<apprenants.length;i++){
         if(apprenants[i].id==id){
        apprenants.splice(i,1);
    }
    }
   

}
suppremierApprenant(4)
console.log(apprenants)

function rechercher(nom){
    
       return  apprenants.find(Element=>Element.nom==nom);
       
}
console.log(rechercher("hanan"));



