const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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