person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}

function displayName({ first, last }) {
    return console.log(`${first} ${last}`)
}
displayName(person)
