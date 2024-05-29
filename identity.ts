// basic generic function that allows strict types by coder
// parameters is anything you want with explict data types along with it 
function identity<T>(value: T): T {
    return value;
  }

const num = identity<number>(5);   //  type: number
const str = identity<string>("hi"); //  type: string

console.log(num);
console.log(str);

// reverses the array with a single explict data type 
// parameter is an array 
function reverseArray<T>(thing: T[]): T[] {
  const result = thing.reverse();
    return result;
}

const reverse = reverseArray<number>([1,2,3]);
console.log(reverse);

// filers through an array with custom function coder wants
function filterArray<T>(arr: T[], x: (item: T) => boolean): T[] {
  return arr.filter(x);
}

const numbers = [1, 2, 3, 4];
const evenNumbers = filterArray<number>(numbers, (x) => x % 2 === 0);

console.log(evenNumbers); 

// turns a record or object with key to turn the original value to another data type of coder's choice
function mapObject<K extends string | number | symbol, V, U>(
    obj: Record<K, V>,
    mapper: (value: V, key: K) => U
  ): Record<K, U> {
    const result: Partial<Record<K, U>> = {}; 
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) { 
        const value = obj[key];
        result[key] = mapper(value, key as K); 
      }
    }
  
    return result as Record<K, U>; 
  }
  
const thing = mapObject({a: 1, b: 2}, x => x.toString())

console.log(thing)
