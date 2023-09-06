import http from "http";
import {
  createData,
  deleteData,
  getById,
  readData,
  updateData,
} from "./data.js";

let db = [];

async function bodyParser(request) {
  return new Promise((resolve, reject) => {
    let totalChunked = "";
    request
      .on("error", (err) => {
        console.error(err);
        reject();
      })
      .on("data", (chunk) => {
        totalChunked += chunk;
      })
      .on("end", () => {
        request.body = JSON.parse(totalChunked);
        resolve();
      });
  });
}
async function postHandler(request, response) {
  try {
    await bodyParser(request);

    // db.push(request.body);
    let data = createData(request.body);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(data));
    response.end();
  } catch (err) {
    response.writeHead(400, { "Content-type": "text/plain" });
    response.write("Invalid body data was provided", err.message);
    response.end();
  }
}
const getPosts = (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify(readData()));
  response.end();
};

const getPostsId = (request, response) => {
  try {
    let url = request.url;

    let idQuery = url.split("?")[1];
    let idKey = idQuery.split("=")[0];
    let idValue = idQuery.split("=")[1];
    if (idKey === "id" && getById(idValue)) {
      let data = getById(idValue);
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(data));
      response.end();
    } else {
      response.writeHead(400, { "Content-type": "text/plain" });
      response.write("Invalid Query");
      response.end();
    }
  } catch (err) {
    response.writeHead(400, { "Content-type": "text/plain" });
    response.write("Invalid body data was provided", err.message);
    response.end();
  }
};

async function putPosts(request, response) {
  try {
    let url = request.url;

    let idQuery = url.split("?")[1];
    let idKey = idQuery.split("=")[0];
    let idValue = idQuery.split("=")[1];

    if (idKey === "id" && getById(idValue)) {
      await bodyParser(request);
      // db[idValue - 1] = request.body;
      updateData(idValue, request.body);
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(request.body));
      response.end();
    } else {
      response.writeHead(400, { "Content-type": "text/plain" });
      response.write("Invalid Query");
      response.end();
    }
  } catch (err) {
    response.writeHead(400, { "Content-type": "text/plain" });
    response.write("Invalid body data was provided", err.message);
    response.end();
  }
}
const deletePost = (request, response) => {
  let url = request.url;

  let idQuery = url.split("?")[1];
  let idKey = idQuery.split("=")[0];
  let idValue = idQuery.split("=")[1];

  if (idKey === "id" && getById(idValue)) {
    // db.splice(idValue - 1, 1);
    deleteData(idValue);
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write("Delete Success");
    response.end();
  } else {
    response.writeHead(400, { "Content-type": "text/plain" });
    response.write("Invalid Query");
    response.end();
  }
};
const invalidServer = (response) => {
  response.writeHead(400, { "Content-type": "text/plain" });
  response.write("Invalid URL");
  response.end();
};
const server = http.createServer((request, response) => {
  let url = request.url;
  let method = request.method;
  console.log(method, url);
  switch (method) {
    case "POST":
      if (url === "/post") {
        postHandler(request, response);
      } else {
        invalidServer(response);
      }
      break;

    case "GET":
      // /post?id=1 : GET
      if (url.match(/\/post\?id=([0-9]+)/)) {
        getPostsId(request, response);
      } else if (url === "/post") {
        getPosts(request, response);
      } else {
        invalidServer(response);
      }
      break;

    case "PUT":
      if (url.match(/\/post\?id=([0-9]+)/)) {
        putPosts(request, response);
      } else {
        invalidServer(response);
      }
      break;

    case "DELETE":
      if (url.match(/\/post\?id=([0-9]+)/)) {
        deletePost(request, response);
      } else {
        invalidServer(response);
      }
      break;

    default:
      response.writeHead(400, { "Content-type": "text/plain" });
      response.write("Invalid URL");
      response.end();
  }
});
server.listen(9000, () => {
  console.log(`Server running on Port 9000`);
});
