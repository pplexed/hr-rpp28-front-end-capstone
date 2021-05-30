import React from 'react';
import OutfitItemCard from 'outfitItems.jsx';

class OutfitItemsList extends React.Component {

  constructor(props) {
    super(props);

    //default state
    this.state = {};
  }

  render () {
    return (
      <div id="outfitItemsList">
        {props.outfitItemsArr.map( item => {
          return (<OutfitItemCard data={item} />);
        })}
      </div>
    );
  }
}



export default OutfitItemsList;