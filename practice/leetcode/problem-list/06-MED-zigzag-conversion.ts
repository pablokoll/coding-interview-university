function convert(s: string, numRows: number): string {
    if (numRows === 1 || s.length <= 1) return s;

    let currentRow = 0;
    let goingDown = false; // <-- importante
    const rows = Array(numRows).fill('');

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        rows[currentRow] += char;

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
}
