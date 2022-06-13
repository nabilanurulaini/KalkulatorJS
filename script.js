//digunakan untuk layar agar dapat menampilkan angka yang diklik dari tombol
const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {

    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");




let prevNumber = '';
let calculationOperator = '';
let currentNumber = '';

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const inputOperator = (operator) => {
    prevNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = '';
}
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', (event) => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case '%':
            result = parseFloat(prevNumber) % parseFloat(currentNumber);
            break;
        default:
            break;

    }
    currentNumber = result
    calculationOperator = '';
}

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '';
}
const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber)
})
inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot;
}
const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})