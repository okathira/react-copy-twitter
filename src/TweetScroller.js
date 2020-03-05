import React from 'react';
import styled, { css } from 'styled-components';
import DoTweetBox from './DoTweetBox';
import Tweet from './Tweet';


const Container = styled.div`
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  ${props => props.padding && css`
    padding: ${props.padding};
  `}
`;


const dummyData = {
  text: "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHello,Twwwwwwwwwwwwwwwwwwwwwwwwwwwwwwitter. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  icon: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png",
  userName: "お名前",
  screenName: "twitterID",
  time: 0,
};

export default class TweetScroller extends React.Component {
  editText = "";

  constructor(props) {
    super(props);
    this.submitTweet = this.submitTweet.bind(this);
    this.changeEditText = this.changeEditText.bind(this);

    // タイムラインを読みこむ
    this.state = {
      timelineTweets: (() => {
        let existingTweets = [];
        for (let i = 0; i < 3; i++) {
          const data = Object.assign(Object.create(dummyData), dummyData);
          data.time = i;
          existingTweets.unshift(data);
        }
        return existingTweets;
      })(),
    };
  }

  submitTweet() {
    // ツイート内容のみ反映したダミーデータ
    const tweet = {
      ...dummyData,
      text: this.editText,
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

  changeEditText(event) {
    this.editText = event.target.value;
  }

  render() {
    return (
      <Container>
        <DoTweetBox submitTweet={this.submitTweet} changeEditText={this.changeEditText} />
        {this.state.timelineTweets.map((tweetData) => (
          <Tweet key={tweetData.time} tweetData={tweetData} />
        ))}
      </Container>
    );
  }
}
