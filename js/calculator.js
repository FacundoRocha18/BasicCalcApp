import { create, all } from 'mathjs.js';

const math = create(all,  {});


export default class Calculator {

    constructor(display, string) {

        this.display = display;
        this.string = string;
    }

    /* Numbers asignations & operators finding and asignations */
    getResult(string, counter) {

        const opRegexp = /[x+/-]+/g;
        const numRegexp = /[0-9]{1,}/g;
        const op = ['x', '+', '/', '-'];
        let operators, nums;

        if (counter > 0) {

            let i;

            for (i = 0; i <= counter; i++) {

                nums = string.match(numRegexp);
                operators = string.match(opRegexp);

            }
            for (i = 0; i <= op.length; i++) {

                if (!operators.includes(op[i]) || isNaN(nums[i])) {

                    throw alert('The text you entered does not contain numbers and operators');

                } else {
                    return math.evaluate(string).toString();
                }
                
            }

            
        }

        /* console.log(operators, nums);

        

        return this.compareOperators(operators, nums); */
    }

    /* acumular(acumulado, numbers, operators) {

        acumulado = 0;

        for ( let i = 0; i <= numbers.length; i++ ) {

            if ( operators.length == 2 ) {
                if ( operators.indexOf('+') < operators.indexOf('-') ) {

                    acumulado = parseFloat(numbers[0]);
                    acumulado = acumulado + parseFloat(numbers[1]);
                    return acumulado - parseFloat(numbers[2]);
    
                } else if (  operators.indexOf('+') > operators.indexOf('-') ) {
    
                    acumulado = parseFloat(numbers[0]);
                    acumulado -= parseFloat(numbers[1]); 
                    return acumulado + parseFloat(numbers[2]);
    
                }
            }
            
        }
    } */

    /* This function compares the parameter "op" from the function getOperator with a pre-defined
    list of math operators, depending on which operator of the list matches with the op parameter,
    the switch structure calls the corresponding function for the math operation that the user wants to do. */
    /* compareOperators(operators, nums) {

        switch (operators[0]) {

            case '+':

                /* let sumValue = this.sum(nums);
                console.log(sumValue);
                if (!isNaN(sumValue)) return sumValue;
                var resultado = 0;
                resultado = this.acumular(resultado, nums, operators);
                alert(resultado);
                if (!isNaN(resultado) || resultado != undefined ) return resultado;
                break;
            case '-':

                /* let subtractionValue = this.subtraction(num1, num2);
                if (!isNaN(subtractionValue)) return subtractionValue;
                var resultado = 0;
                resultado = this.acumular(resultado, nums, operators);
                alert(resultado);
                if (!isNaN(resultado) || resultado != undefined ) return resultado;

                break;
            case 'x':

                let multiplicationValue = this.multiplication(num1, num2);
                if (!isNaN(multiplicationValue)) return multiplicationValue;

                break;
            case '/':

                let divValue = this.divide(num1, num2);
                if (!isNaN(divValue)) return divValue;

                break;
            case '%':

                let modValue = this.mod(num1, num2);
                if (!isNaN(modValue)) return modValue;

                break;
        }

    } */

    /* This function validates and sums two numbers */
    sum(nums) {

        let resultado;

        for ( let i = 0; i <= nums.length; i++ ) {
            /* if (nums[i] == null || nums[i] == NaN) {

                display.classList.add('red-text');
                throw display.value = 'Please enter a valid number.';
            } */
            alert(parseFloat(nums[0]) + parseFloat(nums[1]));
            resultado = parseFloat(nums[0]) + parseFloat(nums[1]);
        }
        
        return resultado;

    }

    /* This function validates and substracts two numbers */
    subtraction(num1, num2) {

        let res = 0;

        if (num1 == null || num2 == null) {

            display.classList.add('red-text');
            throw display.value = 'Please enter a valid number.';

        }

        res = num1 - num2;
        return res;

    }

    /* This function validates and multiplicates two numbers */
    multiplication(num1, num2) {

        let mul = 0;

        if (num1 == null || num2 == null) {

            display.classList.add('red-text');
            throw display.value = 'Please enter a valid number.';
        }

        mul = num1 * num2;
        return mul;

    }

    /* This function validates and divides two numbers */
    divide(num1, num2) {

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
    mod(num1, num2) {

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

    /* clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.prevOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        if (this.operation != null) {
            return this.previousOperand.value = `${this.previousOperand} ${this.operation}`;
        }
    } */
}
