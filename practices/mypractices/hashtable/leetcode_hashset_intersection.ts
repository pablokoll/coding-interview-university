function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);

    const result = nums2.filter((item) => set1.has(item));

    return result;
}

console.log(intersection([1, 1, 2, 3, 4], [1, 1, 4, 5]));
