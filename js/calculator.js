
export default class Calculator {

    constructor(display, string) {

        this.display = display;
        this.string = string;
    }

    /* Numbers asignations & operators finding and asignations */
    getOutcome(string) {

        const charRegExp = /[A-Za-z]+/g;


        if (charRegExp.test(string) === true) {

            display.classList.add('red-text');
            return display.value = 'Please enter a valid number.';

        }
        return new Function('return ' + string + ';')();

    }

}
