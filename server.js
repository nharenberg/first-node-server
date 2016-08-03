const PORT = 8000;

const _ = require('lodash');

const http = require('http');

const moment = require("moment");

const md5 = require("md5");

let server = http.createServer((req, res) => {
  // Request Handler

console.log("Request Method:", req.method);
console.log("Request URL:", req.url);


  let urlParts = req.url.match(/[^/]+/g);

  let path = urlParts[0]; //'square'

      let num1 = parseInt(urlParts[1]);
      let num2 = parseInt(urlParts[2]);

  switch(path) {
    case 'square':
      var num = parseInt(urlParts[1]);
      let square = Math.pow(num, 2);

      res.write(`${square}`);
      res.end('\n');
      break;

    case `age`:
      //do age stuff
      let birthStr = urlParts[1];
      let birthMoment = moment(birthStr, `MM-DD-YYYY`);

      let age_ms = birthMoment.diff(moment());

      let durationStr = moment.duration(age_ms).humanize(true);

      res.write(`${birthMoment.format('LL')} was ${durationStr}\n`);
      res.end(`\n`)
      break;

      //add
    case `add`:
      var nums = num1 + num2;

      res.write(`${nums}\n`);
      res.end(`\n`);
    break;

    //subtract
    case `subtract`:
      var nums = num1 - num2;

      res.write(`${nums}\n`);
      res.end(`\n`);
    break;

    //divide
    case `div`:
      var nums = num1 / num2;

      res.write(`${nums}\n`);
      res.end(`\n`);
    break;

    //multiply
    case `mult`:
      var nums = num1 * num2;

      res.write(`${nums}\n`);
      res.end(`\n`);
    break;


    //square
    case `square`:
      var nums = Math.pow(num1, num2);

      res.write(`${nums}\n`);
      res.end(`\n`);
    break;


    //square root
    case `sqroot`:
      var nums = Math.sqrt(num1);

      res.write(`${nums}\n`);
      res.end(`\n`);
    break;

    //cube root
    case `cbroot`:
      var nums = Math.cbrt(num1);

      res.write(`${nums}\n`);
      res.end(`\n`);
    break;

    case `gravatar`:
      var email = (urlParts[1]);
      var grav = `http://www.gravatar.com/avatar/`;
      var hash = (grav + md5(email));

      res.write(hash);
      res.end(`\n`);
    break;

    default:
      res.statusCode = 404;
      res.end('Not found.\n');
    break;
  }



//   if(path === 'square') {
//     //square number

//     let num = parseInt(urlParts[1]);

//     let square = Math.pow(num, 2);

//     res.write(`${square}`);
//     res.end(`\n`);

//   } else{

//     res.statusCode = 404;
//     res.end(`Not Found. \n`);

//     }


//   console.log("urlParts:", urlParts)


//   //res.end();

});


    server.listen(PORT, err => {
      console.log(err || `Server Listening on port ${PORT}`);
});



// GET /age/06-10 
