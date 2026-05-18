function getAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log("Average of [1, 2, 3, 4, 5]: " + getAverage([1, 2, 3, 4, 5]));
console.log("Average of [10, 20, 30, 40, 50]: " + getAverage([10, 20, 30, 40, 50]));