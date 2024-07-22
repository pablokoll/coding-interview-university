function singleNumber(nums: number[]): number {
    const numbers = new Set<number>();
    for (const num of nums) {
        if (numbers.has(num)) {
            numbers.delete(num);
        } else {
            numbers.add(num);
        }
    }
    return numbers.values().next().value;
}

console.log(singleNumber([1, 2, 2, 3, 4, 3, 4]));
