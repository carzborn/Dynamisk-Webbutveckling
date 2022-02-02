
const {round} = Math;

const roundWith1Decimal = a => round(a * 10) / 10;
const roundWith2Decimal = a => round(a * 100) / 100;
const round1 = (num, x) => round(num * 10 ** x) / 10 **x;

module.exports = {
    roundWith1Decimal,
    roundWith2Decimal,
    round1,
};