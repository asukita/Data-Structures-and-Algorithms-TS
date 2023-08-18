// Hi My name is Pam
// maP si eman yM iH

function reverseString(value: string): String {
    let sizeOfValue = value.length;
    let newString = '';
    // validation
    if (!validateString(value)) {
        return 'Check your input, please!'
    }

    for (let index = sizeOfValue - 1; index >= 0; index--) {
        newString += value[index];
    }
    return newString;
}

function reverseString2(value: string): String {
    // validation
    if (!validateString(value)) {
        return 'Check your input, please!'
    }
    return value.split('').reverse().join('');
}

const reverseString3 = (value: string) => {
    // validation
    if (!validateString(value)) {
        return 'Check your input, please!'
    }
    return [...value].reverse().join('');
};

function validateString(value: string): Boolean {
    // validation
    if (!value || value.length < 2 || typeof value !== 'string') {
        return false;
    } else {
        return true;
    }
}

console.log('1st', reverseString('Hi My name is Pam'));
console.log('2nd', reverseString2('Hi My name is Pam'));
console.log('3rd', reverseString3('Hi My name is Pam'));
