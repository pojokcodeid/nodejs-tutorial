import fs from "fs";

export const createData = (data) => {
  if (!fs.existsSync("./data")) {
    fs.mkdirSync("./data");
  }
  if (!fs.existsSync("./data/data.json")) {
    fs.writeFileSync("./data/data.json", "[]");
  }
  let initialData = fs.readFileSync("./data/data.json", "utf-8");
  initialData = JSON.parse(initialData);
  initialData.push(data);
  const jsonString = JSON.stringify(initialData);
  fs.writeFile("./data/data.json", jsonString, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Data berhasil ditambahkan");
  });
};
