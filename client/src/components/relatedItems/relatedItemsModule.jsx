import React from 'react';
import axios from 'axios';

import RelatedItemsList from './relatedItemsList.jsx';
import OutfitItemsList from './outfitItemsList.jsx';

class RelatedItemsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItemsData: {},
      isLoading: true
    };

    this.product_id = 22134;
    // this.data = {};
  }

  componentDidMount() {
    this.getRelatedItemsInfo();
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.data = {};
    this.setState = () => {return;};
  }

  getRelatedItemsInfo() {
    axios({
      method: 'get',
      url: '/relatedItems',
      data: {
        product_id: this.product_id,
      },
    })
      .then((res) => {
        console.log('HERE');
        this.setState({
          relatedItemsData: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // const product_id = this.product_id;
    // const builtUrl = url + `/products/${product_id}/related`;

    // const options = {
    //   method: 'get',
    //   url: builtUrl,
    //   headers: token.AUTH
    // };

    // axios(options)
    //   .then(({ data }) => {
    //     return Promise.all(data.map((id) => {
    //       return this.getRelatedItemsData(id);
    //     }));
    //   }).then(() => {
    //     this.setState({
    //       isLoading: false,
    //       relatedItemsData: this.data
    //     });
    //   }).catch((err) => {
    //     console.log(err);
    //   });
  }

  getRelatedItemsData(id) {
    // const builtUrl = url + `/products/${id}`;
    // const options = {
    //   method: 'get',
    //   url: builtUrl,
    //   headers: token.AUTH
    // }
    // return axios(options)
    //   .then(({ data }) => {
    //     this.data[data.id] = data;
    //   });
  }

  render() {
    if (this.state.isLoading) {
      return <div>... Related Items Loading ...</div>;
    }
    return (
      <div id="relatedItemsModule">
        <div id="relatedItemsList">This is the Related items list
          <RelatedItemsList data={this.state.relatedItemsData} />
        </div><br></br>
        <div id="outfitItemsList">This is the Outfit items list
          <OutfitItemsList />
        </div><br></br>
      </div>
    );
  }
};

export default RelatedItemsModule;