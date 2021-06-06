import React from 'react';
import Skus from './skus.jsx';

const Styles = (props) => {
  console.log('current styles props:', props);
  const styleOptions = props.results.map((result) =>
    <option value={result.style_id}>{result.name}</option>,
  );
  return (
    <div>
      Choose a style for a closer look:
      <select onChange={props.pickedStyle}>
        {styleOptions}
      </select>
    </div>
  );
  // return null;
};

export default Styles;
