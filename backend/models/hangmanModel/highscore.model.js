const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hangmanHighscoreSchema =new Schema({
    username: {type: String, required: true }, 
    ownerID: {type: String, required: true, },
    score:{type: Number,  required:true}
}, {
    timestamps: true,
});

const hangmanHighscore =  mongoose.model('hangmanHighscore',hangmanHighscoreSchema);

module.exports = hangmanHighscore;