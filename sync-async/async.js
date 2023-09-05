const getData = (id, cb) => {
  if (id === 1) {
    setTimeout(() => {
      cb({ nama: "Pojok Code", umur: 20 });
    }, 3000);
  } else {
    setTimeout(() => {
      cb({ nama: "Example", umur: 10 });
    }, 1000);
  }
};

getData(1, (result) => {
  console.log(result);
});
getData(2, (result) => {
  console.log(result);
});
console.log("Hello World");
