import React from 'react';
import styled, { css } from 'styled-components';
import dummyData from './dummyTweetData';
import { borderStyle } from './themeStyles';
import { InputTextarea, Button, UserIcon } from './uiElements';


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
              <span>Tweetする</span>
            </Button>
          </Container>
        </Container>
      </DoTweetBoxContainer>
    );
  }
}
