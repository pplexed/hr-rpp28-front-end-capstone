import React from 'react';
import axios from 'axios';

import CarouselWrapper from './carouselWrapper.jsx';
import RelatedCarousel from './relatedCarousel.jsx';
import OutfitCarousel from './outfitCarousel.jsx';
import RelatedItemsList from './relatedItemsList.jsx';
import OutfitItemsList from './outfitItemsList.jsx';

class RelatedItemsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItemsData: {},
      relatedItemsStyles: {},
      isLoading: true
    };
    this.data = [];
    this.product_id = 22134;
    // this.data = {};
  }

  componentDidMount() {
    // this.setState({
    //   product_id: this.props.product_id,
    // });
    this.getRelatedItemsInfo();
  }

  componentWillUnmount() {
    this.data = [];
    this.setState = () => {return;};
  }

  getRelatedItemsInfo() {
    axios({
      method: 'get',
      url: '/relatedItems/relatedItems',
      data: {
        product_id: this.product_id,
      },
    })
      .then((res) => {
        this.setState({
          relatedItemsData: res.data,
          isLoading: false,
        });
        this.data = res.data;
      })
      .catch((err) => {
        console.log('Catch block in main component', err);
      });
  }

  getRelatedItemsStyles() {
    // Axios call, set state
    axios({
      method: 'get',
      url: 'relatedItems/styles',
      params: {
        // product_id: this.state.product_id
        product_id: this.product_id
      },
    })
      .then((res) => {
        this.setState({

        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return <div>... Related Items Loading ...</div>;
    }
    return (
      <div id="relatedItemsModule">
        <CarouselWrapper>
          <div id="relatedCarousel">
            <RelatedCarousel />
          </div>
          <div id="outfitCarousel">
            <OutfitCarousel />
          </div>
        </CarouselWrapper>

        {/* <div id="relatedItemsList">
          This is the Related Items Module
          <RelatedItemsList data={this.state.relatedItemsData} />
        </div><br />
        <div id="outfitItemsList">
          This is the Outfit items list
          <OutfitItemsList />
        </div><br />
      </div> */}
    );
  };
}

export default RelatedItemsModule;

      // return (
      //   <div>
      //     <CarouselWrapper name="Related Products" data={this.state.relatedItemsData} render={(data) => {
      //       return <RelatedCarousel data={data} currrentProduct={this.product_id} />
      //     }} />
      //     <CarouselWrapper
      //       name='Outfit'
      //       data={{}}
      //       render={(data) => {
      //         return <OutfitCarousel
      //           currentProduct={this.props.product}
      //           data={data} />;
      //       }} />
      //   </div>
      // );