console.log("hi");
function findUserAndCallBack(bye) {
  setTimeout(function() {
    console.log("bye");
    bye();
  }, 100);
}

findUserAndCallBack(function() {
  console.log("hi");
});
