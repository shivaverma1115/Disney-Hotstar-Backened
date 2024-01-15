const express = require('express');

const MovieRouter = express.Router();
const { MovieModel } = require('../models/movie.model');

MovieRouter.post('/', async (req, res) => {
    const { nameVideo, type, year, season, language, description } = req.body;
    const new_movie = new MovieModel({
        nameVideo,
        type,
        year,
        season,
        language,
        description
    })
    await new_movie.save() ;
    return res.send({
        msg : 'your movie is successfully created'
    })
})

MovieRouter.get('/', async (req, res) => {
    const movies = await MovieModel.find();
    return res.send(movies);
})

module.exports = {
    MovieRouter
}