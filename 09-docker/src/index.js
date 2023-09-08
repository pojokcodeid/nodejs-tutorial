import http from "http";
import { getConnection } from "./utils/db.js";
let myConn = await getConnection();
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello World</h1>");
  res.end();
});

server.listen(3001, () => {
  console.log("Server running at http://127.0.0.1:3001/");
});
