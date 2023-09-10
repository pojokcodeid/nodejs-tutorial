import http from "http";
import {
  postHandler,
  invalidServer,
  getPosts,
  getPostsId,
  putPosts,
  deletePost,
} from "./controllers/process.js";

const server = http.createServer((request, response) => {
  let url = request.url;
  let method = request.method;
  console.log(url, method);
  switch (method) {
    case "POST":
      if (url === "/personals") {
        postHandler(request, response);
      } else {
        invalidServer(response);
      }
      break;
    case "GET":
      if (url.match(/\/personals\/([0-9]+)/)) {
        getPostsId(request, response);
      } else if (url === "/personals") {
        getPosts(request, response);
      } else {
        invalidServer(response);
      }
      break;
    case "PUT":
      if (url.match(/\/personals\/([0-9]+)/)) {
        putPosts(request, response);
      } else {
        invalidServer(response);
      }
      break;
    case "DELETE":
      if (url.match(/\/personals\/([0-9]+)/)) {
        deletePost(request, response);
      } else {
        invalidServer(response);
      }
      break;
    default:
      invalidServer(response);
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
