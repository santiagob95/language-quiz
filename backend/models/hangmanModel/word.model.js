const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HangmanWord =new Schema({
    
    word: {type: String, required:true}
    
})

const hangmanWord =  mongoose.model('hangmanWord',HangmanWord);

module.exports = hangmanWord;