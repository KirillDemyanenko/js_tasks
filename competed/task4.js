/*
    https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/javascript
 */
function killer(suspectInfo, dead) {
    for (man of Object.keys(suspectInfo)) {
        let all = true
        dead.forEach(d => {all = all && suspectInfo[man].includes(d)})
        if (all) {
            return man
        }
    }
}

console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))
