require('dotenv').config();

const { myTweets } = require('./LiriServices/myTweets');
const { SpotifyThis } = require('./LiriServices/spotifyThis');
const { MovieThis } = require('./LiriServices/movieThis');
const { doAsItSay } = require('./LiriServices/doAsItSay');

const args = process.argv;
switch (args[2]) {
  case 'my-tweets':
    return myTweets();
  case 'spotify-this-song':
    if (args.length > 3) return SpotifyThis(args[3]);
    else return SpotifyThis('The Sign');
  case 'movie-this':
    if (args.length > 3) return MovieThis(args[3]);
    else return MovieThis('Mr. Nobody.');
  case 'do-what-it-says':
    return doAsItSay('random.txt');
  default:
    return console.log(
      '\x1b[36m%s\x1b[0m',
      `Enter one of the following: 
    my-tweets
    spotify-this-song <Song Name ?optional>
    movie-this <Movie Name ?optional>
    do-what-it-says
    `
    );
}

//  * `my-tweets` show your last 20 tweets and when they were created

// myTweets();

//  * `spotify-this-song '<song name here --default to "The Sign"-->'`
//     * show the following info about the song
//      ** Artist(s), The song's name, A preview link of the song from Spotify, The album that the song is from

// SpotifyThis('The Sign');

//  * `movie-this '<movie name here --default to 'Mr. Nobody.'>'` will output the following information
//  *   * Title of the movie, Year the movie came out, IMDB Rating of the movie,
//  *   * Rotten Tomatoes Rating of the movie, Country where the movie was produced,
//  *   * Language of the movie, Plot of the movie, Actors in the movie.

// MovieThis('Mr. Nobody.');

//  * `do-what-it-says
//  *   * Using the `fs` Node package, LIRI will take the text inside of
//  *   * random.txt and then use it to call one of LIRI's commands.

// doAsItSay('random.txt');
