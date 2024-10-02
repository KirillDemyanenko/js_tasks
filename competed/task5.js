/*
    https://www.codewars.com/kata/5a2cb4bff28b820c33000082/train/javascript
 */
const ageTable = {
    'firstSonAge': 14,
    'secondSonAge': 9,
    'thirdSonAge': 8
}

function whoseBicycle(diary1, diary2, diary3) {
    const first = Object.values(diary1).reduce((a, b) => a + b, 0);
    const second = Object.values(diary2).reduce((a, b) => a + b, 0);
    const third = Object.values(diary3).reduce((a, b) => a + b, 0);
    if (first === second) {

    } else {
        if (Math.max(first, second, third) === third) {
            return 'I need to buy a bicycle for my third son.'
        } else if (Math.max(first, second, third) === second) {
            return 'I need to buy a bicycle for my second son.'
        } else {
            return 'I need to buy a bicycle for my first son.'
        }
    }
}

console.log(whoseBicycle(
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {
        'algebra': 8,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {
        'algebra': 6,
        'history': 5,
        'physics': 5,
        'geography': 9,
        'chemistry': 10
    }
))
