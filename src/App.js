import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MainColumn from './MainColumn';
import { backgroundColor } from './themeStyles';


const Screen = styled.div`
  background-color: ${backgroundColor};
`;

const GlobalStyle = createGlobalStyle`
  body {margin: 0;}
`;


export default class App extends React.Component {
  render() {
    return (
      <Screen>
        <GlobalStyle />
        <MainColumn />
      </Screen>
    );
  }
}
