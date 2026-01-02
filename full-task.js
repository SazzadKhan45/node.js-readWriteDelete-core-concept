const fs = require("fs");

function folderFileRead() {
  // folder create
  fs.mkdir("myFolder2", (error) => {
    // catch error
    if (error) {
      console.log(error);
      return;
    }

    // create file & write file
    fs.writeFile(
      "./myFolder2/newFile.txt",
      "I love Kamona. She is my whife",
      (error) => {
        if (error) {
          console.log(error);
          return;
        }

        //
        fs.readFile("./myFolder2/newFile.txt", "utf8", (error, data) => {
          if (error) {
            console.log(error);
            return;
          }

          //   Read file
          console.log("File text :", data);
        });
      }
    );
  });
}

folderFileRead();
