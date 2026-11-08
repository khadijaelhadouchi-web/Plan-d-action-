function analyseurNotes(tabNot){
  console.log(`La moyenne est: ${calculerMoyenne(tabNot)}`) 
  console.log(`La meilleure note est:${IdentifierNot(tabNot)}`)
  console.log(`les notes Superieure ou egales a 10 est:${NoteSup(tabNot)}`)
  console.log(moyenneSupEgale(tabNot))

}
function calculerMoyenne(tbnt){
    let moyenne=0;
    let sommer=0;
    for(let i=0; i<tbnt.length;i++){
        sommer+=tbnt[i];
    }
      return (sommer/tbnt.length).toFixed(2) ;
    

}
// calculerMoyenne([10,2,5,5,8])
analyseurNotes([10,2,5,9,5,8,15,20])
function IdentifierNot(arryNot){
    let bestnote=arryNot.sort((a, b) => a - b);
    return bestnote[arryNot.length-1];

}
function NoteSup(arynt){
let compter=0;
for(let i=0;i<arynt.length;i++){
    if(arynt[i]>=10){
        compter++;
    }
}
return compter;
}
function moyenneSupEgale(arryNot){
let resultemoyenne=calculerMoyenne(arryNot);
if(resultemoyenne>=10){
    return` la moyenne de la classe est supérieure ou égale à 10`
}else {
    return`la moyenne de la classe est inferieur a 10.`
}
}
