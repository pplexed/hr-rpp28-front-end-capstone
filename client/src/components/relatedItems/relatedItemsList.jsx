import React from 'react';
import RelatedItemCard from './relatedItemCard.jsx';

class RelatedItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedItems: this.props.relatedItemsArray,
      relatedItemsData: this.props.relatedItemsData
    };
  }

  render() {
    return (
      <div id="relatedItemsList">
        This is the Related Items List
        {this.state.relatedItemsData.map((item) => <RelatedItemCard relatedItemData={item} />)}
      </div>
    );
  }
}

export default RelatedItemsList;