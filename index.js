const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalButton = document.getElementsByClassName('.btn-eql');
const deleteButton = document.querySelector('.del-btn');
const allClear = document.getElementById("all-clear");
let currentText = document.querySelector(".previous");
const previousText = document.querySelector('.current');
//testing bellow
//const displayinput = document.querySelector("#display")
//console.log(displayinput)
//console.log(deleteButton)

currentText.textContent = "curr";
previousText.textContent = "";
let operand = "";
let calculation = [];



//functions
//function for updating the input field
/*function updateDisplay(){
    document.addEventListener("click", () =>{
        if(event.target.matches(".number, .operation")){
            const value = event.target.getAttribute("data-value");
            displayinput.value += value;
            console.log(displayinput.value);
}});
    // currentText.innerText = number;
    // currentText.appendChild(number)
 }
 */



//function to remove all from input
function clear(){
    allClear.addEventListener('click', ()=>{
       // displayinput.value = ""
       currentText.textContent = "";
       previousText.textContent = "";
       calculation = [];
       console.log('clicked clear');
    })
}
//function to delete a single degit
function deleteNumber(){
    //deleteButton.addEventListener("click",()=>{
        //displayinput.value = displayinput.value.slice(0, -1);
       // console.log(displayinput.value)
        //previousText.textContent.slice(0, -1);
        //previousText.innerHTML
        
        //console.log("clicked del")
   // })
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
   
}


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



