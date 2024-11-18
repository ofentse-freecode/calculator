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

function clear(){
    allClear.addEventListener('click', ()=>{
       currentText.textContent = "";
       previousText.textContent = "";
       calculation = [];
    })
}clear();

  
function deleteNumber(){
    if(calculation.length == "0"){
        delnum = [...currentText.textContent];
        text = delnum.slice(0, -1);
         retdelnum = text.join("");
        currentText.textContent = ""
         previousText.textContent = retdelnum;
         return calculation = [...retdelnum]
    }
   const answer = calculation.slice(0, -1);
   previousText.textContent = answer.join("");
    return calculation = answer;

}; 


function appendNumber(value){
    if(previousText.textContent === "0" && value === "0"){
        return;
    }
    if (previousText.textContent === '0') {
        previousText.textContent = value;
        calculation = [value];  // Reset the calculation array with the new digit
    } else {
        // Continue appending the number if there's already a valid number
        calculation.push(value);
        fullnumber = calculation.join("");
        previousText.textContent = fullnumber;
    }
//  calculation.push(value);
// if (value === '.' &&  previousText.textContent.includes('.') || value === '0' &&  previousText.textContent.includes('0.'))
//     { return
//     }
//     else{
//     fullnumber = calculation.join("")
//     return previousText.textContent = fullnumber;
// }
};


function chooseOperation(operand){
/*if (previousText.textContent != ""){
    checkop = calculation.push(operand);
    console.log(currentText.textContent)
    operandans = calculation.join("");
   previousText.textContent = operandans;
}*/
/*else{ 
      compute();
      // currentText.textContent =  previousText.textContent;
      currentText.textContent = previousText.textContent + operand;
      console.log(currentText.textContent);
      //currentText.textContent = previousText.textContent.push(operand);
      calculation = []
      return previousText.textContent = calculation;
 }*/
  // op = !currentText.textContent.includes(operand)
   // console.log(op)
   // while(op){
   if(!currentText.textContent.includes(operand)){ 
        compute();
  // }
  currentText.textContent = previousText.textContent + operand;
  console.log("last", currentText.textContent)
  calculation = []
  return previousText.textContent = calculation;
   }

};

function formatResult (result){
    if (result !== 0 && (Math.abs(result) >= 1e9 || Math.abs(result) < 1e9)){
        return result.toExponential(9);
    }else {
        return `${Math.round(result * 1e9) / 1e9}`;
    }
}
function compute(){
 let prev = parseFloat(currentText.textContent);
 let nowoperand = [...currentText.textContent].pop();
 let curroperand = nowoperand;
 const working = parseFloat(previousText.textContent);
 console.log(currentText.textContent)
 console.log(previousText.textContent)

    if (isNaN(prev) || isNaN(working)) return 
    switch (curroperand){
        case '+':
          computation = prev + working;
          computation = Math.round(computation * 100) / 100;
            formatResult(computation)
          break
        case '-':
          computation = prev - working
          computation = Math.round(computation * 100) / 100;
          formatResult(computation)
          break
        case 'x':
          computation = prev * working
          computation = Math.round(computation * 100) / 100;
          formatResult(computation)
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
          computation = Math.round(computation * 100) / 100;
          formatResult(computation)
          break;
        case '%':
            computation = prev / working 
            computation = Math.round(computation * 100) / 100;
            formatResult(computation)
            break
        default:
            alert("enter a valid input");
    }
   
   calculation = computation;
    currentText.textContent = "";
   prev = computation;
  return previousText.textContent = computation;

};


 //eventListiners.

numberButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
       let value = button.innerText;
        appendNumber(value);    
    })
});
/*numberButtons.forEach((button)=>{
    button.addEventListener("keydown", (event)=>{
       let event = button.innerText;
        appendNumber(event);    
    })
});*/

deleteButton.addEventListener("click",()=>{
     deleteNumber();
});


operationButtons.forEach((operationbutton) =>{
    operationbutton.addEventListener("click",()=>{
        let operand = operationbutton.innerText;
        chooseOperation(operand);   
})  
});
equalButton.addEventListener("keydown", (e) =>{

    compute(); 
});

equalButton.addEventListener("click", (e) =>{
       compute(); 
});

document.addEventListener("keydown", ()=>{
    const key = event.key;

    if(key >= '0' && key <= '9'){
        appendNumber(key);
    } else if  (key === '.' || key === ',') {
        appendNumber('.');
    }
    else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        chooseOperation(key);
    }
    else if (key === 'Enter' || key === '=') {
        compute();
    }
    else if (key === 'Backspace') {
        deleteNumber();
    }
    else if (key === 'c' || key === 'C') {
        clear();
    }
})
