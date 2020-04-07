const axios = require('axios');
require('dotenv').config();


const rfc1738Encode = (str) => {
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A');
};


(async () => {
  const bearerTokenCredential = Buffer.from(
    rfc1738Encode(process.env.REACT_APP_TWITTER_API_KEY)
    + ':'
    + rfc1738Encode(process.env.REACT_APP_TWITTER_API_SECRET_KEY)
  ).toString('base64');

  const res = await axios.post(
    'https://api.twitter.com/oauth2/token',
    'grant_type=client_credentials',
    {
      headers: {
        'Authorization': `Basic ${bearerTokenCredential}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    }
  ).catch(err => console.error(err));

  console.log(`bearer token: ${res.data.access_token}`);
})();
