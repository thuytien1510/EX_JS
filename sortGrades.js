// student, grade lll ten va diem cua hs
// ham sap xep
const sortGrades = (student, grade) => {
    90 <= grade && grade <= 100 ? console.log(`${student} xep loai S`) :
    80 <= grade && grade < 90 ? console.log(`${student} xep loai A`) :
    70 <= grade && grade < 80 ? console.log(`${student} xep loai B`) :
    60 <= grade && grade < 70 ? console.log(`${student} xep loai C`) :
    50 <= grade && grade < 60 ? console.log(`${student} xep loai D`) :
    40 <= grade && grade < 50 ? console.log(`${student} xep loai E`) :
    0 <= grade && grade < 40 ? console.log(`Ban khong duoc len lop`) : console.log('Nhap sai diem')
}

sortGrades('Trang', 50)