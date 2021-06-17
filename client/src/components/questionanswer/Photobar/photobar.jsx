import React from 'react';

function Photobar(props) {


  //render () {
    if ((!props.photos) || (props.photos.length === 0)) {
      return <></>;
    }
<<<<<<< HEAD

    // console.log('this photo array', this.props.photos[0]);
=======
    //console.log('this photo array', this.props.photos[0]);
>>>>>>> main

    return (
      <span>
        {React.Children.toArray(props.photos.map((photo, i) => <img className='tomphotobar' src={photo} key={i}></img>))}
      </span>
    )
  //}
}

export default Photobar;

//removed photo.url

{/* React.Children.toArray(
  employees.map((employee, i) => (
      <div className="card">
          <p>Name: {employee.name}</p>
          <p>Lastname: {employee.name} </p>
      <img src={employee.imageSrc} alt={employee.name} />
  </div>
  ));
); */}