import React from 'react';
import RelatedItemsList from './relatedItems.jsx';
import OutfitItemsList from './outfitItemsList.jsx';

class RelatedItemsModule extends React.Component {

  constructor(props) {
    super(props);

    //default state
    this.state = {};
  }

  render () {
    return (
          <div id="relatedItemsModule">
            <div id="relatedItemsList">This is the Related items list
              <RelatedItemsList />
            </div>
            <br></br>
            <div id="outfitItemsList">This is the Outfit items list
              <OutfitItemsList />
            </div>
            <br></br>
          </div>
    );
  }
};



export default RelatedItemsModule;