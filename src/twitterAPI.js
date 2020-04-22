import axios from 'axios';


const rfc1738Encode = (str) => {
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A');
};

const twitterBaseAPI = axios.create({
  baseURL: 'https://api.twitter.com/',
});

const getBearerToken = async () => {
  const bearerTokenResponse = await twitterBaseAPI.post(
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
  );

  return bearerTokenResponse.data.access_token;
};

const getUserTimeline = async (bearerToken, screenName) => {
  const userTimelineResponse = await twitterBaseAPI.get(
    '1.1/statuses/user_timeline.json',
    {
      headers: { Authorization: `Bearer ${bearerToken}` },
      params: {
        screen_name: screenName,
        count: 10,
        exclude_replies: true,
        include_rts: false,
        tweet_mode: 'extended',
      },
    }
  );
  console.log(userTimelineResponse);

  return userTimelineResponse.data;
};


export default class twitterAPI {
  static getBearerToken = getBearerToken;
  static getUserTimeline = getUserTimeline;
}
