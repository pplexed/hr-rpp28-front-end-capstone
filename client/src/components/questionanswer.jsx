import React from "react";


class QuestionAnswer extends React.Component {

  constructor(props) {
    super(props);

    //default state
    this.state = {};
  }

  render () {

    return (
      <table border='1px'>
      <tr>
        <th>
            <div>This is the Question Answer Module</div>
       </th>
      </tr>
    </table>
    )
  }
}



export default QuestionAnswer;