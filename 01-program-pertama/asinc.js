const contohFunction = () => {
  return Promise.resolve("Hello World");
};

const out = await contohFunction();
console.log(out);
