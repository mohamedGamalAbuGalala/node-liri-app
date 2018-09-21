const Twitter = require('twitter');

const Keys = require('../Keys');

module.exports.myTweets = () => {
  const client = new Twitter(Keys.twitter);
  var params = { screen_name: 'nodejs' };
  client.get('statuses/user_timeline', params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      if (tweets.length > 20) tweets = tweets.slice(0, 20);
      let count = 0;
      tweets.map(t => {
        console.log('\x1b[36m%s\x1b[0m', 'Tweet number ', count++, ': ');
        console.log(t);
      });
    } else console.log(error);
  });
};
