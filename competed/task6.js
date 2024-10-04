/*
    https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript
 */

function strCount(obj){
    let count = 0;
    Object.values(obj).forEach(value => {
        if (typeof (value) === 'string') {
            count++;
        } else if (typeof (value) === "object" && value !== null) {
            count += strCount(value);
        } else if (Array.isArray(value)) {
            count += value.filter(value => typeof value === 'string').length;
        }
    });
    return count;
}

console.log(strCount({
    first:  "1",
    second: "2",
    third:  false,
    fourth: ["anytime",2,3,4],
    fifth:  null,
    sixth:  undefined,
    seventh:{}
}))
