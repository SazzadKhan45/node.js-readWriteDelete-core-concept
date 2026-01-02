const fs = require("fs");

//
fs.mkdir("deleteFolder", (err) => {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.log("Folder create ");
});
