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
}clear()

//function to delete a single degit
function deleteNumber(){
   const answer = calculation.slice(0, -1);
   previousText.textContent = answer.join("");
    return  calculation = answer;
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
   if(operand !== ""){
        
        //compute();
        
    }
  currentText.textContent = previousText.textContent.toString() + operand.toString();
  calculation = []
  return previousText.textContent = calculation;
//console.log(operand)

}// console.log(operand)

function compute(){
   /* equalButton.addEventListener("click", ()=>{
        const expression = calculation.join("");
        const parts = expression.match(/(-?\d+(\.\d+)?)([\+\-\*\/])(-?\d+(\.\d+)?)/);
        if(!parts){
         console.log("invalid calculation format")
         return;
        }
        const [,operand1, operator, operand2] = parts;
     
        switch(operator){
         case "+":
             result = parseFloat(operand1) + parseFloat(operand2);
             break;
             case "-":
                 result = parseFloat(operand1) - parseFloat(operand2);
                 break;
             case "*":
                 result = parseFloat(operand1) * parseFloat(operand2);
                 break;
             case "/":
                 if(parseFloat(operand2) === 0){
                      result = "error"
                     } else{
                      result = parseFloat(operand1) / parseFloat(operand2)
                         }
                    break;
              default:
                console.log("invalid oparation")
                 return;
        }
    });*/
 let computation  ;
 //console.log(currentText.textContent)
 const prev = parseFloat(currentText.textContent);
 console.log(prev)
 const nowoperand = [...currentText.textContent].pop();
 curroperand = nowoperand.toString();
 const working = parseFloat(previousText.textContent);

//console.log(curroperand);
    if (isNaN(prev) || isNaN(working)) return
    switch (curroperand){
        case '+':
          computation = prev + working
          //console.log(operand)
          console.log(computation,"plus")
          break
        case '-':
          computation = prev - working
          console.log(computation, "minus")
          break
        case '*':
          computation = prev * working
          console.log(computation, "times")
          break
        case '/':
          computation = prev / working
          console.log(computation, "division")
          break
        default:
            //return
            console.log("wow")
    }
    //
   // console.log(curroperand)
   currentText.textContent = computation;
   calculation = []
   return previousText.textContent = calculation;

}


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
   // updatedisplay()
   //chooseOperation
  //console.log("equal")


})

