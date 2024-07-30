function firstUniqChar(s: string): number {
    const hashMapChars = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        let count = hashMapChars.get(s[i]) ?? 0;
        count++;
        hashMapChars.set(s[i], count);
    }

    for (const [key, value] of hashMapChars.entries()) {
        if (value === 1) {
            return s.indexOf(key);
        }
    }
    return -1;
}

// console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('dddccdbba'));
