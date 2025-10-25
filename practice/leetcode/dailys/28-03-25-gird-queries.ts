// 2503. Maximum Number of Points From Grid Queries
// https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/?envType=daily-question&envId=2025-03-28

function maxPoints(grid: number[][], queries: number[]): number[] {
    const rowCount = grid.length, colCount = grid[0].length;
    const sortedQueries = queries.map((queryValue, index) => [queryValue, index]).sort((a, b) => a[0] - b[0]);
    const resultArray = new Array(queries.length).fill(0);
    const visitedCells = Array.from({ length: rowCount }, () => Array(colCount).fill(false));
    
    const minHeap: [number, number, number][] = [[grid[0][0], 0, 0]];
    visitedCells[0][0] = true;
    let reachableCellsCount = 0;
    let currentMaxValue = 0;
    
    const movementDirections = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    for (const [queryValue, queryIndex] of sortedQueries) {
        while (minHeap.length > 0 && minHeap[0][0] < queryValue) {
            const [cellValue, row, col] = minHeap.shift()!;
            reachableCellsCount++;
            currentMaxValue = cellValue;
            
            for (const [rowOffset, colOffset] of movementDirections) {
                const newRow = row + rowOffset, newCol = col + colOffset;
                if (newRow >= 0 && newRow < rowCount && newCol >= 0 && newCol < colCount && !visitedCells[newRow][newCol]) {
                    visitedCells[newRow][newCol] = true;
                    minHeap.push([grid[newRow][newCol], newRow, newCol]);
                    minHeap.sort((a, b) => a[0] - b[0]);
                }
            }
        }
        resultArray[queryIndex] = reachableCellsCount;
    }
    
    return resultArray;
}


const example1 = {
    grid: [
        [1, 2, 3],
        [2, 5, 7],
        [3, 5, 1],
    ],
    queries: [5, 6, 2],
};
// Output: [5,8,1]

const example2 = {
    grid: [
        [5, 2, 1],
        [1, 1, 2],
    ],
    queries: [3],
};
// Output: [0]

const result1 = maxPoints(example1.grid, example1.queries);
// const result2 = maxPoints(example2.grid, example2.queries);

console.log('result1 ', result1);
// console.log('result2 ', result2);
