import React from 'react';
import styled from 'styled-components';
import { UserIcon, Text, Container, ContentContainer } from './uiElements';


const BreakingText = styled(Text)`
  white-space: pre-wrap;
`;

const TweetContainer = styled(ContentContainer)`
  transition-duration: 0.3s;

  :hover {
    background-color: #192734;
  }

  :focus-visible {
    box-shadow: 0 0 0 1px #9CDCFE;
  }
`;


export default class Tweet extends React.Component {
  data = {};

  constructor(props) {
    super(props);
    this.data = this.props.tweetData;
  }

  render() {
    return (
      <TweetContainer tabIndex="0">
        <Container margin="0 10px">
          <UserIcon src={this.data.icon} alt="user-icon" />
        </Container>
        <Container>
          <Container>
            <Text weight="bold">{this.data.userName}</Text>
            <Text>@{this.data.screenName}</Text>
          </Container>
          <Container margin="2px auto">
            <BreakingText>{this.data.text}</BreakingText>
          </Container>
        </Container>
      </TweetContainer >
    );
  }
}
