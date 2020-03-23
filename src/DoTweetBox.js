import React from 'react';
import styled from 'styled-components';
import dummyData from './dummyTweetData';
import { borderStyle } from './themeStyles';
import { InputTextarea, Button, UserIcon, Text, Container, ContentContainer } from './uiElements';


const DoTweetBoxContainer = styled(ContentContainer)`
  border-bottom: 10px ${borderStyle};
`;


export default class DoTweetBox extends React.Component {
  textareaOnChange = event => {
    this.props.setEditText(event);

    event.target.style.height = "inherit";
    event.target.style.height = `${event.target.scrollHeight}px`;
  }

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
            />
          </Container>
          <Container>
            <Button onClick={this.props.submitTweet}>
              <Text size="15px" weight="bold" >Tweetする</Text>
            </Button>
          </Container>
        </Container>
      </DoTweetBoxContainer>
    );
  }
}
