import {
  createData,
  readData,
  updateData,
  deleteData,
  getById,
} from "./data.js";

function ltrim(string, character) {
  character = character || "";
  if (!character) {
    return string.trimStart();
  }

  while (string.startsWith(character)) {
    string = string.slice(character.length);
  }
  return string;
}

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
    let data = createData(request.body);
    let result = {};
    let code;
    if (data) {
      code = 201;
      result = {
        error: null,
        data: data,
      };
    } else {
      code = 400;
      result = {
        error: ["Process input gagal"],
        data: null,
      };
    }
    response.writeHead(code, { "Content-Type": "application/json" });
    response.write(JSON.stringify(result));
    response.end();
  } catch (err) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ errors: [err], data: null }));
    response.end();
  }
}

const getPosts = async (request, response) => {
  const data = readData();
  let result = {};
  let code;
  if (data) {
    code = 200;
    result = {
      error: null,
      data: data,
    };
  } else {
    code = 404;
    result = {
      error: ["Data tidak ditemukan"],
      data: null,
    };
  }
  response.writeHead(code, { "Content-Type": "application/json" });
  response.write(JSON.stringify(result));
  response.end();
};

const getPostsId = async (request, response) => {
  try {
    let url = ltrim(request.url, "/");
    let idValue = url.split("/")[1];
    if (getById(idValue)) {
      let data = getById(idValue);
      let result = {};
      let code;
      if (data) {
        code = 200;
        result = {
          error: null,
          data: data,
        };
      } else {
        code = 404;
        result = {
          error: ["Data tidak ditemukan"],
          data: null,
        };
      }
      response.writeHead(code, { "Content-Type": "application/json" });
      response.write(JSON.stringify(result));
      response.end();
    } else {
      response.writeHead(400, { "Content-Type": "application/json" });
      response.write(
        JSON.stringify({
          errors: ["Bad Request"],
          data: null,
        })
      );
      response.end();
    }
  } catch (err) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ errors: [err], data: null }));
    response.end();
  }
};

async function putPosts(request, response) {
  try {
    let url = ltrim(request.url, "/");
    let idValue = url.split("/")[1];
    if (getById(idValue)) {
      await bodyParser(request);
      let result = {};
      let code;
      const out = updateData(idValue, request.body);
      if (out) {
        code = 200;
        result = {
          error: null,
          data: out,
        };
      } else {
        code = 404;
        result = {
          error: ["Data tidak ditemukan"],
          data: null,
        };
      }
      response.writeHead(code, { "Content-Type": "application/json" });
      response.write(JSON.stringify(result));
      response.end();
    } else {
      response.writeHead(400, { "Content-Type": "application/json" });
      response.write(JSON.stringify({ errors: ["Bad Request"], data: null }));
      response.end();
    }
  } catch (err) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ errors: [err], data: null }));
    response.end();
  }
}

const invalidServer = (response) => {
  response.writeHead(400, { "Content-Type": "application/json" });
  response.write(JSON.stringify({ errors: ["Bad Request"], data: null }));
  response.end();
};

const deletePost = (request, response) => {
  let url = ltrim(request.url, "/");
  let idValue = url.split("/")[1];
  if (getById(idValue)) {
    let result = {};
    let code;
    if (deleteData(idValue)) {
      code = 200;
      result = {
        error: null,
        data: { id: idValue },
      };
    } else {
      code = 404;
      result = {
        error: ["Process delete gagal"],
        data: null,
      };
    }
    response.writeHead(code, { "Content-type": "application/json" });
    response.write(JSON.stringify(result));
    response.end();
  } else {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.write(
      JSON.stringify({
        errors: ["Bad Request"],
        data: null,
      })
    );
    response.end();
  }
};

export {
  postHandler,
  invalidServer,
  getPosts,
  getPostsId,
  putPosts,
  deletePost,
};
