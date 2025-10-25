function myAtoi(s: string): number {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    let i = 0;
    const n = s.length;

    // 1. Saltar espacios en blanco al principio
    while (i < n && s[i] === ' ') {
        i++;
    }

    // 2. Verificar si hay signo
    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Leer los dígitos
    let result = 0;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = Number(s[i]);

        // 4. Verificar desborde antes de agregar el dígito
        if (
            result > Math.floor(INT_MAX / 10) ||
            (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
        ) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
}
