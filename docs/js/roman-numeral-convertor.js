// A list of possible Roman Numeral values
const ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

const min = 1;
const max = 3999;

// Debounce user input, we don't want to re-calculate on each key press
const typingDelayMs = 250;

const convertToRomanNumeral = (number) => {
    let output = '';
    for (let romanNumeral in ROMAN_NUMERALS) {
        while (number >= ROMAN_NUMERALS[romanNumeral]) {
            output += romanNumeral;
            number -= ROMAN_NUMERALS[romanNumeral];
        }
    }
    return output;
};

// Visual indicators for success and error
const errorLabelColour = ['bg-danger', 'border-danger'];
const errorValueColour = ['bg-danger-subtle', 'border-danger'];
const successLabelColour = ['bg-success', 'border-success'];
const successValueColour = ['bg-success-subtle', 'border-success'];

const clear = elements => {
    for (let element of elements) {
        if (element.is('label')) {
            element.removeClass(successLabelColour).removeClass(errorLabelColour);
        } else if (element.is('input')) {
            element.val('').removeClass(successValueColour).removeClass(errorValueColour);
        }
    }
};

const showError = elements => {
    for (let element of elements) {
        if (element.is('label')) {
            element.removeClass(successLabelColour).addClass(errorLabelColour);
        } else if (element.is('input')) {
            element.val('invalid !').removeClass(successValueColour).addClass(errorValueColour);
        }
    }
};

const showSuccess = (elements, val) => {
    for (let element of elements) {
        if (element.is('label')) {
            element.removeClass(errorLabelColour).addClass(successLabelColour);
        } else if (element.is('input')) {
            element.val(val).removeClass(errorValueColour).addClass(successValueColour);
        }
    }

}

const convertAndDisplayRomanNumeral = (inputElement, displayElements) => {
    const input = inputElement.val();
    if (input == null || input.trim() === '') {
        clear(displayElements);
        return;
    }

    const number = parseInt(input);
    if (isNaN(number) || number < min || number > max) {
        showError(displayElements);
        return;
    }

    const romanNumeral = convertToRomanNumeral(number);
    showSuccess(displayElements, romanNumeral);
    console.log(`${number} => ${romanNumeral}`);
};

// On Document Ready, attach event handler to Input
$(() => {
    const inputElement = $('#numberInput');
    const displayElements = [$('#romanNumeralOutput'), $('#romanNumeralOutputLabel')];
    inputElement.focus();

    ((() => {
        let timer;
        inputElement.on('input', () => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => convertAndDisplayRomanNumeral(inputElement, displayElements), typingDelayMs);
        });
    })());

    console.log(`Ready!`);
});
