import Calculator from './calculator.js';

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button-item'));
let string = '';

const calculator = new Calculator(display, string);

/* This function evaluates which button is being pressed and manages the functionality
of each option such as clean, erase and the different math operations  */

function options(string, buttons) {

    let counter = 0;

    buttons.map(button => {


        button.addEventListener('click', (e) => {
            switch (e.target.innerText) {

                case 'C':
                    display.value = '';
                    display.classList.remove('red-text');
                    counter = 0;
                    break;

                case 'backspace':
                    if (display.value) {
                        display.value = display.value.slice(0, -1);
                    }
                    break;

                case 'retroceso':
                    if (display.value) {
                        display.value = display.value.slice(0, -1);
                    }
                    break;

                case '+':
                    display.value += ' + ';
                    counter++;
                    break;

                case '-':
                    display.value += ' - ';
                    counter++;
                    break;

                case 'x':
                    display.value += ' * ';
                    counter++;
                    break;

                case '÷':
                    display.value += ' / ';
                    counter++;
                    break;

                case '%':
                    display.value += ' % ';
                    counter++;
                    break;

                case '=':
                    string = display.value;
                    alert(string);
                    display.value = string + ' = ' + calculator.getOutcome(string, counter);
                    break;

                default:
                    display.value += e.target.innerText;

            }

        });

    });

}

options(string, buttons);
