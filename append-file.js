const fs = require("fs");

//
fs.appendFile("./output/test.txt", "\nNew Line added", (err) => {
  if (err) throw err;
  console.log("Text Added");
});
