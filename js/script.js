
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button-item'));
let string = '';


/* This function takes a string line as parameter and searchs
for a blank space on the string with indexOf method, then sums 1 to the index value
and assigns it to a variable.
With help of substring method and op variable we assign the operator and the numbers to variables
and then it calls compareOperators function */
function getOperator(string) {

    const op = string.indexOf(' ') + 1;

    const operator = string.substring(op, op + 1);
    
    let num1 = parseFloat(string.substring(0, op - 1));

    let num2 = parseFloat(string.substring(op + 1));

    return compareOperators(operator, num1, num2);
}

/* This function validates and sums two numbers */
function sum(num1, num2) {
    
    let sum = 0;

    if (num1 == null || num2 == null) {

        display.classList.add('red-text');
        throw display.value = 'Please enter a valid number.';
    }

    sum = num1 + num2;
    return sum;

}

/* This function validates and substracts two numbers */
function subtraction(num1, num2) {

    let res = 0;

    if (num1 == null || num2 == null) {

        display.classList.add('red-text');
        throw display.value = 'Please enter a valid number.';

    }

    res = num1 - num2;
    return res;

}

/* This function validates and multiplicates two numbers */
function multiplication(num1, num2) {

    let mul = 0;

    if (num1 == null || num2 == null) {

        display.classList.add('red-text');
        throw display.value = 'Please enter a valid number.';
    }

    mul = num1 * num2;
    return mul;

}

/* This function validates and divides two numbers */
function divide(num1, num2) {

    let div = 0;

    if (num1 == null || num2 == null) {

        display.classList.add('red-text');
        throw display.value = 'Please enter a valid number.';

    }

    if (num1 == 0 || num2 == 0) {

        display.classList.add('red-text');
        throw display.value = 'Cannot divide 0 or by 0.';

    }

    div = num1 / num2;
    return div;

}

/* This function validates and finds the module of two numbers */
function mod(num1, num2) {

    let mod = 0;

    if (num1 == null || num2 == null) {

        display.classList.add('red-text');
        throw display.value = 'Please enter a valid number.';

    }

    if (num1 == 0 || num2 == 0) {

        display.classList.add('red-text');
        throw display.value = 'Cannot divide 0 or by 0.';

    }

    mod = num1 % num2;
    return mod;

}

/* This function compares the parameter "op" from the function getOperator with a pre-defined
list of math operators, depending on which operator of the list matches with the op parameter,
the switch structure calls the corresponding function for the math operation that the user wants to do. */
function compareOperators(op, num1, num2) {

    const differentOperators = ['+', '-', 'x', '/'];

    OpFor:
    for (let i = 0; i < differentOperators.length; i++) {


        switch (op) {

            case '+':

                let sumValue = sum(num1, num2);
                if (sumValue != NaN) return sumValue;

                break;
            case '-':

                let subtractionValue = subtraction(num1, num2);
                if (subtractionValue != NaN) return subtractionValue;

                break;
            case 'x':

                let multiplicationValue = multiplication(num1, num2);
                if (multiplicationValue != NaN) return multiplicationValue;

                break;
            case '/':

                let divValue = divide(num1, num2);
                if (divValue != NaN) return divValue;

                break;
            case '%':

                let modValue = mod(num1, num2);
                if (modValue != NaN) return modValue;

                break;
        }

    }

}


/* This function evaluates which button is being pressed and manages the functionality
of each option such as clean, erase and the different math operations  */
function options(string, buttons){

    buttons.map(button => {
    

        button.addEventListener('click', (e) => {
            switch (e.target.innerText) {
                case 'AC':
                    display.value = '';
                    display.classList.remove('red-text');
                    break;
    
                case 'backspace':
                    if (display.value) {
                        display.value = display.value.slice(0, -1);
                    }
                    break;
    
                case '+':
                    display.value += ' + ';
    
                    break;
    
                case '-':
                    display.value += ' - ';
    
                    break;
    
                case 'x':
                    display.value += ' x ';
    
                    break;
    
                case '/':
                    display.value += ' / ';
    
                    break;
    
                case '%':
                    display.value += ' % ';
    
                    break;
    
                case '=':
                    string = display.value;
                    display.value = string + ' = ' + getOperator(string);
                    break;
    
                default:
                    display.value += e.target.innerText;
    
            }

        });

    });

}

options(string, buttons);
