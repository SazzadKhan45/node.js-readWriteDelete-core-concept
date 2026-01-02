const fs = require("fs");

//
fs.rmdir("deleteFolder", (err) => {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.log("deleted folder");
});
