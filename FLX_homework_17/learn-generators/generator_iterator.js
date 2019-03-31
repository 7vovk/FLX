function *factorial(number){
    let num = 1;
    for (let i = 1; i <= number; i++) {
        num *= i;
        yield num;
    }
}

for (let n of factorial(5)) {
    console.log(n)
}