import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedItemSlide from './RelatedItemSlide.jsx';

class RelatedProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedProducts: this.props.relatedProducts,
      parentInfo: '',
      slideFull: false,
      showScrollLeft: false,
      showScrollRight: true,
    };

    this.overflow = this.overflow.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    axios.get(`relatedItems/products/?productId=${productId}`)
      .then((parentData) => {
        this.setState({
          parentInfo: parentData.data,
        });
      })
      .catch((err) => {
        console.log('Error fetching product info relatedProductList/componentDidMount: ', err);
      });
  }

  scrollLeft() {
    this.setState({
      showScrollRight: true,
    });
    let car = document.getElementById('productCarousel');
    car -= 325;
    if (car.scrollLeft <= 325) {
      this.setState({
        showScrollLeft: false,
      });
    }
  }

  scrollRight() {
    this.setState({
      showScrollLeft: true,
    });
    let car = document.getElementById('productCarousel');
    car += 325;
    const remainingSpace = car.scrollWidth - car.clientWidth;
    if (car.scrollLeft >= remainingSpace - 325) {
      this.setState({
        showScrollRight: false,
      });
    }
  }

  overflow() {
    const car = document.getElementById('productCarousel');
    const isOverflowing = car.scrollWidth > car.clientWidth;
    this.setState({
      slideFull: isOverflowing,
      showScrollRight: isOverflowing
    });
  }

  render() {

    const { relatedProducts, productId } = this.props;
    const { parentInfo, showScrollLeft, showScrollRight } = this.state;
    return (
      <div>
        {showScrollRight
          ? (
            <RightButtonWrapper>
              <RightButton onClick={this.scrollRight}>
                &#8250;
              </RightButton>
            </RightButtonWrapper>
          ) : null}
        <ListContainer id="productCarousel" onLoad={this.overflow}>
          {relatedProducts.map((data) => (
            <RelatedItemSlide
              key={productId}
              productId={data}
              parent_id={productId}
              parentInfo={parentInfo}
              updateProduct={this.props.updateProduct}
            />
          ))}
        </ListContainer>
        {showScrollLeft
          ? (
            <LeftButtonWrapper>
              <LeftButton onClick={this.scrollLeft}>
                &#8249;
              </LeftButton>
            </LeftButtonWrapper>
          ) : null}
      </div>
    );
  }
}

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: scroll;
  position: relative;
  height: 415px;
  margin: 0px;
  padding: 0px;
  transitions: .5s;
  scroll-behavior: smooth;
`;

const LeftButtonWrapper = styled.div`
  position: absolute;
  left: 1%;
  top: 0px;
  padding-left: 60px;
  height: 89%;
  border: none;
  cursor: pointer;
  z-index: 0;
  outline: 0;
`;

const LeftButton = styled.button`
  position: absolute;
  left: 2%;
  top: 25%;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  z-index: 10;
  font-size: 40px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const RightButtonWrapper = styled.div`
  position: absolute;
  right: -1%;
  top: 0px;
  padding-left: 60px;
  height: 89%;
  border: none;
  cursor: pointer;
  z-index: 1;
  outline: 0;
`;

const RightButton = styled.button`
  position: absolute;
  right: 2%;
  top: 25%;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  z-index: 10;
  font-size: 40px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default RelatedProductList;
