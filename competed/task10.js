/*
    https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
 */

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (Math.abs(num) % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(37))
console.log(isPrime(5))
