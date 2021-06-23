import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';




class ReviewPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      max: 5
    }
    //this bind here
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }


  //functions here

  onChangeHandler (e) {
    console.log('photo load handler fired');
    console.log(e.target.files);

    var formData = new FormData();

    formData.append("reviewphoto", e.target.files[0]);
    axios.post('http://localhost:3000/reviews/uploadphoto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
      console.log('returned response', response.data)
      // let newarray = this.state.photos;
      // newarray.push(response.data);

      // max photos can be 5 before the button disappears
      if (this.state.photos.length < 5) {
        this.setState({photos: newarray});
      } else {
        this.setState({showUploadForm: false});
      }
    });
  }

  render() {

    // changed enctype to encType based on warning.  was working with enctype
    return (
          <form action="/reviews/uploadphoto" method="post" enctype="multipart/form-data">
                  <input type="file" accept="image/*" name="photo" />
                  <input type="submit" value="upload" />
          </form>
    )
  }
}

export default ReviewPhotos;


      // <form method='POST' action='http://127.0.0.1:3000/reviews/uploadphoto' encType='multipart/form-data'>
      //   <label for='reviewphoto'>Upload your photos!</label><br></br>
      //   <input type="file" name='reviewphoto' onChange={this.onChangeHandler} multiple></input>
      //   <input type="submit" value='Submit Photo'></input>
      // </form>