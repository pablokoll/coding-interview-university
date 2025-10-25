/**
 * Problem 6: Sum square difference
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
 */

// primero de 1 a n al cuadrado da un resultado y los voy sumando entre si
// despues sumo 1 a n normal y al resultaod lo hago al cuadrado
// ambos resultados los resto entre si
function sumSquareDifference(n) {
    let sumWithSquare = 0
    let resultWithSquare = 0

    for (let i = 1; i <= n; i++) {
        sumWithSquare += i ** 2
        resultWithSquare += i
    }
    resultWithSquare = resultWithSquare ** 2
    return resultWithSquare - sumWithSquare;
}

console.log(sumSquareDifference(10));