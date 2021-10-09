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


// State
let output = '0';
let firstOperand = '';
let operator = null;
let secondOperand = '';


// FUNCTIONS
function write() {
    if(this.className === 'dot' && firstOperand.includes('.') && !operator) return
    if(this.className === 'dot' && secondOperand.includes('.')) return

    if(!operator && this.className !== 'del'  && this.className !== 'operator') {
        firstOperand += this.value;
        output = firstOperand;
        screen.textContent = output
    }
        if(!operator && this.className === 'del') {
            firstOperand = firstOperand.slice(0, -1);
            output = firstOperand;
            screen.textContent = output
        }
    if(this.className === 'operator' && !secondOperand) {
        operator = this.value;
        output = operator;
        screen.textContent = output
    }
    if(operator && this.className !== 'del' && this.className !== 'operator') {
        secondOperand += this.value;
        output = secondOperand;
        screen.textContent = output;
    }
        if(operator && secondOperand && this.className === 'del') {
            secondOperand = secondOperand.slice(0, -1);
            output = secondOperand;
            screen.textContent = output
        }
        if(this.className === 'operator' &&  secondOperand) {
            calculate()
            operator = this.value;
        }
}

function arm() {
    firstOperand = output;
    secondOperand = ''
    screen.textContent = output;
}

function resetCalc() {
    output = '0';
    firstOperand = '';
    operator = null;
    secondOperand = '';
    screen.textContent = output
}

function calculate() {
    if(operator === '+') {
        output = `${+firstOperand + +secondOperand}`;
        arm()
    };
    if(operator === '-') {
        output = `${+firstOperand - +secondOperand}`;
        arm()  
    };
    if(operator === '*') {
        output = `${+firstOperand * +secondOperand}`;
        arm()
    };
    if(operator === '/') {
        output = `${+firstOperand / +secondOperand}`;
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
btns.forEach(el =>  el.addEventListener('click', write));
    
calc.addEventListener('click', calculate);

reset.addEventListener('click', resetCalc);

themes.forEach(el => el.addEventListener('click', setTheme))

})();