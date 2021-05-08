var express = require('express');
var router = express.Router();

const {getData, pushData, deleteData, updateData } = require('../services/services-movies');//FUNCTIONS MUST BE INCLUED HERE!

router.get('/', function(req, res) {
  const data = getData();
  res.status(200).json(data);
});

router.get('/:id', function (req, res) {
  const id = req.params.id;
  const data = getData(id);
  if(data){
    res.status(200).json(data);
  }
  else{
    res.status(404).send(`there is no MOVIE with ID of ${id}`);
  }
})

router.post("/", function(req, res){
  let newMovie = req.body;
  pushData(newMovie);
  res.status(200).send(`the MOVIE is recorded into our service`);
})

router.delete("/:id", function(req, res){
  const deletedMovieId = req.params.id;
  let resultStatus = deleteData(deletedMovieId);
  if(result){
    res.status(200).end();
  }else{
    res.status(404).json({
      errorMessage : 'The Movie does not exist'
    })
  }
})

router.put("/:id", function(req, res){
  const editMovieId = req.params.id;
  let editMovie = req.body;
  let resultStatus = updateData(editMovie, editMovie)
  if(resultStatus){
    res.status(200).end;
  }
  else{
    res.status(400).json({
      errorMessage : 'The Movie does not exist'
    })
  }
})

module.exports = router;
