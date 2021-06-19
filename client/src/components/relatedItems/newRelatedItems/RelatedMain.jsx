import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import RelatedProductList from './RelatedItemsList.jsx';
import OutfitList from './OutfitList.jsx';

class RelatedProductsMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [],
    };
    this.getRelatedIds = this.getRelatedIds.bind(this);
  };



  componentDidMount() {
    // const { product_id } = this.props.product_id;
    // const product_id = 22134;
    // console.log('product_id in CDM relatedMain', product_id);
    // axios.get(`relatedItems/products/?product_id=${product_id}&flag=related`)
    //   .then((relatedIds) => {
    //     // This block can be replaced with just a set state call?
    //     let relatedIdArray = [];
    //     console.log('relatedIds: ', relatedIds.data);
    //     relatedIds.data.forEach((id) => {
    //       relatedIdArray.push(id);
    //     });
    //     console.log('RealtedArray:', relatedIdArray);
    //     wierdStuff(relatedIdArray);
    //     // this.setState({
    //     //   relatedProducts: relatedIds.data,
    //     // });
    //     // console.log('STATE: ', this.state.relatedProducts);
    //   })
    //   .catch((err) => {
    //     console.log('Error fetching Related Product IDs: ', err);
    //   });
    this.getRelatedIds();
  }

  getRelatedIds() {
    const product_id = 22134;
    axios.get(`relatedItems/products/?product_id=${product_id}&flag=related`)
      .then((relatedIds) => {
        let relatedIdArray = [];
        console.log('relatedIds: ', relatedIds.data);
        // relatedIds.data.forEach((id) => {
        //   relatedIdArray.push(id);
        // });
        // console.log('RealtedArray:', relatedIdArray);
        this.setState({
          relatedProducts: relatedIds.data
        });
        console.log('STATE: ', this.state);
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
            updateProduct={updateProduct}
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

export default RelatedProductsMain;
