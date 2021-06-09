import React from 'react';
import axios from 'axios';
import RelatedItemsList from './relatedItemsList.jsx';
import OutfitItemsList from './outfitItemsList.jsx';
const token = require('../../../../config.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

class RelatedItemsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
      relatedItemsData: [],
    };

    this.product_id = 22134;
    this.relatedItemsArray = [];
    this.relatedItemsData = [];
    // this.getRelatedProductsArray = this.getRelatedProductsArray.bind(this);
    // this.getRelatedProductsInfo = this.getRelatedProductsInfo.bind(this);
  }

  componentDidMount() {
    this.getRelatedProductsArray();
  }

  getRelatedProductsArray() {
    const builtUrl = url + `/products/${this.product_id}/related`;

    const options = {
      method: 'get',
      url: builtUrl,
      headers: token.AUTH
    };

    axios(options)
      .then((res) => {
        this.setState({
          relatedItems: res.data
        });
        this.relatedItemsArray = res.data;
      })
      .catch((err) => {
        console.log('Error in axios call in getRelatedProductsArray', err);
      })
      .then(() => {
        this.getRelatedProductsInfo();
      });
  }

  getRelatedProductsInfo() {
    console.log('relatedItemsArray:', this.state.relatedItems);
    for (let i = 0; i < this.state.relatedItems.length; i += 1) {
      let builtUrl = url + `/products/${this.relatedItemsArray[i]}`;

      const options = {
        method: 'get',
        url: builtUrl,
        headers: token.AUTH
      };

      axios(options)
        .then((res) => {
          this.relatedItemsData.push(res.data);
        })
        .catch((err) => {
          console.log('Error in routes/getRelatedItemsInfo:', err);
        });
      }
      this.setState({
        relatedItemsData: this.relatedItemsData
      });
    console.log('relatedItemsData:', this.state.relatedItemsData);
  }

  render () {
    return (
      <div id="relatedItemsModule">
        <div id="relatedItemsList">This is the Related Items Module
          <RelatedItemsList data={this.state} />
        </div><br></br>
        <div id="outfitItemsList">This is the Outfit items list
          <OutfitItemsList />
        </div><br></br>
      </div>
    );
  }
};

export default RelatedItemsModule;