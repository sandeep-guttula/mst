var fs = require('fs');
fs.appendFile('myfile2.txt', 'Mongo,Express,Angular,Node', function (err) {
if (err) throw err;
console.log('Saved!');
});
