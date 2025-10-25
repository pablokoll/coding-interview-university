function climbStairs(n: number): number {
    if (n <= 2) return n;
  
    let first = 1;
    let second = 2;
  
    for (let i = 3; i <= n; i++) {
      const current = first + second;
      first = second;
      second = current;
    }
  
    return second;
  }

console.log(climbStairs(2)); // 2 a: 1-1 b: 2
console.log(climbStairs(3)); // 3 a: 1-1-1 b: 1-2 c: 2-1
