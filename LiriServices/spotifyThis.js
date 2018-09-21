const Spotify = require('node-spotify-api');

const Keys = require('../Keys');

module.exports.SpotifyThis = songName => {
  const spotify = new Spotify(Keys.spotify);
  spotify
    .search({ type: 'track', query: songName })
    .then(function(response) {
      console.log('\x1b[36m%s\x1b[0m', 'Artist(s): ');
      response.tracks.items[0].artists.map(a => console.log(a.name, ', '));
      console.log('\x1b[36m%s\x1b[0m', `The song's name: `);
      console.log(response.tracks.items[0].name);
      console.log('\x1b[36m%s\x1b[0m', 'preview link: ');
      console.log(response.tracks.items[0].preview_url);
      console.log('\x1b[36m%s\x1b[0m', 'Album Name: ');
      console.log(response.tracks.items[0].album.name);
    })
    .catch(function(err) {
      console.log('error Ocurred');
    });
};
