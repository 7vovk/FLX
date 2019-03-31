let arg1 = process.argv[2];
let arg2 = process.argv[3];

import defaults from './modules_default_export_math';

console.log(defaults.PI);
console.log(defaults.sqrt(+arg1));
console.log(defaults.square(+arg2));