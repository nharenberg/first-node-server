const _ = require('lodash');

let names = ["Nick", "Zhaggi", "Cade", "Brian", "Danny", "Dilip", "Juan Carlos", "Holly"];

console.log(_.chunk(_.shuffle(names), 2));