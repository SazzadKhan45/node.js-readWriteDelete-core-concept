const os = require("os");

//
console.log("System info  \n");
console.log("-".repeat(50));
console.log("PlatFrom Details:-");
console.log("PlatForm", os.platform());
console.log("Architecture:", os.arch());
console.log("Os type : ", os.type());
console.log("Os Release :", os.release());
console.log("Hostname :", os.hostname());

// Cpu info
console.log("-".repeat(50));
console.log("\nCpu info :-");
const cpus = os.cpus();
console.log("CPU Model :", cpus[0].model);
console.log("Number of cores : ", cpus.length);
console.log("CPU speed : ", cpus[0].speed);

// RAM info
console.log("*".repeat(50));
console.log("RAM info :-");
const totalRAM = os.totalmem();
console.log("TotalRam :", (totalRAM / 1024 / 1024 / 1024).toFixed(2), "Gb");
const freeRam = os.freemem();
console.log("FreeRam :", (freeRam / 1024 / 1024 / 1024).toFixed(2), "Gb");
const useRam = totalRAM - freeRam;
console.log("useRam :", (useRam / 1024 / 1024 / 1024).toFixed(2), "Gb");

// Uptime server
console.log("*".repeat(50));
console.log("Server uptime info :-");

const upTime = os.uptime(); // seconds

const days = Math.floor(upTime / (24 * 60 * 60));
const hours = Math.floor((upTime % (24 * 60 * 60)) / (60 * 60));
const minutes = Math.floor((upTime % (60 * 60)) / 60);
const seconds = Math.floor(upTime % 60);

console.log(
  `Uptime: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
);
