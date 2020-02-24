import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle, css } from 'styled-components';


// style
const borderStyle = "solid rgb(56, 68, 77)";
const backgroundColor = "rgb(21, 32, 43)";

const Text = styled.span`
  color: white;
  ${props => props.breaking && css`
    white-space: pre-wrap;
    overflow-wrap: break-word;
  `}
`;

const InputTextarea = styled.textarea`
  color: white;
  background-color: #00000000;
`;

const Button = styled.button`
  border-radius: 50%;
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
  border-bottom: 1px ${borderStyle};
`;

const TweetContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: stretch;
  border-bottom: 1px ${borderStyle};
`;

const DoTweetBoxContainer = styled(TweetContainer)`
  border-bottom: 10px ${borderStyle};
`

const MainColumnContainer = styled.div`
  max-width: 600px;
  height: 100%;
  min-height: 100vh;
  margin: auto auto auto 15% ;
  border-right: 1px ${borderStyle};
  border-left: 1px ${borderStyle};
`;

const Screen = styled.div`
  background-color: ${backgroundColor};
`;

const GlobalStyle = createGlobalStyle`
  body {margin: 0;}
`;

// main
// dummy data
const dummyData = {
  text: "Hello, Twitter. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in cillum.",
  icon: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png",
  userName: "お名前",
  screenName: "twitterID",
  time: 0,
};

function TweetText(props) {
  return (
    <Text breaking>{props.text}</Text>
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
      <Text>{props.userName}</Text>
      <Text>@{props.screenName}</Text>
    </Container>
  );
}

function TweetEditor(props) {
  return (
    <InputTextarea placeholder="いまどうしてる？" onChange={props.onChange}></InputTextarea>
  );
}

function SubmitTweetButton(props) {
  return (
    <Button onClick={props.onClick}>
      <span>Tweetする</span>
    </Button>
  )
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
          <TweetHeader userName={this.data.userName} screenName={this.data.screenName} />
          <TweetText text={this.data.text} />
        </Container>
      </TweetContainer >
    );
  }
}

class DoTweetBox extends React.Component {
  render() {
    return (
      <DoTweetBoxContainer>
        <Container margin="0 10px">
          <TweetIcon iconURL={dummyData.icon} />
        </Container>
        <Container>
          <TweetEditor onChange={this.props.changeEditText} />
          <Container>
            <SubmitTweetButton onClick={this.props.submitTweet} />
          </Container>
        </Container>
      </DoTweetBoxContainer>
    )
  }
}

class TweetScroller extends React.Component {
  editText = "";

  constructor(props) {
    super(props);
    this.submitTweet = this.submitTweet.bind(this);
    this.changeEditText = this.changeEditText.bind(this);

    // タイムラインを読みこむ
    this.state = {
      timelineTweets: (() => {
        let existingTweets = [];
        for (let i = 3; i > 0; i--) {
          const data = Object.assign(Object.create(dummyData), dummyData);
          data.time = i;
          existingTweets.push(data);
        }
        return existingTweets;
      })(),
    };
  }

  submitTweet() {
    let timelineTweets = this.state.timelineTweets.slice();

    // ダミーツイート 編集した内容のみ反映される
    const tweet = Object.assign(Object.create(dummyData), dummyData);
    tweet.text = this.editText;
    tweet.time = Date.now();
    timelineTweets.unshift(tweet);

    this.setState({
      timelineTweets: timelineTweets,
    });

    console.log(this.state.timelineTweets)
  }

  changeEditText(event) {
    this.editText = event.target.value;
  }

  render() {
    return (
      <Container>
        <DoTweetBox submitTweet={this.submitTweet} changeEditText={this.changeEditText} />
        {this.state.timelineTweets.map((tweetData) => (
          <Tweet key={tweetData.time} tweetData={tweetData} />
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