import React from 'react';
import styled from 'styled-components';
import dummyData from './dummyTweetData';
import { borderStyle } from './themeStyles';
import { InputTextarea, Button, UserIcon, Text, Container, ContentContainer } from './uiElements';


const DoTweetBoxContainer = styled(ContentContainer)`
  border-bottom: 10px ${borderStyle};
`;


export default class DoTweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: "",
      height: "inherit",
      count: 1,
      wrapCount: 0,
    };
  }

  textareaOnChange = event => {
    const t = event.target;
    const tweet = t.value;
    const count = (tweet.match(/\r\n|\n/g) || []).length + 1;
    const charHeight = 20; // t.scrollHeight / (this.state.count + this.state.wrapCount);

    let height =
      count > this.state.count
        ? t.scrollHeight
        : charHeight * (count + this.state.wrapCount) + 1;

    const wrapCountIncrement = (() => {
      if (count === this.state.count)
        return Math.floor((t.scrollHeight - charHeight * (count + this.state.wrapCount)) / charHeight);
      else
        return 0;
    })();

    const wrapCount = this.state.wrapCount + wrapCountIncrement;
    height += charHeight * wrapCountIncrement;

    this.setState({
      tweet,
      count,
      wrapCount,
      height: `${height}px`,
    });

    console.log(t.scrollHeight, count, wrapCount, wrapCountIncrement);
  };

  tweetButtonOnClick = () => {
    this.props.submitTweet(this.state.tweet);
    this.setState({
      tweet: "",
      height: "inherit",
      count: 1,
      wrapCount: 0,
    });
  };

  render() {
    return (
      <DoTweetBoxContainer>
        <Container margin="0 10px">
          <UserIcon src={dummyData.icon} alt="user-icon" />
        </Container>
        <Container maxWidth>
          <Container margin="1em 0">
            <InputTextarea
              size="20px"
              placeholder="いまどうしてる？"
              onChange={this.textareaOnChange}
              rows="1"
              value={this.state.tweet}
              style={{ height: this.state.height }}
            />
          </Container>
          <Container>
            <Button onClick={this.tweetButtonOnClick}>
              <Text size="15px" weight="bold" >Tweetする</Text>
            </Button>
          </Container>
        </Container>
      </DoTweetBoxContainer>
    );
  }
}
