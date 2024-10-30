function orderString(str: string): string {
    return str
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
}

function getOrCreate(map: Map<string, string[]>, key: string): string[] {
    let value = map.get(key);
    if (value === undefined) {
        value = [];
        map.set(key, value);
    }
    return value;
}

function groupAnagrams(strs: string[]): string[][] {
    const anagramsMap = new Map<string, string[]>();

    strs.forEach((str) => {
        const key = orderString(str);
        getOrCreate(anagramsMap, key).push(str);
    });
    return Array.from(anagramsMap.values());
}

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
