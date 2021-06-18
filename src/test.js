const foo = { a: 1, b: 2 };
const bar = { a: 1, b: 2 };
const clone = foo;

console.log(Object.is(foo, clone));
