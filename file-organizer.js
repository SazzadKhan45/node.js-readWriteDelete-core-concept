const fs = require("fs");
const path = require("path");

//
const sourceDir = path.join(__dirname, "output", "messy-files");
const organizerDir = path.join(__dirname, "output", "organized");

// file category
const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};

// test files
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

// function create folder & file create
function initializeDirectories() {
  // Messy directories file create
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });

    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
    });
  }
  console.log("Messy directories files are created !!!");

  // organizerDir file create
  if (!fs.existsSync(organizerDir)) {
    fs.mkdirSync(organizerDir, { recursive: true });
  }
  //
  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(organizerDir, category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });
}

// getCategory file function
function getCategory() {
  const ext = path.extname(fileName).toLowerCase();
  // ".pdf", ".jpg"
  // [images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"]],
  for (const [category, extensions] of Object.keys(categories)) {
    if (extensions.includes(ext)) {
      return;
    }
  }
  return "others";
}

// fileOrganized function
function organizedFiles() {
  console.log("file organizer \n");
  console.log("source: ", sourceDir);
  console.log("Destination: ", organizedDir);
  console.log("\n" + "-".repeat(50) + "\n");

  // check no files
  const files = fs.readFileSync(sourceDir);
  if (files.length === 0) {
    console.log("No files found!!!");
    return;
  }

  console.log(`found ${files.length} files to organize \n`);

  //
  const stats = {
    total: 0,
    byCategory: {},
  };
  //
  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      return;
    }
    //
    const category = getCategory(file);
    const desDir = path.join(organizerDir, category);
    const desPath = path.join(desDir, file);

    fs.copyFileSync(sourcePath, desPath);

    stats.total++;
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
    //
    console.log(`${file}`);
    console.log(`${category}`);
    console.log(`${stat.size}`);
  });
}

// function call
function showHelp() {
  console.log(`
        file organizer - usage:

        commands: 
        init - create files
        organize - organize files into categories

        example:
        node file-organizer init
        node file-organizer organize
        `);
}

const command = process.argv[2];

switch (command) {
  case "init":
    initializeDirectories();
    break;
  case "organize":
    organizeFiles();
    break;
  default:
    showHelp();
    break;
}
