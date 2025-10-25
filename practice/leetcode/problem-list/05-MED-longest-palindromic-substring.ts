function longestPalindrome(s: string): string {
    if (s.length < 2) return s;

    let longest = "";

    function expandAroundCenter(left: number, right: number): string {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right); // ajustar límites al salir del while
    }

    for (let i = 0; i < s.length; i++) {
        // palíndromo impar
        let odd = expandAroundCenter(i, i);
        if (odd.length > longest.length) longest = odd;

        // palíndromo par
        let even = expandAroundCenter(i, i + 1);
        if (even.length > longest.length) longest = even;
    }

    return longest;
}


console.log(longestPalindrome("babad"))

/**
 * Excelente pregunta, Pablo. Vamos a destripar eso bien fino: ¿cómo sabe el código que "bab" sí es palíndromo y "babad" no?

La clave está en esta línea del while:

ts
Copy
Edit
while (left >= 0 && right < s.length && s[left] === s[right])
🧠 ¿Qué está haciendo ahí?
Está diciendo:

“Mientras no me haya salido del string y los caracteres a izquierda y derecha sean iguales, sigo expandiendo.”

📌 Pongámoslo con "babad" paso a paso:
Supongamos que estamos parados en el centro con i = 2 (el caracter "b" del medio), y llamamos a:

ts
Copy
Edit
expandAroundCenter(2, 2) // caso impar
left = 2, right = 2 → s[2] === s[2] → "b" === "b" ✅

Expando:

left = 1, right = 3 → s[1] === s[3] → "a" === "a" ✅

left = 0, right = 4 → s[0] === s[4] → "b" === "d" ❌

¡Ahí se corta! Porque "b" ≠ "d". El while termina y devolvemos:

ts
Copy
Edit
s.slice(left + 1, right) = s.slice(1, 4) = "bab"
🤔 ¿Y por qué no se considera "babad"?
Porque para que "babad" entero sea un palíndromo, tendría que pasar:

s[0] === s[4] → "b" === "d" ❌

Como eso falla, el while no puede expandir más allá de "bab" o "aba".

⚡ En resumen:
"bab" y "aba" son substrings simétricos dentro de "babad" (por eso son palíndromos).

"babad" no es simétrico completo, porque los extremos no coinciden: "b" ≠ "d".

¿Te gustaría que armemos una versión del código que te imprima paso a paso cómo se expande? O incluso podés probarlo en tu consola y loguear left, right, y los caracteres.
 */