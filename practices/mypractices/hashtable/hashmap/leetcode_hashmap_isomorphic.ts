function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const mapST = new Map<string, string>();
    const mapTS = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapST.has(charS)) {
            if (mapST.get(charS) !== charT) {
                return false;
            }
        } else {
            mapST.set(charS, charT);
        }

        if (mapTS.has(charT)) {
            if (mapTS.get(charT) !== charS) {
                return false;
            }
        } else {
            mapTS.set(charT, charS);
        }
    }
    return true;
}

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('bbbaaaba', 'aaabbbba'));
console.log(isIsomorphic('badc', 'baba'));
