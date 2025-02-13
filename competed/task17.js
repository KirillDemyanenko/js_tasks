/*
    https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript
 */

function titleCase(title, minorWords) {
    if (!title) {
        return '';
    }
    if (!minorWords) {
        minorWords = '';
    } else {
        minorWords = minorWords.toLowerCase().split(' ');
    }
    const words = title.split(" ");
    words[0] = words[0][0].toUpperCase() + words[0].slice(1).toLowerCase();
    for (let i = 1; i < words.length; i++) {
        if (!minorWords.includes(words.at(i).toLowerCase())) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        } else {
            words[i] = words[i].toLowerCase();
        }
    }
    return words.join(" ");
}


console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
