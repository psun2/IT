var numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
    numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3