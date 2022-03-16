import Calculator from '../js/calculator.js';

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button-item'));
let string = '';

const calculator = new Calculator(display, string);


/* This function takes a string line as parameter and searchs
for a blank space on the string with indexOf method, then sums 1 to the index value
and assigns it to a variable.
With help of substring method and op variable we assign the operator and the numbers to variables
and then it calls compareOperators function */
/* function getOperator(string) {

    const op = string.indexOf(' ') + 1;

    const operator = string.substring(op, op + 1);

    let num1 = parseFloat(string.substring(0, op - 1));

    let num2 = parseFloat(string.substring(op + 1));

    return compareOperators(operator, num1, num2);
} */


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
                    display.value += ' x ';
                    counter++;
                    break;

                case '/':
                    display.value += ' / ';
                    counter++;
                    break;

                case '%':
                    display.value += ' % ';
                    counter++;
                    break;

                case '=':
                    string = display.value;
                    display.value = string + ' = ' + calculator.getOperators(string, counter);
                    break;

                default:
                    display.value += e.target.innerText;

            }

        });

    });

}

options(string, buttons);
