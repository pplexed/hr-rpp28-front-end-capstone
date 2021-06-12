import React from 'react';

class Photobar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    if ((!this.props.photos) || (this.props.photos.length === 0)) {
      return null;
    }
    
    console.log('this photo array', this.props.photos[0]);

    return (
      <span>
        {this.props.photos.map((photo) => <img src={photo} width="75" height="75"></img>)}
      </span>
    )
  }
}

export default Photobar;

//removed photo.url