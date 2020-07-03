import React, { Component } from 'react';
import "simple.string.format";
import quizQuestions from './questions/allQuestions';
import quizQuestions1 from './questions/allQuestions1';
import quizQuestions2 from './questions/allQuestions2';
import lecturaQuestions from './questions/LectQuestions'
import lecturaQuestions1 from './questions/LectQuestions1'
import lecturaQuestions2 from './questions/LectQuestions2'
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.png';
import Button from './components/Button';
import Button2 from './components/Button2';
import './App.css';
import axios from 'axios'
import Header from './Header'
import Container from './ahorcadoGame/Container'
import TextoPopUp from './components/TextoPopUp'
import cat from './svg/StudyCAt.png'
import cat2 from './svg/StudyCAt2.png'



const quizzes = [
  { id: 1, title: 'Facil' },
  { id: 2, title: 'Intermedio' },
  { id: 3, title: 'Avanzado' }
];

const games = [
  { id: 1, title: 'Quiz' }, 
  { id: 2, title: 'Ahorcado' },
  { id: 3, title: 'Lectura' }
];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersQuantity: {},
      result: '',
      categorySelected:'',
      gameSelected:'',
      nameUser:'',
      passUser:''
    };

    let level = '';

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleAnswerSelectedLect = this.handleAnswerSelectedLect.bind(this);

    this.handleCategorySelected = this.handleCategorySelected.bind(this);

    this.handleGameSelected = this.handleGameSelected.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.backToInit = this.backToInit.bind(this);
    this.backToHome = this.backToHome.bind(this);

    this.currentPage = 'home';
    this.pages = this.generatePages();


  }


  generatePages() {
    return {
      'home': (
        <div className="App">
          <Header className='App-header' />
          <h1 className="titleWithEffect"> Empecemos a Jugar!</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <label>
            <input type="text" 
                   placeholder="Nombre" 
                   name='name' 
                   value={this.state.nameUser} 
                   onChange={(e) => {this.setState({nameUser: e.target.value })}} 
                   />
            </label>
            <label>
            <input  type="password" 
                    required 
                    placeholder="Contraseña"
                    name='pass' 
                    value={this.state.passUser} 
                    onChange={(e) => {this.setState({passUser: e.target.value })}}
                     />
            </label>
            <Button onClick={this.handleSubmit} > Ingresar!</Button>
          </form>
          <img src={cat} alt="" className="catstyle" />
        </div>
      ),
      'gameSelection': (
        <div className="App">
          <Header className='App-header' />
          <div>
            <h1 className="titleWithEffect"> Elige Tu Juego</h1>
            {games.map((item, index) => {
              return (
                <Button
                  key={item.id}
                  onClick={this.handleGameSelected}
                  id={item.id}
                >
                  {item.title}
                </Button>
              )
            })
            }
          </div>
          <Button2 onClick={this.backToHome}>Salir</Button2>
          <img src={cat2} alt="" className="catstyle" />
        </div>
      ),
      'ahorcado': (
        <div className='App'>
          <Header className='App-header' />
          <Container />
          <div><Button2 onClick={this.backToInit}>Volver</Button2> </div>
          <h1> </h1>
        </div>
      ),


      'levelSelection': (
        <div className="App">
          <Header className='App-header' />
          <div>
            <h1 className="titleWithEffect"> Elige Tu Nivel</h1>
            {quizzes.map((item, index) => {
              return (
                <Button
                  key={item.id}
                  onClick={this.handleCategorySelected}
                  id={item.id}
                >
                  {item.title}
                </Button>
              )
            })
            }
          </div>
          <div><Button2 onClick={this.backToInit}>Volver</Button2> </div>
          <h1> </h1>
        </div>
      ),
      'quest': (
        <div className="App">
          <Header className='App-header' />
          {this.renderQuiz()}
          <div><Button2 onClick={this.backToInit}>Volver</Button2> </div>
          <h1> </h1>
        </div>),
      'quest-lect': (
        <div className="App">
          <Header className='App-header' />

          {this.renderQuizLect()}
          <div><Button2 onClick={this.backToInit}>Volver</Button2> </div>
          <h1> </h1>

        </div>),
      'obtainResults': (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Juego de Lengua</h1>
          </div>
          <center>{this.renderResult()}</center>
          <Button2 onClick={this.backToInit}>Volver a Jugar!</Button2> </div>
      ),
      // 'previo':(
      //   <div className="App">
      //   <Header className='App-header'/>
      //     {!this.comencemosButton &&
      //       <Button onClick={this.comencemosButton=true}>¡Comencemos!</Button>
      //     }
      //     {this.comencemosButton &&
      //         <div>
      //           {this.submitLevel()}
      //         </div>
      //     }</div>
      //              ),


    }
  }



  componentDidMount() {


    if (this.state.gameSelected === games[0].title) {

      if (this.level === quizzes[0].title) {
        const mixedAnswers = quizQuestions.map(question =>
          this.mixQuestions(question.answers)
        );
        this.setState({
          question: quizQuestions[0].question,
          answerOptions: mixedAnswers[0]
        });
      }
      if (this.level === quizzes[1].title) {
        const mixedAnswers = quizQuestions1.map(question =>
          this.mixQuestions(question.answers)
        );
        this.setState({
          question: quizQuestions1[0].question,
          answerOptions: mixedAnswers[0]
        });
      }
      if (this.level === quizzes[2].title) {
        const mixedAnswers = quizQuestions2.map(question =>
          this.mixQuestions(question.answers)
        );
        this.setState({
          question: quizQuestions2[0].question,
          answerOptions: mixedAnswers[0]
        });
      }




    }
    if (this.state.gameSelected === games[2].title) {

      if (this.level === quizzes[0].title) {
        const mixedAnswers = lecturaQuestions.map(question =>
          this.mixQuestions(question.answers)
        );
        this.setState({
          question: lecturaQuestions[0].question,
          answerOptions: mixedAnswers[0]
        });
      }
      if (this.level === quizzes[1].title) {
        const mixedAnswers = lecturaQuestions1.map(question =>
          this.mixQuestions(question.answers)
        );
        this.setState({
          question: lecturaQuestions1[0].question,
          answerOptions: mixedAnswers[0]
        });
      }
      if (this.level === quizzes[2].title) {
        const mixedAnswers = lecturaQuestions2.map(question =>
          this.mixQuestions(question.answers)
        );
        this.setState({
          question: lecturaQuestions2[0].question,
          answerOptions: mixedAnswers[0]
        });
      }




    }
  }






  mixQuestions(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      if (this.level === quizzes[0].title) { setTimeout(() => this.setNextQuestion(), 500); }
      if (this.level === quizzes[1].title) { setTimeout(() => this.setNextQuestion1(), 500); }
      if (this.level === quizzes[2].title) { setTimeout(() => this.setNextQuestion2(), 500); }
    } else {
      setTimeout(() => this.setResults(this.obtainResults()), 500);
    }

  }

  handleAnswerSelectedLect(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < lecturaQuestions.length) {
      if (this.level === quizzes[0].title) { setTimeout(() => this.setNextQuestionLect(), 500); }
      if (this.level === quizzes[1].title) { setTimeout(() => this.setNextQuestionLect1(), 500); }
      if (this.level === quizzes[2].title) { setTimeout(() => this.setNextQuestionLect2(), 500); }
    } else {
      setTimeout(() => this.setResults(this.obtainResults()), 500);
    }

  }
  //     handleCategorySelected(event) {
  //     this.setState({ categorySelected: quizzes[event.currentTarget.id-1].title }, () => 
  //     console.log(this.state.categorySelected));
  // }


  handleCategorySelected(event) {
    this.setState({ categorySelected: quizzes[event.currentTarget.id - 1].title });
    this.level = quizzes[event.currentTarget.id - 1].title;
    console.log(this.level + "level")
    this.componentDidMount();
    if (this.state.gameSelected === games[0].title) { //quiz
      this.currentPage = 'quest';
    } else if (this.state.gameSelected === games[1].title) { //Juego 2
      this.currentPage = 'ahorcado';
    } else if (this.state.gameSelected === games[2].title) { //Juego 3
      this.currentPage = 'quest-lect';
    }
    else {
      this.currentPage = '';
    }
  }


  handleGameSelected(event) {
    this.setState({ gameSelected: games[event.currentTarget.id - 1].title });
    this.currentPage = 'levelSelection';


  }
  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersQuantity: {
        ...state.answersQuantity,
        [answer]: (state.answersQuantity[answer] || 0) + 1
      },
      answer: answer,


    }));
    //console.log(answer);
  }

  setNextQuestionLect() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: lecturaQuestions[counter].question,
      answerOptions: lecturaQuestions[counter].answers,
      answer: '',
    });


  }

  setNextQuestionLect1() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: lecturaQuestions1[counter].question,
      answerOptions: lecturaQuestions1[counter].answers,
      answer: '',
    });


  }

  setNextQuestionLect2() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: lecturaQuestions2[counter].question,
      answerOptions: lecturaQuestions2[counter].answers,
      answer: '',
    });


  }
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
    });
  }
  setNextQuestion1() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions1[counter].question,
      answerOptions: quizQuestions1[counter].answers,
      answer: '',
    });
  }
  setNextQuestion2() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions2[counter].question,
      answerOptions: quizQuestions2[counter].answers,
      answer: '',
    });
  }
  obtainResults() {
    const answersQuantity = this.state.answersQuantity;
    return ('Haz logrado responder {0} preguntas correctamente de {1}'.format(answersQuantity["correct"] ? answersQuantity["correct"] : 0, quizQuestions.length));
  }

  setResults(result) {
    this.setState({ result: result })
  }







  renderQuizLect() {


    if (this.state.result) {
      this.currentPage = 'obtainResults';
    }

    return (


      <div className="App">
        <div> <TextoPopUp levelselected={this.level} /></div>}

        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelectedLect}
        />
      </div>
    )
  }





  renderQuiz() {


    if (this.state.result) {
      this.currentPage = 'obtainResults';
    }

    return (
      <div className="App">

        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    )
  }



  renderResult() {
    return <Result quizResult={this.state.result} />;
  }


  backToInit(event) {
    this.currentPage = 'gameSelection';
    event.preventDefault();
    this.setState({
      counter: 0,
      questionId: 1,
      question: ' ',
      answerOptions: [],
      answer: '',
      answersQuantity: {},
      gameSelected: "Ninguno",

      result: '',
      categorySelected:'',
      nameUser:'',
      passUser:''});

  }

  backToHome(event) {
    this.currentPage = 'home';
    event.preventDefault();
    this.setState({
      counter: 0,
      questionId: 1,
      question: ' ',
      answerOptions: [],
      answer: '',
      answersQuantity: {},
      gameSelected: "Ninguno",

      result: '',
      categorySelected: '',
      nameUser: ''
    });



  }
  handleSubmit(event) {
    this.currentPage = 'gameSelection';
    this.setState({ nameUser: event.target.value });
    event.preventDefault();
    this.setState({username: this.state.nameUser});
    this.setState({pass: this.state.passUser});

    let config = {
      headers: {
        'Access-Control-Allow-Origin':'http://localhost:3000',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
      }
    }

    //el prevent default no funca, no se porque. Pero con este if evitamos que avance, pero queda el boton apretado, bug?
     if(this.state.nameUser !==''){

        console.log(this.state.nameUser);
        console.log(this.state.passUser);

        axios.post(
          'http://localhost:5000/users/add',
          {
              username: this.state.nameUser,
              password: this.state.passUser,
          },
          {config}
          ).then(response => {
              console.log("Success ========>", response);
              this.currentPage='gameSelection';
          })
          .catch(error => {
              console.log("Error ========>", error);
          })

    }
   
    };

  render() {
    this.pages = this.generatePages();
    return this.pages[this.currentPage];
  }
}

export default App;
