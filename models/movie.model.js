const mongoose = require('mongoose');


const MovieSchema = mongoose.Schema({
    nameVideo: { type: String, require },
    movieImg: { type: String, require },
    type: { type: String, require },
    year: { type: Number, require },
    season: { type: Number, require },
    language: { type: Number, require },
    description: { type: String, require },
})
const MovieModel = mongoose.model('movie', MovieSchema);
module.exports = {
    MovieModel
}