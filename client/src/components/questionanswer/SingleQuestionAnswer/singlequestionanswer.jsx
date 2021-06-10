import React from 'react';
import SingleAnswerBar from './singleanswer.jsx';
import SingleQuestionBar from './singlequestion.jsx';
import listAnswers from '../listanswersexample.js';
import axios from 'axios';


class SingleQuestionAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: this.props.question.answers,
      defaultlength: 2,
    };
  }

  componentDidMount() {
    console.log('in Component did mount', this.props.question.answers);

  }
 
  loadMoreAnswers() {
    this.setState({ defaultlength: (this.state.defaultlength + 2) });
    console.log('load more answers event handler triggered!', this.state.defaultlength);
  }

  render() {
    let answerBars = Object.keys(this.props.question.answers).slice(0, this.state.defaultlength).map(key =>  
      <SingleAnswerBar answer = { this.props.question.answers[key] }/>);

    // let moreAnswers = this.state.answers.slice(0, this.state.defaultlength).map(key => 
    //   <SingleAnswerBar answer={key} />);

    return (
      <table className='question'>
        <tr>
        <div className= 'scrollable'>
          <div>
            <SingleQuestionBar question={this.props.question} AModalHandler={this.props.AModalHandler}/>
          </div>
          <div>
            {answerBars}
          </div>
          <div>
            {/*moreAnswers*/}
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

export default SingleQuestionAnswer;

//Note to self:
// in the questions get response, for each question there is a field called answers.  
// the answers field in the question object is an object of objects. 
