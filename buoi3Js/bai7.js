const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
// mang name
const arrayName = characters.map(({name}) => name)
console.log(arrayName)

// mang height
const arrayHeight = characters.map(({height}) => height)
console.log(arrayHeight)

// find height<100
const heightLessThan100 = characters.filter(({height}) => height < 100)
console.log(heightLessThan100)

// find mass<100
const massGreaterThan100 = characters.filter(({mass}) => mass > 100)
console.log(massGreaterThan100)

// Sap xep
//theo name
const sortByName = characters.sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1)
console.log(sortByName)

//theo mass
const sortByMass = characters.sort((a, b) => a.mass - b.mass )
console.log(sortByMass)

//theo height
const sortByHeight = characters.sort((a, b) => a.height - b.height )
console.log(sortByHeight)

//theo gender
const sortByGender = characters.sort((a, b) => a.gender > b.gender ? 1 : -1)
console.log(sortByGender)