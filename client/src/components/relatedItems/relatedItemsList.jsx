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
    const data = this.props.data.relatedItemsData;

    console.log('DATA', data);
    console.log('wtf Array:', data[0]);
    console.log('WTF Object:', data['0']);

    return (
      <div id="relatedItemsList">
        This is the Related Items List
        {/* <RelatedItemCard data={}/> */}
      </div>
    );
  }
}

export default RelatedItemsList;