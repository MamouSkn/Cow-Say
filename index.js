const userInfo = require('./information');
// console.log(`Hi, my name is ${userInfo.firstName} from ${userInfo.campus}`);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.firstName} from ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));