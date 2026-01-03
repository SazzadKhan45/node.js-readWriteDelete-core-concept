const crypto = require("crypto");

// MD5 hashing
const md5Hash = crypto.createHash("md5").update("password123").digest("hex"); // not apply this process
console.log(`input : password123 | Output: ${md5Hash}`);

//sha256
const sha256 = crypto.createHash("sha256").update("password123").digest("hex");
console.log(sha256);

// hsa512
const sha512 = crypto.createHash("sha512").update("password123").digest("hex");
console.log("sha512 :", sha512);
