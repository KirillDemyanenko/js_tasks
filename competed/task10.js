/*
    https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
 */

function isPrime(num) {
    if (num === 0 || num === 1 || num === 4 || num < 0)  {
        return false;
    }
    if (num === 2 || num === 3) {
        return true
    }
    let div = 0
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            div++
        }
        if (num / i !== i) {
            div++
        }
    }
    return div === 2
}
