import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import RelatedProductList from './RelatedItemsList.jsx';
import OutfitList from './OutfitList.jsx';

class RelatedProductsMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
    };
  };

  componentDidMount() {
    // const { product_id } = this.props.product_id;
    const product_id = 22134;
    console.log('product_id in CDM relatedMain', product_id);
    axios.get(`relatedItems/products/?product_id=${product_id}&flag=related`)
      .then(({ relatedIds }) => {
        // This block can be replaced with just a set state call?
        let relatedIdArray = [];
        console.log('relatedIds: ', relatedIds);
        relatedIds.forEach((id) => {
          relatedIdArray.push(id);
        });
        this.setState({
          relatedProducts: relatedIdArray,
        });
      })
      .catch((err) => {
        console.log('Error fetching Related Product IDs: ', err);
      });
  }

  render() {
    const { relatedProducts } = this.state;
    const { product_id, updateProduct } = this.props;
    return (
      <RelatedModuleWrap id="relatedModuleWrap">
        <div>
          <h3>Related items you may also like</h3>
        </div>
        <ListWrap>
          <RelatedProductList
            product_id={product_id}
            relatedProducts={relatedProducts}
            updateProduct={updateProduct}
          />
        </ListWrap>
        <div>
          <h3>Build your perfect outfit here</h3>
        </div>
        <ListWrap>
          <OutfitList
            parentId={product_id}
            updateProduct={updateProduct} />
        </ListWrap>
      </RelatedModuleWrap>

    );
  }
}

export default RelatedProductsMain;

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
