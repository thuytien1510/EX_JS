const data = require("./data.json");

// theo first name
const sortByFirstName = data.sort(function(a, b){
    return a.first_name.toUpperCase() > b.first_name.toUpperCase() ? 1 : -1
})
console.log(sortByFirstName)

// theo salary
const sortBySalary = data.sort(function(a, b){
    return a.salary - b.salary
})
console.log(sortBySalary)

