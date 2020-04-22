import React from 'react';
import DoTweetBox from './DoTweetBox';
import Tweet from './Tweet';
import dummyData from './dummyTweetData';
import { Container, Text } from './uiElements';
import twitterAPI from './twitterAPI';


export default class TweetScroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      timelineTweets: [],
      bearerToken: null,
    };
  }

  componentDidMount() {
    twitterAPI.getBearerToken()
      .then(
        bearerToken => {
          this.setState({ bearerToken });
          return twitterAPI.getUserTimeline(bearerToken, 'reactjs');
        }
      )
      .then(
        timelineTweets => {
          this.setState({
            isLoaded: true,
            timelineTweets,
          });
        }
      )
      .catch(
        error => {
          this.setState({
            isLoaded: true,
            error
          });
          console.error(error);
        }
      );
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
      } else if (!isLoaded) {
        return <Text>Loading...</Text>;
      } else {
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
