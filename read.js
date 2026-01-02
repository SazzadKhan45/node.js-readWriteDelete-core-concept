const fs = require("fs");

fs.readFile("./output/sample.txt", "utf8", (error, data) => {
  if (error) {
    console.log("error", error.message);
    return;
  }
  console.log(data);
});
