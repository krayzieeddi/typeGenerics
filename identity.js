function identity(value) {
    return value;
}
var num = identity(5); //  type: number
var str = identity("hi"); //  type: string
console.log(num);
console.log(str);
function reverseArray(thing) {
    var result = thing.reverse();
    return result;
}
var reverse = reverseArray([1, 2, 3]);
console.log(reverse);
function filterArray(arr, x) {
    return arr.filter(x);
}
var numbers = [1, 2, 3, 4];
var evenNumbers = filterArray(numbers, function (x) { return x % 2 === 0; });
console.log(evenNumbers); // Output: [2, 4]
function mapObject(obj, mapper) {
    var result = {}; // Initialize result object
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) { // Check if key belongs to the object itself
            var value = obj[key];
            result[key] = mapper(value, key); // Call the mapper function and store the result
        }
    }
    return result; // Type assertion to ensure the correct return type
}
var thing = mapObject({ a: 1, b: 2 }, function (x) { return x.toString(); });
console.log(thing);
