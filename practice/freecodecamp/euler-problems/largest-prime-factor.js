function largestPrimeFactor(n) {
    let factor = 2;

    while (factor * factor <= n) {
        if (n % factor === 0) {
            n = n / factor;
        } else {
            factor++;
        }
    }

    return n;
}

console.log(largestPrimeFactor(2));
console.log(largestPrimeFactor(8));
console.log(largestPrimeFactor(13195));