import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const nama = await rl.question("Masukan nama anda: ");
const email = await rl.question("Masukan email: ");
const alamat = await rl.question("Masukan alamat: ");

rl.close();

export const data = { nama, email, alamat };
