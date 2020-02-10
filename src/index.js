import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';


// style
const Text = styled.span`
  color: white;
`;

const UserIcon = styled.img`
  border-radius: 50%;
  ${props => props.tweet && "float: left;"}
`;

const Container = styled.div`
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
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
    <UserIcon src={props.iconURL} alt="user-icon" tweet></UserIcon>
  )
}

function TweetHeader(props) {
  return (
    <div>
      <Text>{props.name}</Text>
      <Text>@{props.id}</Text>
    </div>
  )
}

class Tweet extends React.Component {
  render() {
    const data = {
      text: "Hello, Twitter. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. magna aliqua.",
      icon: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png",
      name: "お名前",
      id: "twitterID"
    }
    return (
      <div>
        <TweetIcon iconURL={data.icon} />
        <TweetHeader name={data.name} id={data.id} />
        <TweetText text={data.text} />
      </div>
    );
  }
}

class MainColumn extends React.Component {
  render() {
    return (
      <Container>
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