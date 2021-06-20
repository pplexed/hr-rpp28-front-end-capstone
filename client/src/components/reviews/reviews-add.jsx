import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.binds go here
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  //functions should go here

  openModal() {
    let modal = document.getElementById("addReview");
    modal.style.display = "block";
  }

  closeModal() {
    let modal = document.getElementById("addReview");
    modal.style.display = "none";

  }
  render() {
    return(
      <span>
        <button id="myBtn" onClick={this.openModal}>Add A Review +</button>
        <div id="addReview" className="modal">
          <div className="modal-content-addReview">
            <span className="close-addReview" onClick={this.closeModal}>&times;</span>
            <p>ths form would go here?</p>
          </div>
        </div>
      </span>

    )
  }
}

export default AddReview;