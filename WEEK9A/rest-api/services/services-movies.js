let movieDataBase = require('../dataBase/movies');

function getData(pID){
    let movieList = movieDataBase;
    if(pId === undefined){
        return movieList;
    }else{
        let movie;
        movie = movieList.find(movie => movie.id === pID);
        return movie;   
    }
}

function pushData(pMovie){
    let movieList = movieDataBase;
    let numOfListElements = movieList.length;
    let lastMovieId = movieList[numOfListElements-1].id;
    pMovie.id = lastMovieId++;
    data.push(pMovie);
}

function deleteData(pID){
    let isDeleted = false;
    const deletedMovie = data.find(movie => movie.id === parseInt(pID));
    if(deletedMovie) {
        data = data.filter(movie => movie.id !== parseInt(pID));
        isDeleted = true;
    }
    return isDeleted;
}

function updateData(pID, pData){
    let index = data.findIndex(movie => movie.id === parseInt(pID));
    if (index>-1){
        data[index] = pData;
        return true;
    }
    return false;
}

module.exports = {getData, pushData, deleteData, updateData};