import http from "http";
import read from "./utils/read.js";

const home = await read("./src/page/home.html");
const about = await read("./src/page/about.html");
const personal = await read("./src/page/personal.html");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  let page = "";
  switch (url) {
    case "/":
      page = home;
      break;
    case "/about":
      page = about;
      break;
    case "/personal":
      page = personal;
      break;
    default:
      page = home;
      break;
  }
  res.write(page);
  res.end();
});

server.listen(3000, () => {
  console.log("Server berjalan http://localhost:3000");
});
