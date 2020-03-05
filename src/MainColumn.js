import React from 'react';
import styled from 'styled-components';
import TweetScroller from './TweetScroller';


const borderStyle = "solid rgb(56, 68, 77)";
const backgroundColor = "rgb(21, 32, 43)";

const Text = styled.span`
  color: white;
  overflow-wrap: anywhere;
`;

const MainColumnHeaderContainer = styled.div`
  position: sticky;
  top: 0px;
  padding: 15px;
  background-color: ${backgroundColor};
  border-bottom: 1px ${borderStyle};
`;

const MainColumnContainer = styled.div`
  max-width: 600px;
  height: 100%;
  min-height: 100vh;
  margin: auto auto auto 15% ;
  border-right: 1px ${borderStyle};
  border-left: 1px ${borderStyle};
`;


export default class MainColumn extends React.Component {
  render() {
    return (
      <MainColumnContainer>
        <MainColumnHeaderContainer>
          <Text>ホーム</Text>
        </MainColumnHeaderContainer>
        <TweetScroller />
      </MainColumnContainer>
    );
  }
}
