// 1 mile = 1.60934 km

function mileToKm(number){
    const kmNumber = number*1.60934;
    return kmNumber;
}

function kmtoMile(number){
    const MileNumber = number/1.60934;
    return MileNumber;
}

const kmOut = mileToKm(5);
const mileOut = kmtoMile(12);

console.log(kmOut);
console.log(mileOut);
