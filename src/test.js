function basicFunc() {
  console.log(1);
}
function higherFunc(input) {
  console.log(2);
  return input;
}
const Execution = higherFunc(basicFunc);

Execution();
