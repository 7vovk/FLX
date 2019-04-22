import { getId } from "./getId";

let rock = 1, paper = 2, scissors = 3, index = 0, count = 0;
let p1 = document.createElement('p'), p2 = document.createElement('p');

export function theGame(userMove){

    if (index < 3) {
        let p = 'p' + index;
        if (index === 1) {
            getId('gameInfo').appendChild(p1); p1.setAttribute('id', 'p1');
        } else {
            getId('gameInfo').appendChild(p2); p2.setAttribute('id', 'p2');
        }
        let move = Math.floor(Math.random() * 3) + 1;
        if (userMove === rock) {
            move === 3? move = 0 : false;
            if (move < rock) {
                getId(p).innerHTML = `Round ${index},  Rock vs. Scissors, You’ve WON!`;
                count++;
            } else {
                getId(p).innerHTML = `Round ${index},  Rock vs. Paper, You’ve LOST!`;
            }
        } else if (userMove === paper) {
            if (move < paper) {
                getId(p).innerHTML = `Round ${index},  Paper vs. Rock, You’ve WON!`;
                count++;
            } else {
                getId(p).innerHTML = `Round ${index}, Paper  vs. Scissors, You’ve LOST!`;
            }
        } else if (userMove === scissors) {
            move === 1 ? move = 4 : false;
            if (move < scissors) {
                getId(p).innerHTML = `Round ${index},  Scissors vs. Rock, You’ve LOST!`;
            } else {
                getId(p).innerHTML = `Round ${index}, Scissors  vs. Paper, You’ve WON!`;
                count++;
            }
        }
    } else {
        if (count >= 2) {
            getId('gameInfo').innerHTML = `Game is finished. You've  WON!`;
        } else {
            getId('gameInfo').innerHTML = `Game is finished. You've  LOST!`;
        }
    }
    index++;
}

export function events(){

    getId('rock').addEventListener('click', () => {
        theGame(rock);
    });

    getId('paper').addEventListener('click', () => {
        theGame(paper);
    });

    getId('scissors').addEventListener('click', () => {
        theGame(scissors);
    });

    getId('reset').addEventListener("click", () => {
        index = 1;
        count = 0;
        getId('gameInfo').innerHTML = '';
    });
}