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
    this.tweetTextarea = React.createRef();
  }

  textareaOnChange = () => {
    this.tweetTextarea.current.style.height = "inherit";
    this.tweetTextarea.current.style.height = `${this.tweetTextarea.current.scrollHeight}px`;
  };

  tweetButtonOnClick = () => {
    this.props.submitTweet(this.tweetTextarea);

    this.tweetTextarea.current.value = "";
    this.textareaOnChange();
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
              ref={this.tweetTextarea}
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
