var request = require('request');

const Keys = require('../Keys');

module.exports.MovieThis = movieName => {
  request(
    `http://www.omdbapi.com/?t=` + movieName + `&apikey=` + Keys.ombd.key,
    (error, response, body) => {
      if (error) return console.log('error Ocurred');

      body = JSON.parse(body);

      if (body.Response === 'False') return console.log('NOT FOUND');

      console.log('\x1b[36m%s\x1b[0m', 'Title: ');
      console.log(body.Title);
      console.log('\x1b[36m%s\x1b[0m', 'Year: ');
      console.log(body.Year);
      console.log('\x1b[36m%s\x1b[0m', 'IMBD Rating: ');
      console.log(body.imdbRating);
      const rottenTomatoesRating = body.Ratings.filter(
        e => e.Source === 'Rotten Tomatoes'
      );
      console.log('\x1b[36m%s\x1b[0m', 'Rotten Tomatoes Rating: ');
      if (rottenTomatoesRating.length > 0)
        console.log(rottenTomatoesRating[0].Value);
      else console.log('No Rotten Tomatoes Rating...');
      console.log('\x1b[36m%s\x1b[0m', 'Country produced in: ');
      console.log(body.Country);
      console.log('\x1b[36m%s\x1b[0m', 'Languages: ');
      console.log(body.Language);
      console.log('\x1b[36m%s\x1b[0m', 'Plot of the movie: ');
      console.log(body.Plot);
      console.log('\x1b[36m%s\x1b[0m', 'Actors: ');
      console.log(body.Actors);
    }
  );
};
