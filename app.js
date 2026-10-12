let buttons= document.querySelectorAll(".btn")
let userInput=document.querySelector("#data")
for(let i = 0; i<buttons.length;i++){
buttons[i].addEventListener("click",(event) =>
{
    userInput.value += event.target.innerText;
});
}
// result
let resultBtn = document.querySelector("#result")
resultBtn.addEventListener("click",()=>{
    let ouput= eval(userInput.value)
    userInput.value = output;
    // userInput.value= ""
})
// clear
let clearBtn = document.querySelector("#full")
clearBtn.addEventListener("click",()=>{
     userInput.value= ""
})