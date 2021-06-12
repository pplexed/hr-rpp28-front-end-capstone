import React from 'react';
import listQuestions from './listquestionsexample.js';
import axios from 'axios';
import listAnswers from "./listanswersexample.js";
import AddAnswerModal from './QAModals/addanswermodal.jsx';
import AddQuestionModal from './QAModals/addquestionmodal.jsx';
import SearchQuestionBar from './SearchQuestionBar/searchquestionbar.jsx';
import SingleQuestionAnswer from './SingleQuestionAnswer/singlequestionanswer.jsx';


class AdditionalQuestionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        This is the Additional Question Bar
        <form name='additional'>
          <input type='button' value='More Answered Questions'>
          </input>
          <input type='button' value='Add a Question +' onClick={this.props.show}>
          </input>
        </form>
      </div>
    )
  }
}

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: listQuestions,
      showQModal: false,
      showAModal: false,
    }
  }

  showAModalHandler() {
    console.log('Event handler clicked for Show Modal Answer Window!');
    console.log('passing this into props', this.state.showAModal);
    this.setState({showAModal: !this.state.showAModal});
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
              <SearchQuestionBar/>
              <p>view questions</p> 
              {this.state.questions.results.map((question) => <SingleQuestionAnswer question={question} AModalHandler={this.showAModalHandler.bind(this)}/>)}
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
          {<AddAnswerModal qid='1' show={this.state.showAModal} key={this.state.showAModal}/>}
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