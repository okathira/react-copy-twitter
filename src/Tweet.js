import React from 'react';
import styled from 'styled-components';
import { UserIcon, Text, Container, TweetContainer } from './uiElements';


const BreakingText = styled(Text)`
  white-space: pre-wrap;
`;


export default class Tweet extends React.Component {
  data = {};

  constructor(props) {
    super(props);
    this.data = this.props.tweetData;
  }

  render() {
    return (
      <TweetContainer>
        <Container margin="0 10px">
          <UserIcon src={this.data.icon} alt="user-icon" />
        </Container>
        <Container>
          <Container>
            <Text weight="bold">{this.data.userName}</Text>
            <Text>@{this.data.screenName}</Text>
          </Container>
          <BreakingText>{this.data.text}</BreakingText>
        </Container>
      </TweetContainer >
    );
  }
}
