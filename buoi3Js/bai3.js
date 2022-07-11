const data = require('../buoi3Js/data.json')

const arrDataNew = data.map((item) => `${item.first_name} ${item.last_name}`
)
console.log(arrDataNew)