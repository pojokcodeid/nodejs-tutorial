// import fs from "fs";
// fs.readFile("file.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// import url from "url";

// let adr = "http://localhost:8080/default.htm?year=2017&month=february";
// let q = url.parse(adr, true);
// console.info(q.host);
// console.info(q.pathname);
// console.log(q.query);
// console.log(q.search);

// import os from "os";

// console.info(os.platform());
// console.info(os.homedir());
// console.info(os.hostname());
// console.table(os.cpus());

// import path from "path";

// let filePath = "c:/nodejs/02-modul/file.txt";
// console.info(path.basename(filePath));
// console.info(path.dirname(filePath));
// console.info(path.extname(filePath));
// console.info(path.parse(filePath).base);

import querystring from "querystring";

let obj = {
  name: "Pojok Code",
  age: 20,
};

obj.year = 2017;

const qr = querystring.stringify(obj);
console.log(qr);
