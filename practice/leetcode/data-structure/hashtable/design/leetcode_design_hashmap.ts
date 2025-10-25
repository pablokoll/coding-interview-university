class MyHashMap {
    private size: number;
    private buckets: Map<number, number>[];

    constructor() {
        this.size = 1000;
        this.buckets = Array.from({ length: this.size }, () => new Map<number, number>());
    }

    private hash(key: number): number {
        // Función hash simple: módulo del tamaño del array.
        return key % this.size;
    }

    public put(key: number, value: number): void {
        const hashKey = this.hash(key);
        // Obtiene el bucket correspondiente.
        const bucket = this.buckets[hashKey];
        // Si el bucket contiene la clave, actualiza el valor.
        if (bucket.has(key)) {
            bucket.set(key, value);
        } else {
            // Si la clave no está en el bucket, la añade.
            bucket.set(key, value);
        }
    }

    public get(key: number): number {
        const hashKey = this.hash(key);
        // Obtiene el bucket correspondiente.
        const bucket = this.buckets[hashKey];
        // Retorna el valor asociado a la clave, o -1 si no se encuentra.
        return bucket.has(key) ? bucket.get(key)! : -1;
    }

    public remove(key: number): void {
        const hashKey = this.hash(key);
        // Obtiene el bucket correspondiente.
        const bucket = this.buckets[hashKey];
        // Elimina la clave y su valor si existe en el bucket.
        bucket.delete(key);
    }
}

// Ejemplo de uso:
const myHashMap = new MyHashMap();
myHashMap.put(1, 1);          // El mapa ahora es [[1,1]]
myHashMap.put(2, 2);          // El mapa ahora es [[1,1], [2,2]]
console.log(myHashMap.get(1)); // Devuelve 1
console.log(myHashMap.get(3)); // Devuelve -1
myHashMap.put(2, 1);          // El mapa ahora es [[1,1], [2,1]] (actualiza el valor existente)
console.log(myHashMap.get(2)); // Devuelve 1
myHashMap.remove(2);         // El mapa ahora es [[1,1]]
console.log(myHashMap.get(2)); // Devuelve -1 (clave eliminada)
console.log(myHashMap); // Devuelve -1 (clave eliminada)
