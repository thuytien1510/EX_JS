const place = [
    {
        "address": "Quang Thai",
        "district": "Quang Dien",
        "province": "Thua Thien Hue",
        "city": "Hue"
    }
]

place.forEach(({ address, district, province, city }) => {
    console.log(`${address}, ${district}, ${province}, ${city}`)
}) 