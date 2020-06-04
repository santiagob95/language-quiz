const router = require('express').Router();
let Componente = require ('../../models/j3Model/j3component.model');


// quizas hay que sacar esta ruta, nadie deberia poder agregar preguntas desde la pagina, no?

router.route('/').get((req,res)=>{
    Componente.find()
        .then(questions => res.json(questions))
        .catch (e => res.status(400).json('Error: ',e));
});

router.route('/add').post((req,res) =>{
    const question = req.body.question;
    const answers  = req.body.answers;
    const dif = req.body.dif;
    
    const newQuestion = new Componente ({
        question,
        dif,
        answers        
    });

    newQuestion.save()
        .then(() => res.json('Componente Added!'))
        .catch(e => res.status(400).json('Error: '+e));
});

module.exports = router;