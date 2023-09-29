var fs = require('fs');

async function getOkta() {
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://<tenant>.oktapreview.com/api/v1/users?limit=1000',
  'headers': {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'SSWS <token>'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  fs.writeFileSync('log.txt',response.body);
});
}

getOkta();