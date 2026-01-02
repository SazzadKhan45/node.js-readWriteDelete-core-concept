const fs = require("fs/promises");

//
async function readFile() {
  try {
    const data = await fs.readFile("./output/sample.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log("error", error.message);
  }
}

readFile();
