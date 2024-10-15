/*
    https://www.codewars.com/kata/59752e1f064d1261cb0000ec
 */

var whatTimeIsIt = function(angle) {
    if (angle === 0 || angle === 360) return "12:00";
    const hours = Math.floor(angle / 30) === 0 ? '12' : Math.floor(angle / 30);
    const minutes = Math.floor((angle / 0.5) % 60)
    return `${(hours).toString().padStart(2,'0')}:${(minutes).toString().padStart(2,'0')}`;
}

console.log(whatTimeIsIt(41.15992106157431))
console.log(whatTimeIsIt(45))
console.log(whatTimeIsIt(50))
console.log(whatTimeIsIt(270))
console.log(whatTimeIsIt(360))
