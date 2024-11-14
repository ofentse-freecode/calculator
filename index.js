const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalButton = document.querySelector('.btn-eql');
const deleteButton = document.querySelector('.del-btn');
const allClear = document.getElementById("all-clear");
let currentText = document.querySelector(".previous");
const previousText = document.querySelector('.current');

currentText.textContent = "curr";
previousText.textContent = "";
let operand = "";
let calculation = [];

console.log(equalButton)

//functions

//function to remove all from input
function clear(){
    allClear.addEventListener('click', ()=>{
       currentText.textContent = "";
       previousText.textContent = "";
       calculation = [];
       console.log('clicked clear');
    })
}
//function to delete a single degit
function deleteNumber(){

   const answer = calculation.slice(0, -1);
   previousText.textContent = answer.join("");
    console.log("clicked del", answer);
    return  calculation = answer;
}


function appendNumber(value){
//currentText.textContent = number.toString() + number.toString()
if (value === '.' &&  previousText.textContent.includes('.'))
    { return
    }else{
calculation.push(value);
fullnumber = calculation.join("")
return previousText.textContent = fullnumber;
//console.log(displayinput.innerHTML = fullnumber)
};
}

function chooseOperation(operand){
    if(operand === "")return
    if(operand !== ""){
        compute();
    }
currentText.textContent = previousText.textContent;
return previousText.textContent = calculation = [];

}

function compute(){
    equalButton.addEventListener("click", ()=> {
        if (calculation.length < 3) {
            console.log("Not enough data for calculation");
            return;
        }

        let expression = calculation.join(""); 
        let result;
        try  {
            result = eval(expression); 
        } catch (error) {
            result = "Error"; 
        }

        previousText.textContent = result; 
        currentText.textContent = ""; 
        calculation = [result.toString()]; 
    });
}

compute()

//calling all functions
 clear()
 //deleteNumber()

 //eventListiners.

numberButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
       const value = button.innerText;
        appendNumber(value);
        //updateDisplay();
      // console.log(previousText.innerHTML)
      // return previousText.innerHTML = fullnumber;
       
    })
});

deleteButton.addEventListener("click",()=>{
     deleteNumber();
});


operationButtons.forEach((numberbutton) =>{
    numberbutton.addEventListener("click",()=>{
        const operand = numberbutton.innerText;
        appendNumber(operand);
        chooseOperation(operand);
})  
});



