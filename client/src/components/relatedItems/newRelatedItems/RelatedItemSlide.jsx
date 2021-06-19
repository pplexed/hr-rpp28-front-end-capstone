import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from './Modal.jsx';
// Star Rating and average rating import or logic

class RelatedItemSlide extends React.Component {
  constructor(props) {
    super(props);

    const { parentInfo } = this.props;

    this.state = {
      parentData: parentInfo,
      productInfo: '',
      photoURL: '',
      photoLoaded: 0,
      clickModal: false,
      compareFeatures: '',
      salePrice: '',
    };

    this.newProduct = this.newProduct.bind(this);
    this.compareFeatures = this.compareFeatures.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  componentDidMount() {
    const { product_id, parent_id } = this.props;
    axios.get(`/relatedItems/products/?product_id=${product_id}`)
      .then(({ data }) => {
        console.log('data at RelatedItemSlide axios 1: ', data);
        this.setState({
          productInfo: data,
          parentFeature: parent_id.features,
          productFeature: data.features,
          photoLoaded: this.state.photoLoaded++,
        });
      })
      .catch((err) => {
        console.log('Error fetching product info for RelatedItemSlide: ', err);
      });
    axios.get(`relatedItems/products/?product_id=${product_id}&flag=styles`)
      .then(({ data }) => {
        console.log('data at RelatedItemSlide axios 2 (styles/photo):', data);
        let thumbnail = '';
        const mainProductDescription = data.results.find((product) => product['default'] === true);
        if (!mainProductDescription) {
          thumbnail = data.results[0].photos[0];
          this.setState({
            salePrice: data.results[0].salePrice,
          });
        } else {
          thumbnail =  mainProductDescription.photos[0].thumbnail_url;
          this.setState({
            salePrice: mainProductDescription.sale_price
          });
          if (thumbnail === '') {
            this.setState({
              photoLoaded: this.state.photoLoaded++,
              // Should there be a 'PHOTO NOT FOUND' gif
            });
          } else {
            this.setState({
              photoLoaded: this.state.photoLoaded++,
              photoURL: thumbnail,
            });
          }
        }
      })
      .catch((err) => {
        console.log('Error fetching photos in relatedItemSlide: ', err);
      });

    // Axios reqquest for reviews and stars
  }

  handleModalClick() {
    const { clickModal, parentFeature, productFeature } = this.state;
    this.setState({
      clickModal: !clickModal,
    });
    this.compareFeatures(parentFeature, productFeature);
  }

  compareFeatures(parentFeature, productFeature) {
    const compare = {};
    parentFeature.forEach((feature) => {
      if (feature.value === null) {
        compare[feature.feature] = '-';
      } else {
        compare[feature.feature] = feature.value;
      }
    });

    productFeature.forEach((feature) => {
      if (!compare[feature.feature]) {
        if (feature.value === null) {
          compare[feature.feature] = [];
          compare[feature.feature][1] = '-';
        } else {
          compare[feature.feature] = [];
          compare[feature.feature][1] = feature.value;
        }
      } else if (feature.value === null) {
        compare[feature.feature][1] = '-';
      } else {
        compare[feature.feature][1] = feature.value;
      }
    });

    const values = Object.values(compare);
    const keys = Object.keys(compare);
    const compareArray = [];

    for (let i = 0; i < keys.length; i++) {
      compareArray.push(values[i][0], keys[0], values[i][1]);
    }

    this.setState({
      compareFeatures: compareArray,
    });
  }

  newProduct() {
    const { product_id, updateProduct } = this.props;
    updateProduct(product_id);
  }

  render() {
    const {
      parentData,
      productInfo,
      photoURL,
      photoLoaded,
      compareFeatures,
      salePrice,
      clickModal,
    } = this.state;

    const sale = {
      color: salePrice ? 'red' : 'black',
      textDecoration: salePrice ? 'line-through' : 'none',
    };

    const loadPhoto = {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      // Should there be a default image for when images are loading?
    };

    return (
      <div>
        {
          photoLoaded < 2 && <SlideContainer style={loadPhoto} />
        }
        {
          photoLoaded === 2
          && (
            <SlideContainer>
              <ButtonWrapper>
                <CompareButton
                  onClick={this.handleModalClick}
                />
              </ButtonWrapper>
              <ImageWrapper onClick={this.newProduct}>
                <Image src={photoURL} alt={productInfo.name} />
              </ImageWrapper>
              <ProductContentWrapper style={{ fontSize: '10px'}}>{productInfo.category}</ProductContentWrapper>
              <ProductContentWrapper onClick={this.newProduct()} style={{ fontSize: '15px' }}>{productInfo.name}</ProductContentWrapper>
              <ProductContentWrapper style={sale}>${productInfo.default_price}</ProductContentWrapper>
              {salePrice ? <ProductContentWrapper style={{ fontSize: '13px' }}>{salePrice}</ProductContentWrapper> : null}
              {salePrice ? <LowerBorderDiv /> : <BorderDiv />}
            </SlideContainer>
          )
        }
        {
          clickModal
          && (
            <div>
              <Modal
                close={this.handleModalClick}
                parentName={parentData.name}
                compareName={productInfo.name}
                compareFeatures={compareFeatures}
              />
            </div>
          )
        }
      </div>
    );
  }
}

const SlideContainer = styled.div`
height: 400px;
width: 275px;
position: relative;
flex-shrink: 0;
margin: 0px 10px;
background: rgba(255,255,255,0.1);
background: linear-gradient(180deg, hsl(190,70%,99%), hsl(240,60%,100%));
&:hover {
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  bottom-border: 0px;
  cursor: pointer;
}
`;

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
object-position: 50% 0;
z-index: 0;
`;

const BorderDiv = styled.div`
border-bottom: 2px solid grey;
align: center;
width: 90%;
margin-top: 72px;
margin-left: 5%;
margin-right: 5%;
position: relative;
bottom: 0px;
`;

const LowerBorderDiv = styled.div`
border-bottom: 2px solid grey;
align: center;
width: 90%;
margin-top: 47px;
margin-left: 5%;
margin-right: 5%;
position: relative;
bottom: 0px;
`;

const ImageWrapper = styled.div`
height: 200px;
width: auto;
margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
position: absolute;
top: 0px;
right: 0px;
margin-top: 5px;
z-index: 10;
`;

const CompareButton = styled.button`
  postition: relative;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 25px;
  color: black;
  &:hover {
    color: gold;
  }
`;

const ProductContentWrapper = styled.div`
  margin: 5px 15px;
`;

export default RelatedItemSlide;
