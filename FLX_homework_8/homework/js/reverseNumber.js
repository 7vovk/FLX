function reverseNumber(number) {
    const reversed = number.toString().split('').reverse().join('');
    return Math.sign(number) * parseInt(reversed);
}
reverseNumber(-1357);