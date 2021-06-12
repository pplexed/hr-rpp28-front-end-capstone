import React from "react";
import axios from 'axios';

class SearchQuestionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: 'Have a question? Search for answers…',
    };
  }

  updatedInput(e) {
    this.setState({ inputField: e.target.value });

    if (this.state.inputField.length > 1) {
      axios.get(`http://localhost:3000/qa/search/${this.state.inputField}`)
        .then((response) => {
          console.log('response: ', response);
        });
    }
  }

  clickHandler() {
    this.setState({ inputField: '' });
  }
 
  render() {
    return (
      <div>Search Question
        <form name='questionsearchbar'>
          <input type='text' onClick={this.clickHandler.bind(this)} onInput={this.updatedInput.bind(this)} className="questionfield" value={this.state.inputField}></input>
        </form>
      </div>
    )
  }
}

export default SearchQuestionBar;