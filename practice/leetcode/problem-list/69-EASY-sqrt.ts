function mySqrt(x: number): number {
    let currentMax = 0;
    for (let i = 1; i <= x; i++) {
        let mathOperation = i * i; // 1
        if (mathOperation > x) {
            return currentMax;
        }
        if (mathOperation <= x && mathOperation > currentMax) {
            currentMax = i;
        }
    }
    return currentMax;
}

console.log(mySqrt(1)); // 2
// console.log(mySqrt(4)); // 2
// console.log(mySqrt(8)); // 2 (2.82842)
