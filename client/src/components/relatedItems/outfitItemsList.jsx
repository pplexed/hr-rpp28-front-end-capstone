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
            <div id="outfitItemsList">This is the OutfitItemsList

              <OutfitItemCard />
            </div>
    )
  }
}



export default OutfitItemsList;