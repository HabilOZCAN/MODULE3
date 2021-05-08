let movieDataBase = require('../dataBase/movies');
let rentedMovieDataBase = require ('../dataBase/rentedMovies');

function getData(){
    let rentedList = rentedMovieDataBase;
    return rentedList;
}

function pushData(pMovie){
    let movieList = movieDataBase;
    let index = movieList.findIndex(movie => movie.id === parseInt(pMovie.id));
    if(index>-1){
        rentedMovieDataBase.push(pMovie);
        return true;
    }
    return false;
}

module.exports = {getData, pushData};