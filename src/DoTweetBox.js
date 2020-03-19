import React from 'react';
import styled from 'styled-components';
import dummyData from './dummyTweetData';
import { borderStyle } from './themeStyles';
import { InputTextarea, Button, UserIcon, Text, Container, TweetContainer } from './uiElements';


const DoTweetBoxContainer = styled(TweetContainer)`
  border-bottom: 10px ${borderStyle};
`;


export default class DoTweetBox extends React.Component {
  render() {
    return (
      <DoTweetBoxContainer>
        <Container margin="0 10px">
          <UserIcon src={dummyData.icon} alt="user-icon" />
        </Container>
        <Container>
          <InputTextarea placeholder="いまどうしてる？" onChange={this.props.changeEditText} />
          <Container>
            <Button onClick={this.props.submitTweet}>
              <Text weight="bold" >Tweetする</Text>
            </Button>
          </Container>
        </Container>
      </DoTweetBoxContainer>
    );
  }
}
