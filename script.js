const upperSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet ="abcdefghijklmnopqrstuvwxyz"
const numSet="1234567890"
const symbolSet="!@#$%^&*()_<>,.?;:{[]}"
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomdata = (data)=>data[Math.floor(Math.random()*data.length)];

function generatePassword(str = "") {
  

    for(let i =str.length; i<lengthEl.value; i++){ 

        if(uppercaseEl.checked){
            str+=randomdata(upperSet)
        }
        if(lowercaseEl.checked){
            str+=randomdata(lowerSet)
        }
        if(symbolsEl.checked){
            str+=randomdata(symbolSet)
        }
        if(numbersEl.checked){
            str+=randomdata(numSet)
        }

    }
    resultEl.textContent=trimStr(str,lengthEl.value);
    
}


generateEl.addEventListener('click', () => {
    generatePassword(); 
})

const trimStr=(orignal,num)=>{
    if(orignal.length > num){
       return orignal.substring(0,num);
    }
    else{
       return orignal;
    }

}

clipboardEl.addEventListener("click",()=>{
    navigator.clipboard.writeText(resultEl.textContent)
    alert(`Copied the text:-   ${resultEl.textContent}`);
})
