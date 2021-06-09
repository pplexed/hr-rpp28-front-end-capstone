import React from 'react';
import RelatedItemCard from './relatedItemCard.jsx';

class RelatedItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedItems: this.props.data.relatedItems,
      relatedItemsData: this.props.data.relatedItemsData
    };
  }

  render() {
    return (
      <div id="relatedItemsList">
        This is the Related Items List
        {this.props.data.relatedItemsData.map((item) => <RelatedItemCard data={item} />)}
      </div>
    );
  }
}

export default RelatedItemsList;