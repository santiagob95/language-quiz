const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orthographycomponentSchema =new Schema({
    
    word: {type: String, required:true}
    
})

const orthographycomponent =  mongoose.model('orthographycomponent',orthographycomponentSchema);

module.exports = orthographycomponent;