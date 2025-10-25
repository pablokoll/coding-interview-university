/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
 */

function nthPrime(n) {
    function esPrimo(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    const primos = [];
    for (let i = 2; primos.length !== n; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    return primos.pop()
}

console.log(nthPrime(6)); // 13
// console.log(nthPrime(10001));

// Algorithm Criba de Eratostenes

function nthPrime(n) {
    if (n === 1) return 2;
  
    const estimateLimit = n < 6 ? 15 : Math.ceil(n * Math.log(n * Math.log(n)));
    const sieve = new Array(estimateLimit + 1).fill(true);
  
    sieve[0] = sieve[1] = false;
    const primes = [];
  
    for (let i = 2; i <= estimateLimit; i++) {
      if (sieve[i]) {
        primes.push(i);
        for (let j = i * i; j <= estimateLimit; j += i) {
          sieve[j] = false;
        }
      }
      if (primes.length === n) break;
    }
  
    return primes[n - 1];
  }
  