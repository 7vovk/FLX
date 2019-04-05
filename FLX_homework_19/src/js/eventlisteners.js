getId('rock').addEventListener('click', () => {
    theGame(rock);
});
getId('paper').addEventListener('click', () => {
    theGame(paper);
});
getId('scissors').addEventListener('click', () => {
    theGame(scissors);
});
getId('reset').addEventListener('click', () => {
    index = 1;
    count = 0;
    getId('gameInfo').innerHTML = '';
});