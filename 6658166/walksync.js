// List all files in a directory in Node.js recursively in a synchronous fashion
var fs =require('fs');
var path =require('path');
var paths = [];
var getAllFiles = dir =>{
  // console.log(fs.readdirSync(dir))
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file);
    const isDirectory = fs.statSync(name).isDirectory();
    // console.log(name, isDirectory);
    if(!isDirectory)
    paths.push(name);
    return isDirectory ? [...files, getAllFiles(name)] : [...files, name];
  }, []);
  
}
(getAllFiles('issues'));

console.log(paths)