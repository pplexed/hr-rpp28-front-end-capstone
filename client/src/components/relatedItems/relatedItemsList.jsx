import React from 'react';
import RelatedItemCard from 'relatedItems.jsx';

class RelatedItemsList extends React.Component {

  constructor(props) {
    super(props);

    //default state
    this.state = {};
  }

  render () {
    return (
            <div id="relatedItemsList">
              {props.relatedItemsArr.map( item => {
                return (<RelatedItemCard data={item} />);
              })}
            </div>
    );
  }
}


export default RelatedItemsList;