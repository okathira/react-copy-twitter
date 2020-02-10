import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


// style
const Text = styled.span``;

const UserIcon = styled.img`
  ${props => props.tweet && "float: left;"}
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

function TweetDetail(props) {
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
      text: "Hello, Twitter.",
      icon: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png",
      name: "お名前",
      id: "twitterID"
    }
    return (
      <div>
        <TweetIcon iconURL={data.icon} />
        <TweetDetail name={data.name} id={data.id} />
        <TweetText text={data.text} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Tweet />
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);