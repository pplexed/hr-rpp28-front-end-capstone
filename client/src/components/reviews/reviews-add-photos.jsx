import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';




class ReviewPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      max: 5,
      url: ''
    }
    //this bind here
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }


  //functions here

  onChangeHandler (e) {

    var formData = new FormData();

    formData.append("reviewphoto", e.target.files[0]);
    axios.post('/reviews/uploadphoto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
      // let newarray = this.state.photos;
      // newarray.push(response.data);
      this.setState({
        url: response.data['Location']
      });

      // max photos can be 5 before the button disappears
      // if (this.state.photos.length < 5) {
      //   this.setState({photos: newarray});
      // } else {
      //   this.setState({showUploadForm: false});
      // }
    });
  }

  render() {

    // changed enctype to encType based on warning.  was working with enctype
    return (
      <div>
          <form action="/reviews/uploadphoto" method="post" encType="multipart/form-data">
                  <input type="file" accept="image/*" name="photo" onChange={this.onChangeHandler} />
                  <input type="submit" value="upload" />
          </form>
          <div><img className="thumbnail" src={`${this.state.url}`} alt="Girl in a jacket" width="500" height="600" /></div>
      </div>
    )
  }
}

export default ReviewPhotos;


      // <form method='POST' action='http://127.0.0.1:3000/reviews/uploadphoto' encType='multipart/form-data'>
      //   <label for='reviewphoto'>Upload your photos!</label><br></br>
      //   <input type="file" name='reviewphoto' onChange={this.onChangeHandler} multiple></input>
      //   <input type="submit" value='Submit Photo'></input>
      // </form>