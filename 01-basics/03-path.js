

const path = require('path');

const file_wo_path = path.basename(__filename);
console.log('filename without path:', file_wo_path);

const file_ext = path.extname(__filename);
console.log("My extension is:", file_ext);

const parts = path.parse(__filename);
console.log("My parts: ",parts)