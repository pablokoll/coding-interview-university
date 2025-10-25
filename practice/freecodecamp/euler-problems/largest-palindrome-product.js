/* 
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
    let one = 1
    let two = 1

    for (let i = 1; i <= n; i++) {
        one = one * 10
        two = two * 10
    }
    one--
    two--

    function isPalindrome(number) {
        const numberString = number.toString()
        if (numberString === numberString.split("").reverse().join("")) {
            return true
        }
        return false
    }

    const maxPalindromes = [];
    let stop = false
    while (!stop) {
        let result = one * two
        if (isPalindrome(result)) {
            maxPalindromes.push(result)
        }
        one--

        if (one.toString().length < n) {
            one = two
            two--
        }
        if (two.toString().length < n) {
            stop = true
        }
    }
    return Math.max(...maxPalindromes)
}

console.log(largestPalindromeProduct(2));
console.log(largestPalindromeProduct(3));