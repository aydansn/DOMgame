const btnAgain = document.querySelector(".btnAgain");
const number = document.querySelector(".number");
const guessText = document.querySelector(".guess-text");
const bal = document.querySelector(".score");
const input = document.querySelector(".input");
const btnCheck = document.querySelector(".btnCheck");
const yeniP = document.querySelector(".yeniP");

console.log(btnAgain,btnCheck,bal,guessText,input,number);


btnCheck.addEventListener("click", function (){
    console.log("check buttonuna click olundu");

    guessText.textContent= "Qazandiniz!";

    console.log(input.value);
    console.log(yeniP.innerHTML);
    yeniP.innerHTML="<button>Men deyishdim oldum button</button>";

    let gizlireqem = Math.trunc(Math.random() *10 *2 )+1;
    console.log(gizlireqem);

});
btnAgain.addEventListener("mouseenter", function(){
    console.log("hover olundu");
});
btnAgain.addEventListener("mouseleave", function(){
    console.log("hover chekildi");
});