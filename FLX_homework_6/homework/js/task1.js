let a = prompt('Enter first value', ''),
    b = prompt('Enter second value', ''),
    c = prompt('Enter third value', '');

if (isNaN(a) || isNaN(b) || isNaN(c) || a === '' || b === '' || c === '' ||
    a === null || b === null || c === null || a === '0') {
    alert('Invalid input data');
} else {
    let D = b * b - 4 * a * c;

    if (D === 0) {
        let x = -b / 2 * a;
        alert('x = ' + x);

    } else if (D < 0) {
        alert('No solution');

    } else {
        let Discr = Math.sqrt(D);

        let x1 = (-b - Discr) / (2 * a);
        let x2 = (-b + Discr) / (2 * a);
        alert('x1 = ' + (parseInt(x1 * 100))/100 + '\nx2 = ' + (parseInt(x2 * 100))/100);
    }
}