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

    const wrapCount = Math.floor((t.scrollHeight - count * charHeight) / charHeight);

    const height = charHeight * (count + wrapCount) + 1;

    this.setState({
      tweet,
      count,
      wrapCount,
      height: `${height}px`
    });

    console.log(t.scrollHeight, t.clientHeight, count, wrapCount);
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
