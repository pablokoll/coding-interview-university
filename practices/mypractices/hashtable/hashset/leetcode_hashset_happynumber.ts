function splitNumberToArray(n: number): number[] {
    return n
        .toString()
        .split('')
        .map((num) => Number.parseInt(num));
}

function isHappy(n: number): boolean {
    let numSplit = splitNumberToArray(n);
    let number: number = 0;
    let numbersHistory = new Set<number>();
    while (number !== 1 && !numbersHistory.has(number)) {
        numbersHistory.add(number);
        number = numSplit.reduce((prev, curr) => prev + curr ** 2, 0);
        numSplit = splitNumberToArray(number);
    }
    return number === 1;
}

console.log(isHappy(1));
console.log(isHappy(2));
console.log(isHappy(19));
// console.log(isHappy(1111111));
