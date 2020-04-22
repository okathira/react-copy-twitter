import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SideNavbar from './SideNavbar';
import MainColumn from './MainColumn';
import { backgroundColor } from './themeStyles';


const Screen = styled.div`
  background-color: ${backgroundColor};
  display: flex;
`;

const GlobalStyle = createGlobalStyle`
  body {margin: 0;}
`;


export default class App extends React.Component {
  render() {
    return (
      <Screen>
        <GlobalStyle />
        <SideNavbar />
        <MainColumn />
      </Screen>
    );
  }
}
