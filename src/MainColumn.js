import React from 'react';
import styled from 'styled-components';
import TweetScroller from './TweetScroller';
import { borderStyle, backgroundColor } from './themeStyles';
import { Text } from './uiElements';


const MainColumnHeaderContainer = styled.div`
  position: sticky;
  top: 0px;
  padding: 10px 15px;
  background-color: ${backgroundColor};
  border-bottom: 1px ${borderStyle};
`;

const MainColumnContainer = styled.div`
  width: 600px;
  height: 100%;
  min-height: 100vh;
  border-right: 1px ${borderStyle};
  border-left: 1px ${borderStyle};
`;


export default class MainColumn extends React.Component {
  render() {
    return (
      <MainColumnContainer>
        <MainColumnHeaderContainer>
          <Text weight="bold" size="19px">ホーム</Text>
        </MainColumnHeaderContainer>
        <TweetScroller />
      </MainColumnContainer>
    );
  }
}
