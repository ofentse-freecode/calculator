const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.getElementsByClassName('.operation');
const equalButton = document.getElementsByClassName('.btn-eql');
const deleteButton = document.getElementsByClassName('.del-btn');
const allClear = document.getElementById("all-clear");
let currentText = document.getElementsByClassName(".current");
const previousText = document.getElementsByClassName('.previous');


//currentText.textContent = "";
//previousText.innerHTML = "3";
let calculation = [];


//functions
function clear(){

}

function deleteNumber(){

}

function appendNumber(value){
//currentText.textContent = number.toString() + number.toString()
calculation.push(value);
fullnumber = calculation.join("")
previousText.innerHTML = fullnumber;
}

function chooseOperation(){

}

function compute(){

}

function updateDisplay(){

}


numberButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
       const value = button.innerText;
        appendNumber(value);
        //updateDisplay();
       console.log(previousText.innerHTML)
       
    })
});
allClear.addEventListener('click', function(){
    console.log('clicked');
   
})

//button.addEventListener('click', function(){
    //show.classList.toggle("hide-share");
    //console.log("clicked");
    //blogCard.appendChild(title)
//});




