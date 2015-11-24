var fs = require('fs');

exports.provider = function(filePath){
var linesInFile = fs.readFileSync(filePath, "utf-8");
var rows = linesInFile.split("\r");
return rows;
};


