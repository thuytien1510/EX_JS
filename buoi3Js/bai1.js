const data = require('../buoi3Js/data.json')

const arrNew = []

data.forEach(item => {
    const firstNameLastName = `${item.first_name} ${item.last_name}`
    arrNew.push(firstNameLastName)
})
console.log(arrNew)