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
