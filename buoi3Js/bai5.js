const data = require("./data.json");

//bai 1
const arrNew = data.reduce((preValue, currentValue) => {
    preValue.push(`${currentValue.first_name} ${currentValue.last_name}`)
    return preValue
}, [])
console.log(arrNew)

//bai 2
const result = data.reduce(
    (preValue, currentValue) => {
        if (currentValue.age < 40 && currentValue.gender === "Male") {
            preValue.push(currentValue)
        }
        return preValue
    }, [])

console.log(result)

// bai 3 giong bai 1
//bai 4
const toCamelCase = data.reduce((preValue, currentValue) => {
    preValue.push({
        "id": currentValue.id,
        "fistName": currentValue.first_name,
        "lastName": currentValue.last_name,
        "email": currentValue.email,
        "gender": currentValue.gender,
        "age": currentValue.age,
        "salary": currentValue.salary
    })
    return preValue
}, [])
console.log(toCamelCase)