/*
    https://www.codewars.com/kata/57f625992f4d53c24200070e
 */

function bingo(ticket, win){
    let miniWins = 0;
    for (let t of ticket) {
        for (let sym of t[0]) {
            if (t[1] === sym.charCodeAt(0)) {
                miniWins++;
                break;
            }
        }
    }
    return miniWins >= win ? "Winner!" : "Loser!"
}
