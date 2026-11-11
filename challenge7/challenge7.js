const input=document.getElementById("input");
const btn=document.getElementById("btn");
const ul=document.getElementById("ul");
btn.addEventListener("click",()=>{
   let valueInput=input.value 
   if(valueInput !=""){
    let li=document.createElement("li");
    li.textContent=valueInput;
    ul.appendChild(li)
   input.value=""
    let btnsup=document.createElement("button");
    btnsup.textContent="Supprime"
    li.appendChild(btnsup)
    let btnmarq=document.createElement("button")
    btnmarq.textContent="Acheté";
    li.appendChild(btnmarq)
    btnsup.addEventListener("click",()=>{
     li.remove();
    })
    btnmarq.addEventListener('click',()=>{
      li.style.color="gray"
      li.style.textDecoration="line-through"
    })
   }
})