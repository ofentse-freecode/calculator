const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalButton = document.querySelector('.btn-eql');
const deleteButton = document.querySelector('.del-btn');
const allClear = document.getElementById("all-clear");
let currentText = document.querySelector(".previous");
const previousText = document.querySelector('.current');

currentText.textContent = "";
previousText.textContent = "";
let operand ;
let calculation = [];
let computation;

//console.log(equalButton)

//functions

//function to remove all from input
function clear(){
    allClear.addEventListener('click', ()=>{
       currentText.textContent = "";
       previousText.textContent = "";
       calculation = [];
       console.log('clicked clear');
    })
}clear();

//function to delete a single degit
function deleteNumber(){
   const answer = calculation.slice(0, -1);
   previousText.textContent = answer.join("");
    return calculation = answer;
};


function appendNumber(value){
if (value === '.' &&  previousText.textContent.includes('.'))
    { return
    }else{
    calculation.push(value);
    fullnumber = calculation.join("")
    return previousText.textContent = fullnumber;
}
};


function chooseOperation(operand){
    if(operand === "")return
   if(operand !== "" ){ 
        compute();
   }
   //if(!isNaN(operand)){ 
  //  compute();
//}
 // currentText.textContent = previousText.textContent + operand;
  currentText.textContent = previousText.textContent + operand;
  calculation = []
  return previousText.textContent = calculation;
//console.log(operand)

}// console.log(operand)

function compute(){
  
 //console.log(currentText.textContent)
 let prev = parseFloat(currentText.textContent);
 //console.log(prev)
 let nowoperand = [...currentText.textContent].pop();
 let curroperand = nowoperand;
 const working = parseFloat(previousText.textContent);

//console.log(curroperand);
    if (isNaN(prev) || isNaN(working)) return//alert??
    switch (curroperand){
        case '+':
          computation = prev + working;
          console.log(computation,"plus", prev, working);
          
          break
        case '-':
          computation = prev - working
          console.log(computation, "minus")
          operand= "";
          break
        case 'x':
          computation = prev * working
          console.log(computation, "times")
          break
        case '/':
            if(working === 0){
                alert("You cannot divide by zero");
                previousText.textContent = "";
                currentText.textContent = "";
               calculation = [];
                return ;
           }
          computation = prev / working
          console.log(computation, "division")
          break;
        case '%':
            computation = prev / working 
            console.log(computation, "percent")
            break
        default:
            //return
            console.log("wow")
    }
   
    //
   // console.log(curroperand)
   previousText.textContent = computation;
   calculation = computation;
    currentText.textContent = "";
   prev = computation

   // adding to the number

};

//calling all functions

 //eventListiners.

numberButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
       let value = button.innerText;
        appendNumber(value);    
    })
});

deleteButton.addEventListener("click",()=>{
     deleteNumber();
});


operationButtons.forEach((operationbutton) =>{
    operationbutton.addEventListener("click",()=>{
        let operand = operationbutton.innerText;
        chooseOperation(operand);   
})  
});


equalButton.addEventListener("click", () =>{
    compute();
})

