const request = require('request');
// const breedName = process.argv.slice(2);

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      return callback(error.errno, null);
    }

    const data = JSON.parse(body);


    if (data.length === 0) {
      return callback(null, 'Breed doesn\'t found');
    } else {
      return callback(null, data[0]['description'].trim());
    }
  });
};

module.exports = { fetchBreedDescription };