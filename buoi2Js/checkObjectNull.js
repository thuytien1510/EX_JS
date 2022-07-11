const a = {
    sfdsid: 1,
    name: 'Arun',
    age: 30
}

const isEmpty = a => {
    let result = Object.keys(a).length == 0 ? 'Object null' : 'Object not null'
    return result
}

console.log(isEmpty(a))