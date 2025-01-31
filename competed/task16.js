/*
    https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript
 */

function roundToNext5(n){
    if (n % 5 === 0) {
        return n;
    } else {
        return Math.floor(n / 5) * 5 + 5;
    }
}

console.log(roundToNext5(2));
console.log(roundToNext5(7));
