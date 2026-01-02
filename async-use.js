const fs = require("fs");

//
const folderWriteRead = async () => {
  try {
    // folder create
    fs.mkdir("myFolder3", (error) => {
      // Error find
      if (error) {
        console.log(error);
        return;
      }

      //  Create & write files
      fs.writeFile(
        "./myFolder3/newFile.txt",
        "This is file write of async function use",
        (error) => {
          if (error) {
            console.log("Error", error);
          }
        }
      );

      //   Read file
      fs.readFile("./myFolder3/newFile.txt", "utf8", (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(data);
      });
    });
    // catch error block
  } catch (error) {
    console.log("Error", error.message);
  }
};

folderWriteRead();
