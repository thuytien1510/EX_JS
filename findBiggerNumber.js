//cho a, b la 2 so duoc so sanh
//ham so sanh
const biggerNumber = (a, b) => {
    a > b ? console.log(`${a} la so lon nhat`) : 
    a < b ?  console.log(`${b} la so lon nhat`) : console.log('hai so bang nhau')
}
biggerNumber(9.5, 7.9)