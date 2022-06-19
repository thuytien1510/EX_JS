//nhap du lieu
let team1 = [96, 108, 200]
let team2 = [100, 90, 110]
//ham tinh diem trung binh 
function average(team) {
    let total = 0;
    team.forEach(function(item) {
        total += item;
    });

    return total / 3;
}
//tim doi chien thang dk: average > 100 
let result = '';
if(average(team1) < 100 && average(team2) < 100){
    result = 'Khong co doi chien thang';
}
else {
   result = average(team1) > average(team2) ? 'Team Dolphins win' :  
   average(team1) < average(team2) ? 'Team Koalas win' : 'Team Dolphins and Koalas draw' 
}
console.log(result)