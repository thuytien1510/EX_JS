let colors = ["white", "blue", "yellow", "black", "red", "green"];

let data = []
data.push({
    "firstColor": colors[0],
    "secondColor": colors[1],
    "otherColors": `${colors.slice(2)}`
})
console.log(data)