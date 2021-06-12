import React from 'react';
import RelatedItemCard from './relatedItemCard.jsx';

class RelatedItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedItemsData: ['Original', 'state']
    };
    this.dataArray = [];
  }

  componentDidMount() {
    this.setState({
      relatedItemsData: this.props.data
    });
    this.dataArray = this.props.data;
    console.log('Props', this.props);
    console.log('dataArray', this.dataArray);
  }

  componentWillUnmount() {
    this.data = {};
    this.setState = () => {return;};
  }

  render() {
    console.log('render data array', this.dataArray);
    console.log('render state', this.state.relatedItemsData);
    return (
      <div id="relatedItemsList">
        This is the Related Items List
        {this.dataArray.map((item) => (<div><RelatedItemCard data={item} /></div>))}
      </div>
    );
  }
}

export default RelatedItemsList;