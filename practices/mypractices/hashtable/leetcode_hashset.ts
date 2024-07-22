class MyHashSet {
    private size: number;
    private buckets: number[][];

    constructor() {
        this.size = 1000;
        this.buckets = Array.from({ length: this.size }, () => []);
    }

    private hash(key: number): number {
        return key % this.size;
    }

    add(key: number): void {
        const hashKey = this.hash(key);
        if (!this.buckets[hashKey].includes(key)) {
            this.buckets[hashKey].push(key);
        }
    }

    contains(key: number): boolean {
        const hashKey = this.hash(key);
        return this.buckets[hashKey].includes(key);
    }

    remove(key: number): void {
        const hashKey = this.hash(key);
        const index = this.buckets[hashKey].indexOf(key);
        if (index !== -1) {
            this.buckets[hashKey].splice(index, 1);
        }
    }
}

const hashSet = new MyHashSet();
hashSet.add(10);
hashSet.add(100);
hashSet.add(1000);
hashSet.add(1100);
hashSet.add(2200);
hashSet.contains(10);
hashSet.contains(1100);
hashSet.contains(30000);
hashSet.remove(30000);
hashSet.remove(10);
hashSet.contains(10);
console.log(hashSet);
