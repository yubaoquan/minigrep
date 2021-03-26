/**
 * 动物收容所
 * https://leetcode-cn.com/problems/animal-shelter-lcci/
 */

export class AnimalShelf {
  dogs: number[][] = [];

  cats: number[][] = [];

  enqueue(animal: number[]): void {
    if (animal[1] === 0) this.cats.unshift(animal);
    if (animal[1] === 1) this.dogs.unshift(animal);
  }

  dequeueAny(): number[] {
    const hasCat = !!this.cats.length;
    const hasDog = !!this.dogs.length;
    if (hasCat && hasDog) {
      const cat = this.cats[this.cats.length - 1];
      const dog = this.dogs[this.dogs.length - 1];
      return cat[0] < dog[0] ? this.cats.pop()! : this.dogs.pop()!;
    }
    return this.dogs.pop() || this.cats.pop() || [-1, -1];
  }

  dequeueDog(): number[] {
    return this.dogs.length ? this.dogs.pop()! : [-1, -1];
  }

  dequeueCat(): number[] {
    return this.cats.length ? this.cats.pop()! : [-1, -1];
  }
}
