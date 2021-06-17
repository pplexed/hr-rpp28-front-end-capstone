import React from "react";
import axios from 'axios';

class SearchQuestionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: 'Have a question? Search for answers…',
      initialLoad: true,
    };
  }

  updatedInput(e) {
    this.setState({ inputField: e.target.value });

    if (this.state.inputField.length >= 2) {
      // axios.get(`http://localhost:3000/qa/search/${this.state.inputField}`)
      //   .then((response) => {
      //     console.log('response: ', response);
      //   });
      // send the search term back on up to the parent
      this.props.sortBySearch(this.state.inputField);
    }
    else { //if the inputfield is less than 2, we should fire off the sort by searching with a blank term.
      this.props.sortBySearch('');
    }
  }

  clickHandler() {

    // I only want it to clear the input field at the initial load with the default text.  
    //other wise, it should do nothing
    if (this.state.initialLoad) {
      this.setState({ 
        inputField: '' ,
        initialLoad: false,
      });
    }     
    
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