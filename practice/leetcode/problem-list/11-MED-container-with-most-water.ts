function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculamos altura mínima entre las dos líneas
        const minHeight = Math.min(height[left], height[right]);

        // Calculamos el ancho entre los dos índices
        const width = right - left;

        // Calculamos el área y actualizamos el máximo si corresponde
        const currentArea = minHeight * width;
        maxWater = Math.max(maxWater, currentArea);

        // Movemos el puntero que tiene menor altura
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}
