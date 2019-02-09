let play = confirm('Do you want to play a game?'), number, guess, firstAttempt = 10, secondAttempt, thirdAttempt,
    maxNumber = 5, continueGame, prize = 0, attemptValue;

if (play) {

    newGame:
        while (play) {
            secondAttempt = Math.floor(firstAttempt / 2);
            thirdAttempt = Math.floor(secondAttempt / 2);
            number = Math.floor(Math.random() * (maxNumber - 0) + 0);
            for (let i = 3; i > 0; i--) {
                if (i === 3) {
                    attemptValue = firstAttempt;
                } else if (i === 2) {
                    attemptValue = secondAttempt;
                } else {
                    attemptValue = thirdAttempt;
                }
                guess = +prompt('Enter a number from 0 to ' + maxNumber + '\nAttempts left: ' + i + '\nTotal prize: ' +
                    prize + '$' + '\nPossible prize on current attempt: ' + attemptValue + '$', '');

                if (guess === number && i === 3 && guess !== null) {
                    continueGame = confirm('Congratulation! \nYour prize is: ' + firstAttempt + '$' +
                        '\nDo you want to continue?');
                    prize += firstAttempt;
                    if (continueGame) {
                        firstAttempt = 3 * firstAttempt;
                        maxNumber = maxNumber * 2;
                        continue newGame;
                    }
                    break;
                } else if (guess === number && i === 2 && guess !== null) {
                    continueGame = confirm('Congratulation! \nYour prize is: ' + secondAttempt + '$' +
                        '\nDo you want to continue?');
                    prize += secondAttempt;
                    if (continueGame) {
                        firstAttempt = 3 * firstAttempt;
                        maxNumber = maxNumber * 2;
                        continue newGame;
                    }
                    break;
                } else if (guess === number && i === 1 && guess !== null) {
                    continueGame = confirm('Congratulation! \nYour prize is: ' + thirdAttempt + '$' +
                        '\nDo you want to continue?');
                    prize += thirdAttempt;
                    if (continueGame) {
                        firstAttempt = 3 * firstAttempt;
                        maxNumber = maxNumber * 2;
                        continue newGame;
                    }
                    break;
                }
                continue;
            }
            alert('Thank you for a game. Your prize is: ' + prize + '$');
            break;
        }
} else {
    alert('You did not become a millionaire, but can.');
}