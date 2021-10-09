(function(){
'use strict'

// DOM Elements
// Theme
const body = document.querySelector('body');
const themes = document.querySelectorAll('.option')
// Output
const screen = document.querySelector('.output h1');
// Input
const btns = document.querySelectorAll('.container-1 button');
const reset = document.querySelector('.reset');
const calc = document.querySelector('.equal');


// Start State
const calculator = {
    output: '0',
    firstOperand: '',
    operator: null,
    secondOperand: ''
}


// FUNCTIONS
function write() {
    if(this.className === 'dot' && calculator.firstOperand.includes('.') && !calculator.operator) return
    if(this.className === 'dot' && calculator.secondOperand.includes('.')) return

    if(!calculator.operator && this.className !== 'del'  && this.className !== 'operator') {
        calculator.firstOperand += this.value;
        calculator.output = calculator.firstOperand;
        screen.textContent = calculator.output
    }
        if(!calculator.operator && this.className === 'del') {
            calculator.firstOperand = calculator.firstOperand.slice(0, -1);
            calculator.output = calculator.firstOperand;
            screen.textContent = calculator.output
        }
    if(this.className === 'operator' && !calculator.secondOperand) {
        calculator.operator = this.value;
        calculator.output = calculator.operator;
        screen.textContent = calculator.output
    }
    if(calculator.operator && this.className !== 'del' && this.className !== 'operator') {
        calculator.secondOperand += this.value;
        calculator.output = calculator.secondOperand;
        screen.textContent = calculator.output;
    }
        if(calculator.operator && calculator.secondOperand && this.className === 'del') {
            calculator.secondOperand = calculator.secondOperand.slice(0, -1);
            calculator.output = calculator.secondOperand;
            screen.textContent = calculator.output
        }
        if(this.className === 'operator' &&  calculator.secondOperand) {
            calculate()
            calculator.operator = this.value;
        }
        console.log(calculator)
}

function arm() {
    calculator.firstOperand = calculator.output;
    calculator.secondOperand = ''
    screen.textContent = calculator.output;
}

function resetCalc() {
    calculator.output = '0';
    calculator.firstOperand = '';
    calculator.operator = null;
    calculator.secondOperand = '';
    screen.textContent = calculator.output
}

function calculate() {
    if(calculator.operator === '+') {
        calculator.output = `${+calculator.firstOperand + +calculator.secondOperand}`;
        arm()
    };
    if(calculator.operator === '-') {
        calculator.output = `${+calculator.firstOperand - +calculator.secondOperand}`;
        arm()  
    };
    if(calculator.operator === '*') {
        calculator.output = `${+calculator.firstOperand * +calculator.secondOperand}`;
        arm()
    };
    if(calculator.operator === '/') {
        calculator.output = `${+calculator.firstOperand / +calculator.secondOperand}`;
        arm() 
    };
}

function setTheme() {
    console.log(this.textContent)
    if(this.textContent === '1') {
        body.className = '';
        body.classList.add('dark')
    }
    if(this.textContent === '2') {
        body.className = '';
        body.classList.add('light')
    }
    if(this.textContent === '3') {
        body.className = '';
        body.classList.add('purple')
    }
}

// EVENTS
btns.forEach(el => {
    el.addEventListener('click', write)
});

calc.addEventListener('click', calculate);

reset.addEventListener('click', resetCalc);

themes.forEach(el => el.addEventListener('click', setTheme))

})();