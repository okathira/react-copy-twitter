import React from 'react';
import styled, { css } from 'styled-components';


const borderStyle = "solid rgb(56, 68, 77)";

const Text = styled.span`
  color: white;
  overflow-wrap: anywhere;
`;

const BreakingText = styled(Text)`
  white-space: pre-wrap;
`;

const UserIcon = styled.img`
  border-radius: 50%;
  width: 49px;
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


function TweetText(props) {
  return (
    <BreakingText>{props.text}</BreakingText>
  );
}

function TweetIcon(props) {
  return (
    <UserIcon src={props.iconURL} alt="user-icon" />
  );
}

function TweetHeader(props) {
  return (
    <Container>
      <Text>{props.userName}</Text>
      <Text>@{props.screenName}</Text>
    </Container>
  );
}

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
          <TweetIcon iconURL={this.data.icon} />
        </Container>
        <Container>
          <TweetHeader userName={this.data.userName} screenName={this.data.screenName} />
          <TweetText text={this.data.text} />
        </Container>
      </TweetContainer >
    );
  }
}
