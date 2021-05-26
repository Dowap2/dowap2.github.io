function getData() {
  return new Promise(function(resolve, reject) {
    var data = 1;
    if (typeof data == "number") {
      resolve(data);
    } else {
      reject(new Error("Data is not Number"));
    }
  });
}

getData()
  .then(function(resolvedData) {
    console.log(resolvedData);
  })
  .catch(function(err) {
    console.log(err);
  });

getData();

const Promise1 = Promise.resolve("first");
const Promise2 = "second";
const Promise3 = new Promise(resolve => {
  resolve("third");
});

Promise.all([Promise1, Promise2, Promise3]).then(([first, second, third]) => {
  console.log(first, second, third);
});
