const geo = require('./modules/geometry');
const num = require('./modules/num');

// console.log("geo", geo);

let radius = 4;

let area = geo.area(radius);
let approx = num.roundWith1Decimal(area);
let approx2 = num.roundWith2Decimal(area);
let exact = num.round1(area, 5);

console.log(area);
console.log(approx2);
console.log(approx);
console.log(exact);

// console.log("the area is: ", area);
// let circumference = geo.circumference(radius);
// console.log("the circumference is: ", circumference);