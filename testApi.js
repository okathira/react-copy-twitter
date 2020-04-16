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

const twitterAPI = axios.create({
  baseURL: 'https://api.twitter.com/',
});

(async () => {
  const bearerTokenResponse = await twitterAPI.post(
    'oauth2/token',
    'grant_type=client_credentials',
    {
      auth: {
        username: rfc1738Encode(process.env.REACT_APP_TWITTER_API_KEY),
        password: rfc1738Encode(process.env.REACT_APP_TWITTER_API_SECRET_KEY)
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    }
  ).catch(err => console.error(err));
  const bearerToken = bearerTokenResponse.data.access_token;
  console.log(`bearer token: ${bearerToken}`);

  const userTimelineResponse = await twitterAPI.get(
    '1.1/statuses/user_timeline.json',
    {
      headers: { Authorization: `Bearer ${bearerToken}` },
      params: {
        screen_name: 'twitter',
        count: 10,
        exclude_replies: true,
        include_rts: false,
        tweet_mode: 'extended',
      },
    }
  ).catch(err => console.error(err));
  console.log(userTimelineResponse.data);

  require('fs').writeFileSync('res.json', JSON.stringify(userTimelineResponse.data, null, '  '));
})();


