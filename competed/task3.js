/*
    https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
 */

function dataReverse(data) {
    const result = []
    for (let i = data.length; i >= 0;  i = i - 8) {
        result.push(...data.slice(i, i + 8));
    }
    return result;
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]

console.log(dataReverse(data1))
console.log(dataReverse(data2))
