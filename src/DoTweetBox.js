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
      tweet: ""
    };
  }

  textareaOnChange = event => {
    this.setState({
      tweet: event.target.value
    });
  }

  tweetButtonOnClick = () => {
    this.props.submitTweet(this.state.tweet);
    this.setState({
      tweet: ""
    });
  }

  render() {
    return (
      <DoTweetBoxContainer>
        <Container margin="0 10px">
          <UserIcon src={dummyData.icon} alt="user-icon" />
        </Container>
        <Container maxWidth>
          <Container margin="10px 0">
            <InputTextarea
              size="19px"
              placeholder="いまどうしてる？"
              onChange={this.textareaOnChange}
              value={this.state.tweet}
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
