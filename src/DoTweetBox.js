import React from 'react';
import styled from 'styled-components';
import dummyData from './dummyTweetData';
import { borderStyle } from './themeStyles';
import { InputTextarea, Button, UserIcon, Text, Container, ContentContainer } from './uiElements';


const DoTweetBoxContainer = styled(ContentContainer)`
  border-bottom: 10px ${borderStyle};
`;

const TweetButton = styled(Button)`
  background-color: rgb(29, 161, 242);
  padding: 5px 15px;
  transition-duration: 0.1s;
  
  :hover {
    background-color: #1A91DA;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px #9CDCFE;
  }
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
          <UserIcon src={dummyData.user.profile_image_url} alt="user-icon" />
        </Container>
        <Container w="100%">
          <Container margin="10px 0">
            <InputTextarea
              size="19px"
              placeholder="いまどうしてる？"
              onChange={this.textareaOnChange}
              value={this.state.tweet}
            />
          </Container>
          <Container>
            <TweetButton onClick={this.tweetButtonOnClick}>
              <Text size="15px" weight="bold" >Tweetする</Text>
            </TweetButton>
          </Container>
        </Container>
      </DoTweetBoxContainer>
    );
  }
}
