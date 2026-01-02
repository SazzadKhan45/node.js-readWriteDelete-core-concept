const fs = require("fs");

//
fs.unlink("./output/test.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});
