let inputs = process.argv.slice(2);
let result = inputs.map((inputs) => inputs[0])
    .reduce((res, inputs) => res + inputs);
console.log(result);