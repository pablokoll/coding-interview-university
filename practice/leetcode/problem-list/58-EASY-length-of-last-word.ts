function lengthOfLastWord(s: string): number {
    const str = s.trim();
    const strings = str.split(' ');
    return strings[strings.length - 1].length;
}

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('Today is a nice day'));
