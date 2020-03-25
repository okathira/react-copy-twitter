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
    };
  }

  textareaOnChange = event => {
    const t = event.target;
    const tweet = t.value
    const count = (tweet.match(/\r\n|\n/g) || []).length + 1;
    const height = count > this.state.count ? t.scrollHeight : t.scrollHeight / this.state.count * count
    this.setState({
      tweet,
      count,
      height: `${height}px`,
    });
  };

  tweetButtonOnClick = () => {
    this.props.submitTweet(this.state.tweet);
    this.setState({
      tweet: "",
      height: "inherit",
      count: 1,
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
              size="1.4em"
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
