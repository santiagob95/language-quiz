const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orthographyHighscoreSchema =new Schema({
    username: {type: String, required: true }, 
    ownerID: {type: String, required: true, },
    score:{type: Number,  required:true}
}, {
    timestamps: true,
});

const orthographyHighscore =  mongoose.model('orthographyHighscore',orthographyHighscoreSchema);

module.exports = orthographyHighscore;