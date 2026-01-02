const fs = require("fs");

//
fs.writeFile(
  "./output/test.txt",
  "This first time create file to node.js",
  (error) => {
    if (error) {
      console.log("Error", error.message);
      return;
    }
    console.log("File create successfully");
  }
);
