//cho a, b, op lll 2 so va phep tinh can thuc hien
//ham tinh toan
const caculation = (a, b, op) => {
    op === 'add' ? console.log(`${a} + ${b} = ${a + b}`) : 
    op === 'subtract' ? console.log(`${a} - ${b} = ${a - b}`) :
    op === 'multiply' ? console.log(`${a} * ${b} = ${a * b}`) :
    op === 'divide' ? console.log(`${a} / ${b} = ${a / b}`) :
    op === 'modulus' ? console.log(`${a} % ${b} = ${a % b}`) : console.log('Khong co phep tinh nay')
}

caculation(78, 97, 'subtract') 