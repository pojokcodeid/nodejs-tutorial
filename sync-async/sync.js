let getData = (id) => {
  if (id === 1) {
    return (data = {
      nama: "Pojok Code",
      umur: 20,
    });
  } else {
    return (data = {
      nama: "Example",
      umur: 10,
    });
  }
};

console.log(getData(1));
console.log(getData(2));
console.log("Hello World");
