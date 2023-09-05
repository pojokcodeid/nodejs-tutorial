import fs from "fs";

export const showData = () => {
  const data = fs.readFileSync("./data/data.json", "utf-8");
  console.log(JSON.parse(data));
};
