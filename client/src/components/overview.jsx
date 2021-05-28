import React from "react";


class Overview extends React.Component {

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
              <div>This is the overview module</div>
         </th>
        </tr>
      </table>
    )
  }
}



export default Overview;