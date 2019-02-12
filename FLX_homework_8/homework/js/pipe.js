function pipe(sum) {
    for(let i=1; i<arguments.length; i++) {
        sum = arguments[i](sum);
    }
    return sum;
}
function addOne(one) {
    return one + 1;
}
pipe(1, addOne, addOne);