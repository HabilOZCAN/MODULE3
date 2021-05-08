var express = require('express');
var router = express.Router();

const {getData, pushData } = require('../services/services-rent');//FUNCTIONS MUST BE INCLUED HERE!

router.get("/", function(req, res){
  let data = getData();
  res.status(200).json(data)
})

router.post("/", function(req, res){
  let rentedMovie = req.body;
  if (pushData(rentedMovie)){
    res.status(200).send('the Movie is recorded as rented')
  }else{
    res.status(404).json({
      errorMessage: 'The Movie does not exists'
    })
  }
})

module.exports = router;
