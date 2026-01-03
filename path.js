const path = require("path");

//
console.log("Current file info : \n");
console.log("fileNAme :", __filename);
console.log("FilePath : ", __dirname);

//
console.log("\n" + "-".repeat(50));

const filePath = "/sazzad/khan/next-level/doc-level.pdf";
console.log("analyzing path :", filePath, "\n");

console.log("Directory: ", path.dirname(filePath));
console.log("baseName : ", path.basename(filePath));
console.log("fileExt: ", path.extname(filePath));
console.log("fileName: ", path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(50));

const parsed = path.parse(filePath);
console.log("Parse : ", parsed);

console.log("\n" + "-".repeat(50));

console.log("formatePath: ", path.format(parsed));
