import React from 'react';
import axios from 'axios';
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
          <input type='button' value='More Answered Questions' onClick={this.props.moreAnsweredQuestions}>
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
      questions: { results: []},
      product_id: '', 
      showQModal: false,
      defaultlength: 2,
    }
  }

  componentDidMount() {

    axios.get('http://localhost:3000/qa/questions/')
      .then((response) => {
        console.log('this is the axios data upon load up', response.data);
        this.setState({
          product_id: response.data.product_id,
          questions: response.data,
        });
      })
      .catch(err => {
        console.log('error in loadup', err);
        this.setState({
          product_id: '22122',
        });
      });
    
  }

  showQModalHandler() {
    console.log('passed event handler clicked for show Question Modal Window!');
    console.log('passing this into props', this.state.showQModal);
    this.setState({showQModal: !this.state.showQModal});
  }

  loadMoreQuestions() {
    this.setState({defaultlength: this.state.defaultlength + 2 });
  }

  render () {

    let questionlist = this.state.questions.results.slice(0, this.state.defaultlength).map((question) => {
      return <tr><td><SingleQuestionAnswer question={question}/></td></tr>
    });

    return (
      <table width='90%' border='1px' align='left' font-family='arial'>
      <tr className='qatable'>
        <th align='left'>
              <SearchQuestionBar/>
              <p>view questions</p> 
        </th>
      </tr>

      {questionlist}

       <tr>
        <td>
          <AdditionalQuestionBar show={this.showQModalHandler.bind(this)} moreAnsweredQuestions={this.loadMoreQuestions.bind(this)}/>
        </td>
      </tr>
      <tr>
        <td>
          {/* {<AddAnswerModal qid='153661' show={this.state.showAModal} key={this.state.showAModal}/>} */}
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