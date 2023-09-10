import http from "http";
import { getConnection } from "./utils/db.js";

let myConn = await getConnection();
let message = "Not Connected";
if (myConn) {
  message = "Connected";
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Status koneksi adalah : " + message + "</h1>");
  res.end();
});

server.listen(3001, () => {
  console.log("Server running http://127.0.0.1:3001/");
});
