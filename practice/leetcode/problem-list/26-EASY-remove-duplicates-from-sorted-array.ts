function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0; // Si el array está vacío, no hay elementos únicos

    let i = 0; // Puntero lento (posición donde colocaremos valores únicos)

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) { 
            i++; // Mueve el puntero lento
            nums[i] = nums[j]; // Copia el nuevo valor único a su posición correcta
        }
    }

    return i + 1; // Cantidad de elementos únicos (índice es 0-based, por eso sumamos 1)
};