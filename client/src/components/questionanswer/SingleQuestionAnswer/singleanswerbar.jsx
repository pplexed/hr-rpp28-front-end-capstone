import React from 'react';
import axios from 'axios';
import Photobar from '../Photobar/photobar.jsx';

class SingleAnswerBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.answer;
    this.state.reported = false;
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
      this.setState({reported: true});
    })
  }

  render () {
    let notReportedTag = <span id='reportanswer' onClick = {this.handleReport.bind(this)}>Report</span>;
    let reportedTag = <span>Reported</span>

    return (
      <div>
        -------------------
        <div>A: {this.state.body} </div>    
              
        
        <div>
            <span>By {this.state.answerer_name}, {this.state.date.substring(0,10)}  </span>
           
            
            <span>| helpful? </span>
            <span id='helpfulanswer' onClick={this.handleHelpful.bind(this)}>Yes({this.state.helpfulness})</span>  
            <span> | </span>
            {this.state.reported ? reportedTag : notReportedTag}
           
        </div>

        <div>
          <Photobar photos={this.state.photos}/>
        </div>
    
      </div>
    )
  }
}

export default SingleAnswerBar;