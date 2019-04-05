let getId = (id) => {
    return document.getElementById(id);
};
let rock = 1, paper = 2, scissors = 3, index = 1, count = 0;
let p1 = document.createElement('p'), p2 = document.createElement('p'), p3 = document.createElement('p');

let theGame = (userMove) => {
    if (index < 3) {
        let p1 = document.createElement('p'), p2 = document.createElement('p'), p3 = document.createElement('p');
        let p = 'p' + index;
        if (index === 1) {
            getId('gameInfo').appendChild(p1); p1.setAttribute('id', 'p1');
        } else if (index === 2) {
            getId('gameInfo').appendChild(p2); p2.setAttribute('id', 'p2');
        } else {
            getId('gameInfo').appendChild(p3); p3.setAttribute('id', 'p3');
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
};