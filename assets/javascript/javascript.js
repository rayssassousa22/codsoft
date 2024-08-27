let currentNumber = '';
let previousNumber = '';
let operator = '';

const display = document.getElementById('resultado');

function updateDisplay (value){
    display.textContent = value;
}


function handleNumber (value){
    currentNumber += value;
    updateDisplay(currentNumber);
}

function handleOperator (value){
    if(currentNumber === '') return;
    if(previousNumber !== ''){
        
        calculate();
    } else {
        previousNumber = currentNumber;
    }

    operator = value;
    currentNumber = '';
}

function calculate(){
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if(isNaN(prev) || isNaN(current)) return;

    switch(operator){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operator= '';
    previousNumber = '';
    updateDisplay(currentNumber);
}

function handleEquals (){
    if(operator === '' || currentNumber === '') return;
    calculate();
}

function clearDisplay(){
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay(0);
}

const buttons = document.querySelectorAll('.buttons');

buttons.forEach(button => {
    const value = button.value;
    if(!isNaN(value)){
        button.addEventListener('click', () => handleNumber(value));
    } else if (value === '+' || value === '-'){
        button.addEventListener('click', () => handleOperator(value));
    }
});

document.getElementById('igual').addEventListener('click', handleEquals); //lição valiosa, nunca coloque os parenteses senão não funciona

document.getElementById('clear').addEventListener('click', clearDisplay);