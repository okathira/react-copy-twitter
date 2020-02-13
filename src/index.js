import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle, css } from 'styled-components';


// style
const Text = styled.span`
  color: white;
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

  ${props => props.sideBySide && css`
    display: flex;
    align-items: stretch;
  `}

  ${props => (props.borderRL || props.borderTB) && css` 
    ${props.borderRL && css`
      border-right: solid;
      border-left: solid;
    `}
    ${props.borderTB && css`
      border-top: solid;
      border-bottom: solid;
    `}
    border-width: 1px;
    border-color: rgb(56, 68, 77);
  `}
  
  ${props => props.main && css`
    width: 600px;
    height: 100%;
    margin: auto 20%;
  `}
`;

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(21, 32, 43);
`;

const GlobalStyle = createGlobalStyle`
  body {margin: 0;}
`;

// main
function TweetText(props) {
  return (
    <Text>{props.text}</Text>
  )
}

function TweetIcon(props) {
  return (
    <UserIcon src={props.iconURL} alt="user-icon"></UserIcon>
  )
}

function TweetHeader(props) {
  return (
    <Container>
      <Text>{props.name}</Text>
      <Text>@{props.id}</Text>
    </Container>
  )
}

class Tweet extends React.Component {
  render() {
    const data = {
      text: "Hello, Twitter. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in cillum.",
      icon: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png",
      name: "お名前",
      id: "twitterID"
    }
    return (
      <Container sideBySide borderTB padding="10px">
        <Container margin="0 10px">
          <TweetIcon iconURL={data.icon} />
        </Container>
        <Container>
          <TweetHeader name={data.name} id={data.id} />
          <TweetText text={data.text} />
        </Container>
      </Container>
    );
  }
}

class MainColumn extends React.Component {
  render() {
    return (
      <Container main borderRL>
        <Tweet />
      </Container>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Screen>
        <GlobalStyle />
        <MainColumn />
      </Screen>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);