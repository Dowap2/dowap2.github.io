const foo = { a: 1, b: 2 };
const bar = { a: 1, b: 2 };

console.log(JSON.stringify(foo));
console.log(JSON.stringify(bar));
console.log(JSON.stringify(foo) === JSON.stringify(bar));
