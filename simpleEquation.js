//pt ax + b = c voi cac tham so a, b, c
//ham tinh ptb1
const simpleEquation = (a, b, c) => {
    (a === 0 && c - b === 0) ? console.log('Phuong trinh vo so nghiem') :
    (a === 0 && c - b !== 0 ) ? console.log('Phuong trinh vo nghiem') :
    console.log(`Phuong trinh co nghiem la x = ${(c - b) / a}`)
}

simpleEquation(-2, -9, -3)