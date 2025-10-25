

function myFindRestaurant(list1: string[], list2: string[]): string[] {
    const mapStrings1 = new Map<string, number>();
    const mapStrings2 = new Map<string, number>();

    const size = list1.length > list2.length ? list1.length : list2.length;
    let stringMinIndex: string[] = [];
    let minIndexStrings: number = list1.length + list2.length;
    for (let i = 0; i < size; i++) {
        const string1 = list1[i];
        const string2 = list2[i];

        mapStrings1.set(string1, i);
        mapStrings2.set(string2, i);

        if (mapStrings1.has(string2)) {
            let num1 = mapStrings1.get(string2) ?? NaN;
            let num2 = mapStrings2.get(string2) ?? NaN;
            const sum = num1 + num2;
            if (sum < minIndexStrings) {
                minIndexStrings = sum;
                stringMinIndex = [string2];
            } else if (sum === minIndexStrings && !stringMinIndex.includes(string2)) {
                stringMinIndex.push(string2);
            }
        }

        if (mapStrings2.has(string1)) {
            let num1 = mapStrings1.get(string1) ?? NaN;
            let num2 = mapStrings2.get(string1) ?? NaN;
            const sum = num1 + num2;
            if (sum < minIndexStrings) {
                minIndexStrings = sum;
                stringMinIndex = [string1];
            } else if (sum === minIndexStrings && !stringMinIndex.includes(string1)) {
                stringMinIndex.push(string1);
            }
        }
    }

    return stringMinIndex;
}

let list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    list2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'];

// console.log(findRestaurant(list1, list2));

(list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']),
    (list2 = ['KFC', 'Shogun', 'Burger King']);
// console.log(findRestaurant(list1, list2));

(list1 = ['happy', 'sad', 'good']), (list2 = ['sad', 'happy', 'good']);
console.log(myFindRestaurant(list1, list2));


function findRestaurantWithOutHashMap(list1: string[], list2: string[]): string[] {
    const m = list1.length;
    const n = list2.length;
    let minIndexSum = Infinity;
    let result: string[] = [];

    for (let sum = 0; sum < m + n - 1; sum++) {
        for (let i = 0; i <= sum; i++) {
            const j = sum - i;
            if (i < m && j < n && list1[i] === list2[j]) {
                if (sum < minIndexSum) {
                    minIndexSum = sum;
                    result = [list1[i]];
                } else if (sum === minIndexSum) {
                    result.push(list1[i]);
                }
            }
        }
        if (result.length > 0) {
            break;
        }
    }

    return result;
}

function findRestaurantHashMapFavorite(list1: string[], list2: string[]): string[] {
    const mapStrings1 = new Map<string, number>();

    for (let i = 0; i < list1.length; i++) {
        mapStrings1.set(list1[i], i);
    }

    let minIndexSum = Infinity;
    let res: string[] = [];

    for (let j = 0; j < list2.length; j++) {
        if (mapStrings1.has(list2[j])) {
            const indexSum = j + mapStrings1.get(list2[j])!;
            if (indexSum < minIndexSum) {
                minIndexSum = indexSum;
                res = [list2[j]];
            } else if (indexSum === minIndexSum) {
                res.push(list2[j]);
            }
        }
    }

    return res;
}

function findRestaurantTheWorst(list1: string[], list2: string[]): string[] {
    const map = new Map<number, string[]>();

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                const indexSum = i + j;
                if (!map.has(indexSum)) {
                    map.set(indexSum, [list1[i]]);
                } else {
                    map.get(indexSum)!.push(list1[i]);
                }
            }
        }
    }

    let minIndexSum = Infinity;
    for (let key of map.keys()) {
        if (key < minIndexSum) {
            minIndexSum = key;
        }
    }

    return map.get(minIndexSum)!;
}


