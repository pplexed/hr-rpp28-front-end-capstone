import React from 'react';
import axios from 'axios';
import Photobar from '../Photobar/photobar.jsx';

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
        ------****THIS IS THE SINGLE ANSWER BAR****------
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

export default SingleAnswerBar;