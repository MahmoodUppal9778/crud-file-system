const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/simple.txt`;
console.log(dirPath);
//fs.writeFileSync("simple.txt", "This is a simple text file")
//fs.writeFileSync(filePath, "This is a simple text file");
/*
fs.readFile(filePath, 'utf8',(err, item)=>{
    console.log(item);
})
*/
/*
fs.appendFile(filePath, " this is the appending text", (err)=>{
    if(!err) console.log("file is updated")
});    
*/
/*
fs.rename(filePath,`${dirPath}/simpleRenamed.txt`, (err)=>{
    console.log("file name is updated");
});
*/
fs.unlinkSync(`${dirPath}/simpleRenamed.txt`);