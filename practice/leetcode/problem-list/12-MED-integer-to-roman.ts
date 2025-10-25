function intToRoman(num: number): string {
    const intValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const stringValues = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let roman = '';
    for (let i = 0; i < intValues.length; i++) {
        let currentNumber = intValues[i];
        while (num >= currentNumber) {
            num -= currentNumber
            roman += stringValues[i]
        }
    }

    return roman;
}

console.log('init')
console.log(intToRoman(3749))