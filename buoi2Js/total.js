// cach 1
const numbers = [15.5, 2.3, 1.1, 4.7];

const sum = numbers.reduce((total, number) => total + number, 0)

console.log(sum)
// cach 2

let arr = [1, 2, 3, 4];

let total1 = 0;

function getSum1(arr) {
    for (var i in arr) {
        total1 += arr[i];
    }
    return total1
}
console.log(getSum1(arr))

// cach 3

let total2 = 0;
function getSum2(arr) {
    for (var i of arr) {
        total2 += i;
    }
    return total2
}
console.log(getSum2(arr))

// cach 4

let total3 = 0;
function getSum3(arr) {
    arr.forEach(number => {
        total3 += number;
    })
    return total3
}
console.log(getSum3(arr))

