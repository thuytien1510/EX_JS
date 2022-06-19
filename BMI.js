//cho m la khoi luong, h la chieu cao
//ham tinh BMI
const BMI = (m, h) => m / h ** 2;
//ham so sanh voi name1, m1, h1, name2, m2, h2 lll ten,can nang va chieu cao cua nguoi 1 vaf 2
const higherBMI = (name1, m1, h1, name2, m2, h2) => {
    BMI(m1, h1) > BMI(m2, h2) ? console.log(`${name1} BMI is higher than ${name2}!`) : console.log(`${name2} BMI is higher than ${name1}!`)
}

higherBMI('Mark', 78, 169, 'John', 92, 195)