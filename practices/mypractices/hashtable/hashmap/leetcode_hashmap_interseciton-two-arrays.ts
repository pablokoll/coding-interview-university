function intersect(nums1: number[], nums2: number[]): number[] {
    const countMap = new Map<number, number>();
    const result: number[] = [];

    for (const num of nums1) {
        countMap.set(num, (countMap.get(num) ?? 0) + 1);
    }
    console.log('countMap 1 ', countMap)
    
    for (const num of nums2) {
        if (countMap.has(num) && countMap.get(num)! > 0) {
            result.push(num);
            countMap.set(num, countMap.get(num)! - 1);
        }
    }
    console.log('countMap 2 ', countMap)

    return result;
}

// console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2], [1, 1]));
// console.log(intersect([4,9,5], [9,4,9,8,4]))
