import { createData } from "../utils/process.js";
import { writeData } from "../utils/readline.js";
import { validasi } from "../utils/validasi.js";

export const inputData = async () => {
  const data = await writeData();
  if (validasi(data.nama, data.email, data.alamat)) {
    createData(data);
  } else {
    console.log("Data gagal disimpan");
  }
};
