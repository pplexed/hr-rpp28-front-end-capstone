import React from 'react';
import SingleAnswerBar from './singleanswerbar.jsx';
import SingleQuestionBar from './singlequestionbar.jsx';
import AddAnswerModal from '../QAModals/addanswermodal.jsx';



class SingleQuestionAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
      defaultlength: 2,
      showAModal: false,
      question_id: '',
    };
  }

<<<<<<< HEAD
  componentDidMount() {
    // console.log('in Component did mount', this.props.question);
=======
  sortIncomingAnswers() {

    let nonSellerArray = [];
    let SellerArray = [];
    let objectOfAnswers = this.props.question.answers;
    let ArrayOfKeys = Object.keys(this.props.question.answers);

    if (ArrayOfKeys.length === 0) {
      return [];
    }

    for (var i = 0; i < ArrayOfKeys.length; i++) {


      if (!objectOfAnswers[ArrayOfKeys[i]].answerer_name) {
        // console.log('this was the length that caused the error: ', ArrayOfKeys.length);
      }

      if (objectOfAnswers[ArrayOfKeys[i]].answerer_name === "Seller") {
        SellerArray.push(objectOfAnswers[ArrayOfKeys[i]]);
      } else {
        nonSellerArray.push(objectOfAnswers[ArrayOfKeys[i]]);
      }
    }

    // sorted from highest to lowest

    nonSellerArray.sort((a, b) => b.helpfulness - a.helpfulness);
    SellerArray.sort((a, b) => b.helpfulness - a.helpfulness);

    let sortedArrayOfAnswers = [];
>>>>>>> main

    // console.log('nonsellerarray: ', nonSellerArray);
    // console.log('Sellerarray: ', SellerArray);

    sortedArrayOfAnswers = SellerArray.concat(nonSellerArray);
    // console.log('final array length: ', sortedArrayOfAnswers.length);

    return sortedArrayOfAnswers;
  }

  componentDidMount() {
    

    //let sortedArrayOfAnswers = this.sortIncomingAnswers();

    this.setState({
      answers: this.props.question.answers,
      question_id: this.props.question.question_id,
    });

  }

  showAModalHandler() {
    // console.log('Event handler clicked for Show Modal Answer Window!');
    // console.log('passing this into props', this.state.showAModal);
    this.setState({showAModal: !this.state.showAModal});
  }


  loadMoreAnswers() {
    this.setState({ defaultlength: (this.state.defaultlength + 2) });
    // console.log('load more answers event handler triggered!', this.state.defaultlength);
  }

  render() {
<<<<<<< HEAD
    let answerBars = Object.keys(this.props.question.answers).slice(0, this.state.defaultlength).map(key =>
      <tr><SingleAnswerBar answer = { this.props.question.answers[key] }/></tr>);

    // let moreAnswers = this.state.answers.slice(0, this.state.defaultlength).map(key =>
    //   <SingleAnswerBar answer={key} />);
=======

    let sortedAnswers = this.sortIncomingAnswers();

    let answerBars = sortedAnswers.slice(0, this.state.defaultlength).map(key => { 
      if (key.answerer_name === 'Seller') {
        return <div className='Seller' key={key.id+'div'}>⍟⍟★★Seller's Response★★⍟⍟ <SingleAnswerBar answer={key} key={key.id} reloadQuestionAnswer={this.props.reloadQuestionAnswer}/></div>
      } else {
        return <SingleAnswerBar answer={key} key={key.id} reloadQuestionAnswer={this.props.reloadQuestionAnswer}/>
      }
    });

    let seeMoreAnswers =  <div onClick={this.loadMoreAnswers.bind(this)}> See more answers </div>

    if (Object.keys(this.props.question.answers).length <= this.state.defaultlength) {
      seeMoreAnswers = null;
    }

    // let answerBars = Object.keys(this.props.question.answers).slice(0, this.state.defaultlength).map(key =>  
    //   <tr><SingleAnswerBar answer = {this.props.question.answers[key]} reloadQuestionAnswer={this.props.reloadQuestionAnswer}/></tr>);
>>>>>>> main

    return (
      <td>
        <br></br>
<<<<<<< HEAD

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

        <tr>

          <table border='1px'>
            {<AddAnswerModal qid={this.state.question_id} show={this.state.showAModal} key={this.state.showAModal} product_name={'passed in data:'} question_body={this.props.question.question_body}/>}
          </table>


        </tr>

      </div>
=======
        <div className='singlequestionbar'>
        <SingleQuestionBar question={this.props.question} AModalHandler={this.showAModalHandler.bind(this)}/>  
        </div>
        {answerBars}
          {seeMoreAnswers}
            {<AddAnswerModal qid={this.state.question_id} show={this.state.showAModal} key={this.state.showAModal} product_name={'passed in data:'} question_body={this.props.question.question_body}/>}
      </td>
>>>>>>> main
    )
  }
}

export default SingleQuestionAnswer;

//Note to self:
<<<<<<< HEAD
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
=======
// in the questions get response, for each question there is a field called answers.  
// the answers field in the question object is an object of objects. 
>>>>>>> main
