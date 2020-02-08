import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function TweetText(props) {
  return (
    <span className="tweet-text">
      {props.text}
    </span>
  )
}

function TweetIcon(props) {
  return (
    <img className="tweet-icon" src={props.iconURL} alt="icon"></img>
  )
}

function TweetDetail(props) {
  return (
    <p>
      <span className="tweet-name">{props.name}</span>
      <span className="tweet-id">@{props.id}</span>
    </p>
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
      <div className="tweet">
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