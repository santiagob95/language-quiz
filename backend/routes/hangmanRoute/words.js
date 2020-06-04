const router = require('express').Router();
let Word = require ('../../models/hangmanModel/word.model');


// quizas hay que sacar esta ruta, nadie deberia poder agregar preguntas desde la pagina, no?

router.route('/').get((req,res)=>{
    Word.find()
        .then(questions => res.json(questions))
        .catch (e => res.status(400).json('Error: ',e));
});

router.route('/add').post((req,res) =>{
    const word = req.body.word;
    
    const newQuestion = new Word ({
        word
    });

    newQuestion.save()
        .then(() => res.json('Word Added!'))
        .catch(e => res.status(400).json('Error: '+e));
});

module.exports = router;