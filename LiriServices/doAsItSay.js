const fs = require('fs');

const { myTweets } = require('./myTweets');
const { SpotifyThis } = require('./spotifyThis');
const { MovieThis } = require('./movieThis');

module.exports.doAsItSay = fileName => {
  fs.readFile(fileName, 'utf8', function(err, data) {
    if (err) return console.log('Error Ocurred');
    data = data.split(',');
    switch (data[0]) {
      case 'my-tweets':
        return myTweets();
      case 'spotify-this-song':
        if (data.length > 1) return SpotifyThis(data[1]);
        else return SpotifyThis('The Sign');
      case 'movie-this':
        if (data.length > 1) return MovieThis(data[1]);
        else return MovieThis('Mr. Nobody.');
      default:
        return;
    }
  });
};
