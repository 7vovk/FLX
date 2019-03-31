let evenOrOdd = +process.argv[2];
let evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
let sum = +process.argv[3] + evenOrOdd;
let obj = {[evenOrOdd % 2 === 0 ? "even" : "odd"]: +process.argv[2],
    [+process.argv[3] + +process.argv[2]]: +process.argv[3] + +process.argv[2]
};
obj[evenOrOddKey] = evenOrOdd;
obj[sum] = sum;
console.log(obj);