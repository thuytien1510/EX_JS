// su dung array methods
const reverseString = str => {
    return str.split("").reverse().join("")
}
console.log(reverseString("hello"))
// sd vong lap
function reverseString2(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString2("hello"))
