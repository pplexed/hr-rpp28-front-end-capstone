import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import RelatedItemsList from './RelatedItemsList.jsx';
import OutfitList from './OutfitList.jsx';

class RelatedMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
    };
    this.getRelatedIds = this.getRelatedIds.bind(this);
  }

  componentDidMount() {
    this.getRelatedIds();
  }

  getRelatedIds() {
    const product_id = 22134;
    axios.get(`relatedItems/products/?product_id=${product_id}&flag=related`)
      .then((relatedIds) => {
        this.setState({
          relatedProducts: relatedIds.data,
        });
      })
      .catch((err) => {
        console.log('Error fetching Related Product IDs: ', err);
      });
  }

  render() {
    const { relatedProducts } = this.state;
    const { product_id } = this.props;
    return (
      <RelatedModuleWrap id="relatedModuleWrap">
        <div>
          <h3>Related items you may also like</h3>
        </div>
        <ListWrap>
          <RelatedItemsList
            product_id={product_id}
            relatedProducts={relatedProducts}
          />
        </ListWrap>
        <div>
          <h3>Build your perfect outfit here</h3>
        </div>
        <ListWrap>
          <OutfitList
            parentId={product_id}
          />
        </ListWrap>
      </RelatedModuleWrap>

    );
  }
}

const RelatedModuleWrap = styled.div`
padding: 5px 40px 0px 40px;
display: flex;
flex-direction: column;
justify-content: center;
margin: 10px auto;
max-width: 1200px;
`;

const ListWrap = styled.div`
margin: 10px 0px 0px;
position: relative;
width: 100%;
`;

export default RelatedMain;
