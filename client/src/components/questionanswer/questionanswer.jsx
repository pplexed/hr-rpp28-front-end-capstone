import React from "react";
import listQuestions from './listquestionsexample.js';
import axios from 'axios';
import listAnswers from "./listanswersexample.js";
import AddAnswerModal from './QAModals/addanswermodal.jsx';
import AddQuestionModal from './QAModals/addquestionmodal.jsx';




class AdditionalQuestionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <form name='additional'>
          <input type='button' value='More Answered Questions' onClick={this.props.show}>
          </input>
          <input type='button' value='Add a Question +' onClick={this.props.show}>
          </input>
        </form>
      </div>
    )
  }
}


class SearchQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField : 'HAVE A QUESTION?  SEARCH FOR ANSWERS...'
    };
  }

  updatedInput (e) {

    this.setState({inputField: e.target.value});

    if (this.state.inputField.length > 1) {

      axios.get(`http://localhost:3000/qa/search/${this.state.inputField}`)
      .then((response) => {
        console.log('response: ', response);
      })
  
    }
  }

  clickHandler () {
    this.setState({inputField: ''});
  }
 
  render() {

    return (
      <div>Search Question
        <form name='questionsearchbar'>
          <input type='text' onClick={this.clickHandler.bind(this)} onInput={this.updatedInput.bind(this)} className="questionfield" value={this.state.inputField}>
          </input>
        </form>
      </div>
    )

  }
}

class Photobar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    if ((!this.props.photos) || (this.props.photos.length === 0)) {
      return null;
    }
    return (
      <span>
        {this.props.photos.map((photo) => <img src={photo.url} width="75" height="75"></img>)}
      </span>
    )
  }
}


class SingleQuestionBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.question;
  }

  handleHelpful = event => {
    axios.put(`http://localhost:3000/qa/questions/${this.state.question_id}/helpful`)
    .then((response) => {
      console.log('helpful question clicked, sent to server, returned with', response);
    })
    .catch((err) => {

      console.log('error in the return of reporting question helpful', err);

    })
  }

  addAnswerHandler = event => {

    console.log('add answer handler clicked!');

  }
  


  render () {
    return (
      <div>
        <td>Q: {this.state.question_body}</td>
        <td>
          <span>Helpful? </span>
          <span onClick={this.handleHelpful.bind(this)}>Yes({this.state.question_helpfulness}) </span> 
          <span onClick={this.addAnswerHandler.bind(this)}>| add answer </span>
        </td>
      </div>
    )
  }
}

class SingleAnswerBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.answer;
  }

  handleHelpful = event => {
    axios.put(`http://localhost:3000/qa/answers/${this.state.answer_id}/helpful`)
    .then((response) => {
      console.log('helpful clicked, sent to server, returned with', response);
    })
  }

  handleReport = event => {
    axios.put(`http://localhost:3000/qa/answers/${this.state.answer_id}/report`)
    .then((response) => {
      console.log('report clicked, sent to server, returned with', response);
    })
  }

  render () {
    return (
      <div>
        <td>A: {this.state.body} <br></br>
        </td>
        <tr>
          <td>
            <div>By {this.state.answerer_name}, {this.state.date.substring(0,10)}  </div>
          </td>
          <td>

          </td>
          <td>
            | helpful? <span id='helpfulanswer' onClick={this.handleHelpful.bind(this)}>Yes({this.state.helpfulness})</span>  
            | <span id='reportanswer' onClick = {this.handleReport.bind(this)}>Report</span>
          </td>
        </tr>
        <tr>
          <td>
            <Photobar photos={this.state.photos}/>
          </td>
        </tr>
      </div>
    )
  }
}

class SingleQuestionAnswer extends React.Component {
  constructor(props) {
    super(props);

    //there is a props called question
    this.state = {
      answers: listAnswers.results,
      answerBars : this.props.question.answers,
      defaultlength: 0
    };
  }

  loadMoreAnswers () {
    this.setState({defaultlength: (this.state.defaultlength + 2)});
    console.log('load more answers event handler triggered!', this.state.defaultlength);
  }

  render() {

    var answerBars = Object.keys(this.props.question.answers).map(key => 
      <SingleAnswerBar answer={this.props.question.answers[key]}/>);

    var moreAnswers = this.state.answers.slice(0, this.state.defaultlength).map(key => 
      <SingleAnswerBar answer={key}/>);

    return (

      <table className='question'>
        <tr>
        <div className= 'scrollable'>
        
          <div>
            <SingleQuestionBar question={this.props.question}/>
          </div>
          <div>
            {answerBars}
          </div>
          <div>
            {moreAnswers}
          </div>
          <div onClick={this.loadMoreAnswers.bind(this)}>
            load more answers
          </div>

        </div>
        </tr>
      </table>
    )
  }
}

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: listQuestions,
      showQModal: false,
      showAModal: false
    }
  }

  // componentDidMount() {
  //   this.setState({showQModal: false});
  // }

  showAModalHandler() {

    console.log('passed event handler clicked for show Answer Modal Window!');
    console.log('passing this into props', this.state.showQModal);
  
    this.setState({showQModal: !this.state.showAModal});

  }


  showQModalHandler() {

    console.log('passed event handler clicked for show Question Modal Window!');
    console.log('passing this into props', this.state.showQModal);
  
    this.setState({showQModal: !this.state.showQModal});

  }



  render () {
    return (
      <table width='90%' border='1px' align='left' font-family='arial'>
      <tr className='qatable'>
        <th align='left'>
              {/* <p>Questions and Answers</p> */}
              <SearchQuestion/>
              <p>view questions</p> 
              {this.state.questions.results.map((question) => <SingleQuestionAnswer question={question}/>)}
        </th>
      </tr>
      <tr>
        <td>
        
        </td>
      </tr>
       <tr>
        <td>
          <AdditionalQuestionBar show={this.showQModalHandler.bind(this)}/>
        </td>
      </tr>
      <tr>
        <td>
          <AddAnswerModal qid='1' show={this.state.showAModal} key={this.state.showAModal}/>
        </td>
      </tr>
      <tr>
          <td>
            <AddQuestionModal show={this.state.showQModal} key={this.state.showQModal}/>
          </td>
      </tr>

    </table>
    )
  }
}



export default QuestionAnswer;