import fs from "fs";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export const deleteData = async () => {
  const rl = readline.createInterface({ input, output });
  const getid = await rl.question("Masukan id: ");
  rl.close();
  const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
  let result = data.find((item) => item.id == getid);
  if (!result) {
    console.log("Data tidak ditemukan");
  } else {
    console.log("data akan diubah : ", result);
    let index = data.findIndex((item) => item.id == getid);
    data.splice(index, 1);
    const jsonString = JSON.stringify(data);
    fs.writeFile("./data/data.json", jsonString, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Data berhasil dihapus");
    });
  }
};
