const data = require('../buoi3Js/data.json')

const result = data.filter(
    ({ age, gender }) => age < 40 && gender === "Male"
)

console.log(result)