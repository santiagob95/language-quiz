const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//prueba comunicacioón con front con cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); //verificar el numero de localhost, creo que el mio es 5000
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established succesfully")
})


const usersRouter = require('./routes/users');

const quizHighscoreRouter = require('./routes/quizRoute/highscores');
const quizQuestionsRouter = require('./routes/quizRoute/questions')

const hangmanWordsRoute =require('./routes/hangmanRoute/words');
const hangmanHighscoreRoute = require('./routes/hangmanRoute/highscores');

const j3ComponentRoute = require ('./routes/j3Route/j3Components');
const j3HighscoresRoute = require ('./routes/j3Route/j3Highscores');


app.use('/users',usersRouter);

//quiz
app.use('/qquestions',quizQuestionsRouter);
app.use('/qhighscores',quizHighscoreRouter);

//hangman
app.use('/hmwords',hangmanWordsRoute);
app.use('/hmhighscores',hangmanHighscoreRoute);

//juego3
app.use('/j3questions',j3ComponentRoute);
app.use('/j3highscores',j3HighscoresRoute);


app.listen(port, () => {
    console.log (`Server is running on port : ${port}`);
})