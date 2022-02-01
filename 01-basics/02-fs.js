
/* 
const fs = require('fs');

console.log("Before redir...");

fs.readdir('.', (err, files)  =>  {
console.log("content");
console.log(files);
});

console.log("after readdir...");
*/

/* */
const fs = require('fs').promises;

fs.readdir('.').then(files => {
    console.log("Content");
    console.log(files);
}).catch(e => {
    console.error(e);
});


fs.readFile('./data/lorem.txt', 'utf-8')
.then(data => {
    console.log(data);
});