function orderString(str: string): string {
    return str
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
}

function groupAnagrams(strs: string[]): string[][] {
    const anagramsMap = new Map<string, string[]>();

    strs.forEach((str) => {
        const key = orderString(str);
        if (!anagramsMap.has(key)) {
            anagramsMap.set(key, []);
        }
        anagramsMap.get(key)!.push(str);
    });
    return Array.from(anagramsMap.values());
}