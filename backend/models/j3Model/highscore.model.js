const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const j3HighscoreSchema =new Schema({
    username: {type: String, required: true }, 
    ownerID: {type: String, required: true, },
    score:{type: Number,  required:true}
}, {
    timestamps: true,
});

const j3Highscore =  mongoose.model('j3Highscore',j3HighscoreSchema);

module.exports = j3Highscore;