const fetch = require('node-fetch');
require('./secrets')
const accessToken = process.env.BEARER_TOKEN;
//for sanity check
//tweet ids break JS lol the numbers are too big
//therefore you must use the id_str instead of the id value because the JSON parser might have have changed it
// read more here at https://developer.twitter.com/en/docs/basics/twitter-ids
const url ='https://api.twitter.com/1.1/statuses/lookup.json?id=1050118621198921728,20&trim_user=true&include_entities=true&include_ext_alt_text=true' ;
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + accessToken
}

fetch(url, { method: 'GET', headers: headers})
  .then((res) => {
     return res.json()
})
.then((json) => {
  console.log(json);
  // Do something with the returned data.
});