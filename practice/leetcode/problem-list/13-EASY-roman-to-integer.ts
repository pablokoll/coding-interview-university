function romanToInt(s: string): number {
    let romanLetters = s.split("")
    const romanValues = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    }

    let total = 0
    let skip: number | null = null
    romanLetters.forEach((letter, i, arr) => {
        if(skip === i) {
            skip = null
            return
        }
        let combination = letter + arr[i+1]
        if(romanValues[combination]) {
            total += romanValues[combination]
            skip = i + 1
        } else {
            total += romanValues[letter]
        }
    })
    return total
};