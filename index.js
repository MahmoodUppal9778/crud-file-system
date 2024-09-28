const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/simple.txt`;
console.log(dirPath);
//fs.writeFileSync("simple.txt", "This is a simple text file")
fs.writeFileSync(filePath, "This is a simple text file")