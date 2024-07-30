function firstUniqChar(s: string): number {
    const hashMapChars = new Map<string, number>();

    let uniqueCharIndex = -1;
    for (let i = 0; i < s.length; i++) {
        let count = hashMapChars.get(s[i]) ?? 0;
        count++;
        hashMapChars.set(s[i], count);
    }

    console.log(hashMapChars)
    
    let index = 0;
    for (const value of hashMapChars.values()) {
        if (value === 1) {
            uniqueCharIndex = index;
            return uniqueCharIndex;
        } else {
            index++;
        }
    }
    return -1;
}

// console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('dddccdbba'));
