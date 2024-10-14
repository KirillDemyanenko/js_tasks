/*
    https://www.codewars.com/kata/566d5e2e57d8fae53c00000c
 */

function getCard() {
    const style = {
        'B': {min: 1, max: 15, nums: 5},
        'I': {min: 16, max: 30, nums: 5},
        'N': {min: 31, max: 45, nums: 4},
        'G': {min: 46, max: 60, nums: 5},
        'O': {min: 61, max: 75, nums: 5}
    }
    const result = []
    for (let column of Object.keys(style)) {
        for (let i = 0; i < style[column].nums; i++) {
            let cell
            do {
                cell = column.concat(Math.floor(Math.random() * (style[column].max - style[column].min)) + style[column].min)
            } while (result.includes(cell))
            result.push(cell)
        }
    }
    return result
}

console.log(getCard())
