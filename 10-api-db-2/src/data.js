import fs from "fs";

const createData = (data) => {
  if (!fs.existsSync("./data")) {
    fs.mkdirSync("./data");
  }
  if (!fs.existsSync("./data/data.json")) {
    fs.writeFileSync("./data/data.json", "[]");
  }
  let initialData = fs.readFileSync("./data/data.json", "utf-8");
  initialData = JSON.parse(initialData);
  let maxId = 0;
  if (initialData.length === 0) {
    maxId = 0;
  } else {
    maxId = Math.max(...initialData.map((item) => item.id));
  }
  const myData = {
    id: maxId + 1,
    ...data,
  };
  initialData.push(myData);
  let message = "";
  const jsonString = JSON.stringify(initialData);
  fs.writeFile("./data/data.json", jsonString, (err) => {
    if (err) {
      message = err;
    }
  });
  if (message === "") {
    return myData;
  } else {
    return null;
  }
};

const readData = () => {
  if (!fs.existsSync("./data")) {
    fs.mkdirSync("./data");
  }
  if (!fs.existsSync("./data/data.json")) {
    fs.writeFileSync("./data/data.json", "[]");
  }
  let initialData = fs.readFileSync("./data/data.json", "utf-8");
  initialData = JSON.parse(initialData);
  return initialData;
};

const updateData = (id, data) => {
  if (!fs.existsSync("./data")) {
    fs.mkdirSync("./data");
  }
  if (!fs.existsSync("./data/data.json")) {
    fs.writeFileSync("./data/data.json", "[]");
  }
  let initialData = fs.readFileSync("./data/data.json", "utf-8");
  initialData = JSON.parse(initialData);
  initialData = initialData.map((item) => {
    if (item.id == id) {
      return { ...item, ...data };
    }
    return item;
  });
  const jsonString = JSON.stringify(initialData);
  let message = "";
  fs.writeFile("./data/data.json", jsonString, (err) => {
    if (err) {
      message = err;
    }
  });
  if (message === "") {
    return { id, ...data };
  } else {
    return null;
  }
};

const deleteData = (id) => {
  if (!fs.existsSync("./data")) {
    fs.mkdirSync("./data");
  }
  if (!fs.existsSync("./data/data.json")) {
    fs.writeFileSync("./data/data.json", "[]");
  }
  let initialData = fs.readFileSync("./data/data.json", "utf-8");
  initialData = JSON.parse(initialData);
  initialData = initialData.filter((item) => item.id != id);
  const jsonString = JSON.stringify(initialData);
  let message = "";
  fs.writeFile("./data/data.json", jsonString, (err) => {
    if (err) {
      message = err;
    }
  });
  if (message === "") {
    return true;
  } else {
    return null;
  }
};

const getById = (id) => {
  if (!fs.existsSync("./data")) {
    fs.mkdirSync("./data");
  }
  if (!fs.existsSync("./data/data.json")) {
    fs.writeFileSync("./data/data.json", "[]");
  }
  let initialData = fs.readFileSync("./data/data.json", "utf-8");
  initialData = JSON.parse(initialData);
  let data = initialData.filter((item) => item.id == id);
  return data;
};

export { createData, readData, updateData, deleteData, getById };
