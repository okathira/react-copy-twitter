import React from 'react';
import styled, { css } from 'styled-components';
import dummyData from './dummyTweetData';


const borderStyle = "solid rgb(56, 68, 77)";

const InputTextarea = styled.textarea`
  color: white;
  background-color: #00000000;
`;

const Button = styled.button`
  border-radius: 50%;
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

const DoTweetBoxContainer = styled(TweetContainer)`
  border-bottom: 10px ${borderStyle};
`;


function TweetIcon(props) {
  return (
    <UserIcon src={props.iconURL} alt="user-icon" />
  );
}

function TweetEditor(props) {
  return (
    <InputTextarea placeholder="いまどうしてる？" onChange={props.onChange} />
  );
}

function SubmitTweetButton(props) {
  return (
    <Button onClick={props.onClick}>
      <span>Tweetする</span>
    </Button>
  );
}

export default class DoTweetBox extends React.Component {
  render() {
    return (
      <DoTweetBoxContainer>
        <Container margin="0 10px">
          <TweetIcon iconURL={dummyData.icon} />
        </Container>
        <Container>
          <TweetEditor onChange={this.props.changeEditText} />
          <Container>
            <SubmitTweetButton onClick={this.props.submitTweet} />
          </Container>
        </Container>
      </DoTweetBoxContainer>
    );
  }
}
