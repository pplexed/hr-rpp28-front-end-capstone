import React from 'react';
import axios from 'axios';

class AddQuestionModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: 'Example: jackson11!',
      email: 'Why did you like the product or not?',
      question: '',
      validated: false,
      firstclicknickname: true,
      firstclickemail: true,
      show: this.props.show
    };
  }

  // componentDidMount () {
  //   this.setState({show: this.props.show});
  // }

  // componentDidUpdate(prevProps) {
  //   if(prevProps.show !== this.props.show) {
  //     this.setState({show: this.props.show});
  //     console.log('component did update called');
  //   }
  // }

  closeButtonHandler (e) {
    //close the window when the button is clicked
    this.setState({show: false});
  }

  checkInput() {
    let validateTest = this.state.nickname && this.state.email && this.state.question; 
    if (validateTest) {
      const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      let emailtest = false;
      if (this.state.email.match(regex)) {
        emailtest = true;
      }

      validateTest = validateTest && emailtest;
    }

    // validate email here
    if (!validateTest) {
      console.log('implement a warning here');
    }

    return validateTest;

    // this.setState({validated : validateTest});
  }


  submitHandler(e) {
    e.preventDefault();

    // if (this.state.validated) {
    if (this.checkInput()) {
      axios.post(`http://localhost:3000/qa/questions/`, {
        nickname: this.state.nickname,
        email: this.state.email,
        question: this.state.question
      })
        .then((response) => {
          console.log('question submitted returned with', response);
        })
        .catch((err) => {
          console.log('error in submitting question', err);
        });
    }
    else {
      console.log('error data not validated');
    }
  }

  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value });
    console.log(`change handler fired! value: ${e.target.value}`);
  }

  clickHandlerNickname(e) {
    if (this.state.firstclicknickname) {
      this.setState({
        nickname: '',
        firstclicknickname: false,
      });
    }
  }

  clickHandlerEmail(e) {
    if (this.state.firstclickemail) {
      this.setState({
        email: '',
        firstclickemail: false,
      });
    }
  }

  render() {
    if (!this.state.show) {
      return null;
    }

    return (
        <div className='modal-q' >
          <div className='modal-content-q'>

            <div className='modal-header-q'>
              <div className='modal-title-q'>Ask Your Question</div> <br></br>
              about your product []
            </div>

            <div className='modal-body-q'>
              
              {/* <form className='InputQuestion' method='POST' action='http://localhost:3000/qa/questions'> */}

              <form className='InputQuestion' onSubmit={this.submitHandler.bind(this)}> 
                <textarea rows='10' cols='50' name='question' onChange={this.changeHandler.bind(this)}>
                </textarea>
                <br></br>
                What is your Nickname?
                <br></br>
                <input type='text' onClick={this.clickHandlerNickname.bind(this)} maxLength='60' name='nickname' value={this.state.nickname}onChange={this.changeHandler.bind(this)}></input>
                <br></br>
                Your E-mail
                <br></br>
                <input type='text' onClick={this.clickHandlerEmail.bind(this)} maxLength='60' name='email' value={this.state.email} onChange={this.changeHandler.bind(this)}></input>
                <br></br>
                <br></br>
                <input type='submit' value='submit question'></input>

            </form>
            </div>

            <div className='modal-footer-q'>
              <br></br>
              <button className="button_q" onClick={this.closeButtonHandler.bind(this)}>Close</button>
            </div>
          </div>
        </div>
    );
  }
}

export default AddQuestionModal;