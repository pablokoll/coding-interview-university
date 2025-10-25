function isPalindrome(x: number): boolean {
    const reversed = `${x}`.split('').reverse().join('')

    return `${x}` === reversed
};