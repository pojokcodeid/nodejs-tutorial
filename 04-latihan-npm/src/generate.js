import fs from "fs";

export const writeFile = (path, data) => {
  fs.writeFileSync(path, data);
};
