function reverse(x: number): number {
    const INT_MIN = -2147483648;
    const INT_MAX =  2147483647;

    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);

    if (reversed < INT_MIN || reversed > INT_MAX) return 0;

    return reversed;
}
