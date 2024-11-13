const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.getElementsByClassName('.operation');
const equalButton = document.getElementsByClassName('.btn-eql');
const deleteButton = document.getElementsByClassName('.del-btn');
const allClear = document.getElementById("all-clear");
let currentText = document.getElementsByClassName(".current");
const previousText = document.getElementsByClassName('.previous');
//testing bellow
const displayinput = document.querySelector("#display")
console.log(displayinput)

//currentText.textContent = "";
//previousText.innerHTML = "3";
let calculation = [];


//functions
allClear.addEventListener('click', function(){
    displayinput.value = ""
    console.log('clicked');
   
})
function clear(e){

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
    currentText.innerText = number;
   // currentText.appendChild(number)
}


/*numberButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
       const value = button.innerText;
        appendNumber(value);
        updateDisplay();
       console.log(previousText.innerHTML)
       
    })
});*/
document.addEventListener("click", (event)=>{
    if(event.target.matches(".number, .operation")){
  const value = event.target.getAttribute("data-value");
  displayinput.value += value;
  console.log(displayinput.value);
    }
})




//button.addEventListener('click', function(){
    //show.classList.toggle("hide-share");
    //console.log("clicked");
    //blogCard.appendChild(title)
//});




