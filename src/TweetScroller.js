import React from 'react';
import DoTweetBox from './DoTweetBox';
import Tweet from './Tweet';
import dummyData from './dummyTweetData';
import { Container } from './uiElements';


export default class TweetScroller extends React.Component {
  editText = "";

  constructor(props) {
    super(props);
    this.submitTweet = this.submitTweet.bind(this);

    // タイムラインを読みこむ
    this.state = {
      timelineTweets: (() => {
        let existingTweets = [];
        for (let i = 0; i < 3; i++) {
          const tweet = {
            ...dummyData,
            time: i
          };

          existingTweets = [
            tweet,
            ...existingTweets
          ];
        }
        return existingTweets;
      })(),
    };
  }

  submitTweet(ref) {
    // ツイート内容のみ反映したダミーデータ
    const tweet = {
      ...dummyData,
      text: ref.current.value,
      time: Date.now()
    };

    this.setState({
      timelineTweets: [
        tweet,
        ...this.state.timelineTweets
      ]
    });

    console.log(this.state.timelineTweets);
  }

  render() {
    return (
      <Container>
        <DoTweetBox submitTweet={this.submitTweet} />
        {this.state.timelineTweets.map((tweetData) => (
          <Tweet key={tweetData.time} tweetData={tweetData} />
        ))}
      </Container>
    );
  }
}
