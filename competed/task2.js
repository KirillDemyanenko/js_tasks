/*
* https://www.codewars.com/kata/56d6b7e43e8186c228000637/train/javascript
*/

function colourAssociation(array){
    const result = []

    for (const key of array) {
        const obj = {};
        obj[key[0]] = key[1];
        result.push(obj);
    }
    return result;
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))
