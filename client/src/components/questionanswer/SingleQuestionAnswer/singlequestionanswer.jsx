import React from 'react';
import SingleAnswerBar from './singleanswer.jsx';
import SingleQuestionBar from './singlequestion.jsx';
import listAnswers from '../listanswersexample.js';
import axios from 'axios';
import AddAnswerModal from '../QAModals/addanswermodal.jsx';






class SingleQuestionAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: this.props.question.answers,
      defaultlength: 2,
      showAModal: false,
    };
  }

  componentDidMount() {
    console.log('in Component did mount', this.props.question.answers);

  }


  showAModalHandler() {
    console.log('Event handler clicked for Show Modal Answer Window!');
    console.log('passing this into props', this.state.showAModal);
    this.setState({showAModal: !this.state.showAModal});
  }

 
  loadMoreAnswers() {
    this.setState({ defaultlength: (this.state.defaultlength + 2) });
    console.log('load more answers event handler triggered!', this.state.defaultlength);
  }

  render() {
    let answerBars = Object.keys(this.props.question.answers).slice(0, this.state.defaultlength).map(key =>  
      <tr><SingleAnswerBar answer = { this.props.question.answers[key] }/></tr>);

    // let moreAnswers = this.state.answers.slice(0, this.state.defaultlength).map(key => 
    //   <SingleAnswerBar answer={key} />);

    return (
      <div>
        <br></br>
        
        <SingleQuestionBar question={this.props.question} AModalHandler={this.showAModalHandler.bind(this)}/>

        
          
            {answerBars}
          
      

        <tr>
          
            <div>
              {/*moreAnswers*/}
            </div>
      
        </tr>

        <tr>
          
            <div onClick={this.loadMoreAnswers.bind(this)}>
              load more answers
            </div>
          
        </tr>
        <br></br>


        <tr>
          <td>
          
          <table border='1px'>
            {<AddAnswerModal qid='153661' show={this.state.showAModal} key={this.state.showAModal}/>}
          </table>
          </td>
  
        </tr>
    
      </div>
    )
  }
}

export default SingleQuestionAnswer;

//Note to self:
// in the questions get response, for each question there is a field called answers.  
// the answers field in the question object is an object of objects. 


//old return

//      <table className='question' border='1px'>
      //   <tr>
      //   <div className= 'scrollable'>
      //     <div>
      //       <SingleQuestionBar question={this.props.question} AModalHandler={this.showAModalHandler.bind(this)}/>
      //     </div>
      //     <div>
      //       {answerBars}
      //     </div>
      //     <div>
      //       {/*moreAnswers*/}
      //     </div>
      //     <div onClick={this.loadMoreAnswers.bind(this)}>
      //       load more answers
      //     </div>



      //   </div>
      //   </tr>
      //   <tr>
      //        {<AddAnswerModal qid='153661' show={this.state.showAModal} key={this.state.showAModal}/>}
      //   </tr>
      // </table>