function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    // Special cases for subtractive notation
    const specialCases = {
        900: 'CM',
        400: 'CD',
        90: 'XC',
        40: 'XL',
        9: 'IX',
        4: 'IV'
    };

    let romanNumeral = "";

    // Handle subtractive cases first
    for (let value in specialCases) {
        value = parseInt(value);
        while (num >= value) {
            romanNumeral += specialCases[value];
            num -= value;
        }
    }

    // Handle the remaining cases
    for (let key in obj) {
        let [symbol, value] = obj[key];
        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }
    }

    return romanNumeral;
}

// Example usage:
console.log(convertToRoman(36)); // Output: XXXVI

// do not edit below this line
module.exports = convertToRoman;
