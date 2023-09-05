import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { showData } from "./list/list.js";
import { inputData } from "./input/input.js";
import { editData } from "./edit/edit.js";
import { deleteData } from "./delete/delete.js";

export const pilihan = async () => {
  const rl = readline.createInterface({ input, output });
  const pilih = await rl.question(
    "Masukan Pilihan \n 0=> list, \n 1=> input, \n 2=> edit, \n 3=> delete, \n :"
  );
  rl.close();
  if (pilih == 0) {
    showData();
  } else if (pilih == 1) {
    inputData();
  } else if (pilih == 2) {
    editData();
  } else if (pilih == 3) {
    deleteData();
  } else {
    console.log("pilihan tidak ada");
  }
};
