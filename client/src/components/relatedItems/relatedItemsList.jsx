import React from 'react';
import RelatedItemCard from './relatedItemCard.jsx';

class RelatedItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedItemsData: this.props.relatedItemInfo
    };
  }

  render() {
    var relatedItemInfoMap;
    // const data = this.props.data.relatedItemsData;
    console.log('Props:', this.props.relatedItemInfo);
    if (this.props.relatedItemInfo.length > 0) {
      relatedItemInfoMap = this.props.relatedItemInfo.map((item) => {
        console.log('this is mapping');
        return <RelatedItemCard data={item} />
      });
    }


    return (
      <div id="relatedItemsList">
        This is the Related Items List
        {relatedItemInfoMap}
        </div>
    );
  }
}

export default RelatedItemsList;