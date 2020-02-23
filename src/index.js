import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle, css } from 'styled-components';


// style
const borderStyle = "1px solid rgb(56, 68, 77)";
const backgroundColor = "rgb(21, 32, 43)";

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
`;

const MainColumnHeaderContainer = styled.div`
  position: sticky;
  top: 0px;
  padding: 15px;
  background-color: ${backgroundColor};
  border-bottom: ${borderStyle};
`;

const TweetContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: stretch;
  border-bottom: ${borderStyle};
`;

const MainColumnContainer = styled.div`
  max-width: 600px;
  height: 100%;
  min-height: 100vh;
  margin: auto auto auto 15% ;
  border-right: ${borderStyle};
  border-left: ${borderStyle};
`;

const Screen = styled.div`
  background-color: ${backgroundColor};
`;

const GlobalStyle = createGlobalStyle`
  body {margin: 0;}
`;

// main
function TweetText(props) {
  return (
    <Text>{props.text}</Text>
  );
}

function TweetIcon(props) {
  return (
    <UserIcon src={props.iconURL} alt="user-icon"></UserIcon>
  );
}

function TweetHeader(props) {
  return (
    <Container>
      <Text>{props.name}</Text>
      <Text>@{props.id}</Text>
    </Container>
  );
}

class MainColumnHeader extends React.Component {
  render() {
    return (
      <MainColumnHeaderContainer>
        <Text>ホーム</Text>
      </MainColumnHeaderContainer>
    );
  }
}

class Tweet extends React.Component {
  data = {};

  constructor(props) {
    super(props);
    this.data = this.props.tweetData;
  }

  render() {
    return (
      <TweetContainer>
        <Container margin="0 10px">
          <TweetIcon iconURL={this.data.icon} />
        </Container>
        <Container>
          <TweetHeader name={this.data.name} id={this.data.id} />
          <TweetText text={this.data.text} />
        </Container>
      </TweetContainer >
    );
  }
}

class TweetScroller extends React.Component {
  constructor(props) {
    super(props);

    // dummy data
    const data = {
      text: "Hello, Twitter. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in cillum.",
      icon: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png",
      name: "お名前",
      id: "twitterID"
    };

    this.state = {
      timelineTweets: (() => {
        let existTweets = [];
        for (let i = 0; i < 5; i++)
          existTweets.push(data);

        return existTweets;
      })(),
    };
  }

  render() {
    return (
      <Container>
        {this.state.timelineTweets.map((tweetData) => (
          <Tweet tweetData={tweetData} />
        ))}
      </Container>
    );
  }
}

class MainColumn extends React.Component {
  render() {
    return (
      <MainColumnContainer>
        <MainColumnHeader />
        <TweetScroller />
      </MainColumnContainer>
    );
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