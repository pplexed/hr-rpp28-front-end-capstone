import React from "react";
import axios from 'axios';
import Photobar from '../Photobar/photobar.jsx';



class UploadPhotos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      max: 5,
      showErrorMessage: false,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {

  }

  onChangeHandler (e) {
    console.log('photo load handler fired');
    console.log(e.target.files);


    var formData = new FormData();

    formData.append("answerpic", e.target.files[0]);
    axios.post('http://localhost:3000/qa/uploadphoto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
      console.log('returned hyperlink', response.data)
      let newarray = this.state.photos;
      newarray.push(response.data);
      this.setState({photos: newarray});
    });


  }

  render() {

    return (
      <div>
        <Photobar photos={this.state.photos}/>
        <form method='POST' action='http://127.0.0.1:3000/qa/uploadphoto' enctype='multipart/form-data'>
          <label for='answerpic'>Upload your photos!</label><br></br>
          <input type="file" name='answerpic' onChange={this.onChangeHandler} multiple></input>
          <input type="submit" value='Submit Photo'></input>
        </form>
      </div>
    )
  }
}





class AddAnswerModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qid: this.props.qid,
      nickname: 'Example: jack543!',
      email: 'Example: jack@email.com',
      question: '',
      validated: false,
      firstclicknickname: true,
      firstclickemail: true,
      show: this.props.show
    };
  }

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

    //validate email here
    if (!validateTest) {
      console.log('Invalid Email Entered');
    }

    return validateTest;

    //this.setState({validated : validateTest});
  }


  submitHandler(e) {
    e.preventDefault();

    //if (this.state.validated) {
    if (this.checkInput()) {
      axios.post(`http://localhost:3000/qa/questions/${this.state.qid}/answers`, {
        nickname: this.state.nickname,
        email: this.state.email,
        question: this.state.question
      })
      .then((response) => {
        console.log('answer submitted returned with', response.data);
      })
      .catch((err) => {
        console.log('error in submitting answer', err);
      })
    }
    else {
      console.log('error data not validated');
    }
  }


  changeHandler(e) {
     this.setState({[e.target.name]: e.target.value});
     console.log(`change handler fired! value: ${e.target.value}`);
     
  }

  clickHandlerNickname(e) {
    if (this.state.firstclicknickname) {
      this.setState({
        nickname: '',
        firstclicknickname: false
      });
    }
  }

  clickHandlerEmail(e) {
    if (this.state.firstclickemail) {
      this.setState({
        email: '',
        firstclickemail: false
      });
    }
  }

  render() {

    if (!this.state.show) {
      return null;
    }

    return (
        <div className='modal-a' >
          
          <div className='modal-content-a'>

            <div className='modal-header-a'>
              <div className='modal-title-a'>Submit your answer</div> <br></br>
              Insert data about product name [] and question body []
            </div>

            <div className='modal-body-a'>
              
              {/* <form className='InputQuestion' method='POST' action='http://localhost:3000/qa/questions'> */}

              <form className='SubmitAnswer' onSubmit={this.submitHandler.bind(this)}> 
              your answer <br></br>
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
                <input type='submit' value='submit answer'></input>

            </form>
            <br></br>
            </div>


            <div className='uploadphoto'>
              <UploadPhotos/>
            </div>

            <div className='modal-footer-a'>
              <br></br>
              <button className="button_a" onClick={this.closeButtonHandler.bind(this)}>Close</button>
            </div>
          </div>
        </div>
    )
  }
}

export default AddAnswerModal;