import React from 'react';
import DoTweetBox from './DoTweetBox';
import Tweet from './Tweet';
import dummyData from './dummyTweetData';
import { Container, Text } from './uiElements';
import axios from 'axios';


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

const getUserTimeline = async screenName => {
  /*
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
  */
  const bearerToken = process.env.REACT_APP_TWITTER_API_BEARER_TOKEN;
  console.log(`bearer token: ${bearerToken}`);

  const userTimelineResponse = await twitterAPI.get(
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
  ).catch(err => console.error(err));
  console.log(userTimelineResponse);

  return userTimelineResponse.data;
};


export default class TweetScroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      timelineTweets: [],
    };
  }

  componentDidMount() {
    getUserTimeline('reactjs')
      .then(
        timelineTweets => {
          this.setState({
            isLoaded: true,
            timelineTweets,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }

  submitTweet = tweetText => {
    // ツイート内容のみ反映したダミーデータ
    const tweet = {
      ...dummyData,
      full_text: tweetText,
      id_str: Date.now()
    };

    this.setState({
      timelineTweets: [
        tweet,
        ...this.state.timelineTweets
      ]
    }, () => console.log(this.state.timelineTweets));
  }

  render() {
    const { error, isLoaded, timelineTweets } = this.state;
    const timeline = (() => {
      if (error) {
        return <Text>Error: {error.message}</Text>;
      }
      else if (!isLoaded) {
        return <Text>Loading...</Text>;
      }
      else {
        return timelineTweets.map((tweetData) => (
          <Tweet key={tweetData.id_str} tweetData={tweetData} />
        ));
      }
    })();

    return (
      <Container>
        <DoTweetBox submitTweet={this.submitTweet} />
        {timeline}
      </Container>
    );

  }
}
