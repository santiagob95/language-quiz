const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const j3componentSchema =new Schema({
    
    word: {type: String, required:true}
    
})

const j3component =  mongoose.model('j3component',j3componentSchema);

module.exports = j3component;