const randomString = 'oueendnsadnsad'
const countVowels = (str) => {
    let count = 0
    for (let x in str) {
        if (str[x] == 'o' || str[x] == 'a' || str[x] == 'i' || str[x] == 'u' || str[x] == 'e') {
            count += 1;
        }
    }
    return count;
}


console.log(countVowels(randomString))