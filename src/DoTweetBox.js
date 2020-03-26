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

    const height =
      count > this.state.count
        ? t.scrollHeight
        : charHeight * count;

    const wrapCountIncrement = (() => {
      if (count === this.state.count) {
        // if (t.scrollHeight - t.clientHeight === 1) {
        //   this.setState({ height: `${t.scrollHeight}px` });
        //   return 0;
        // }
        // else
        return (t.scrollHeight - t.clientHeight) / charHeight;
      }
      else
        return 0;
    })();

    const wrapCount = this.state.wrapCount + wrapCountIncrement;

    this.setState({
      tweet,
      count,
      wrapCount,
      height: `${height}px`,
    });

    console.log(t.scrollHeight, t.clientHeight, count, wrapCount, wrapCountIncrement, charHeight);
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
              // placeholder="いまどうしてる？"
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
