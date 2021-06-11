import React from 'react';
import ReactDOM from 'react-dom';

const ReviewPhotos = (props) => {
  const photoArray = props.photos;
  const photos = photoArray.map((item, index) => {
    return (
      <img key={index} className="review-photo" src={item.url}></img>
    )
  });


  return (
    <span>
      {photos}
    </span>

  )
};

export default ReviewPhotos;