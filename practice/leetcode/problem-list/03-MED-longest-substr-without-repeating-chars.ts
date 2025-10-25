function lengthOfLongestSubstring(s: string): number {
    let seen = new Map<string, number>();
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Si ya vimos el char y está dentro de la ventana actual
        if (seen.has(char) && seen.get(char)! >= start) {
            start = seen.get(char)! + 1;
        }

        // Actualizamos la posición de este char
        seen.set(char, i);

        // Calculamos longitud actual de la ventana
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}


console.log(lengthOfLongestSubstring('bbtablud'));
