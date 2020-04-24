import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import SideNavbar from './SideNavbar';
import MainColumn from './MainColumn';
import { ThemeContext } from './themeStyles';


const Screen = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
`;

const GlobalStyle = createGlobalStyle`
  body {margin: 0;}
`;


export default class App extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <ThemeProvider theme={this.context}>
        <Screen>
          <GlobalStyle />
          <SideNavbar />
          <MainColumn />
        </Screen>
      </ThemeProvider>
    );
  }
}
