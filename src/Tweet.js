import React from 'react';
import styled, { css } from 'styled-components';
import { borderStyle } from './themeStyles';
import { UserIcon, Text } from './uiElements';


const BreakingText = styled(Text)`
  white-space: pre-wrap;
`;

const Container = styled.div`
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  ${props => props.padding && css`
    padding: ${props.padding};
  `}
`;

const TweetContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: stretch;
  border-bottom: 1px ${borderStyle};
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
            <Text>{this.data.userName}</Text>
            <Text>@{this.data.screenName}</Text>
          </Container>
          <BreakingText>{this.data.text}</BreakingText>
        </Container>
      </TweetContainer >
    );
  }
}
