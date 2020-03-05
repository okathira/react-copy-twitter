import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MainColumn from './MainColumn';


const backgroundColor = "rgb(21, 32, 43)";

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
