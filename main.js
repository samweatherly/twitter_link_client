var Tweets = React.createClass({
  getInitialState: function(){
    return {tweets: []};
  },
  componentDidMount: function(){
    console.log('mount');
    $.ajax({
      url: "http://localhost:3001/api/v1/twitter_feeds",
      method: "GET",
      success: function(data){
        this.setState({tweets: data.tweets});
        console.log(this.state.tweets);
        console.log('success');
      }.bind(this),
      error: function(){
        console.log("ERROR");
      }
    });
  },
  displayTweets: function(){
    console.log('displayTweets()');
    return this.state.tweets.map(function(tweet, index){
      return <IndivTweet text={tweet.text} key={index} />;
    });
  },
  render: function(){
    return (
      <div>
        <h1>Tweets Home!</h1>
        {this.displayTweets()}
      </div>
    );
  }
});

var IndivTweet = React.createClass({
  render: function(){
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
});


ReactDOM.render(<Tweets />, document.getElementById('twitter-feed'));
