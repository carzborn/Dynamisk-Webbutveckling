const geo = require('./modules/geometry');

// console.log("geo", geo);

let radius = 4;

let area = geo.area(radius);

console.log("the area is: ", area);

let circumference = geo.circumference(radius);
console.log("the circumference is: ", circumference);