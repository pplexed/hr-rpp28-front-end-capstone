import React from 'react';
import axios from 'axios';

import FeaturesList from './features.jsx';
import Styles from './styles.jsx';

import { sampleProductInfo, sampleStyleInfo } from '../../../../sampleDataSets';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    // default state
    this.state = {
      id: 22125,
      name: '',
      slogan: '',
      description: '',
      category: '',
      price: '65.00',
      productOverview: '',
      features: [{
        feature: '',
        value: '',
      }],
      results: [{
        style_id: 0,
        name: '',
        original_price: '0.00',
        sale_price: '0.00',
        default: true,
        photos: [{
          thumbnail_url: '',
          url: '',
        }],
        skus: {},
      }],
      styleChosen: 0,
    };
  }

  componentDidMount() {
    // this.setState(sampleStyleInfo);
    const productId = this.state.id;
    try {
      this.updateProductState(productId);
    } catch (error) {
      console.error(error);
    }
    try {
      // console.log('trying to get style');
      this.updateStyleState(productId);
    } catch (error) {
      console.error(error);
    }
    // const defaultStylePrice = this.state.results[0].original_price;
    // console.log('original results array: ', this.state.results);
    // this.setState({ price: defaultStylePrice });
  }

  onChange(e) {
    this.setState({
      styleChosen: e.target.value,
    });
    this.updatePriceBasedOnStyle(e.target.value);
  }

  updateProductState(productId) {
    var context = this;
    return axios.get('/overview/getoneproduct?productId=' + productId)
      .then(function ({ data }) {
        context.setState(data);
      })
      .catch(function (error) {
        //console.log('client axios error: ', error);
      });
  }

  updateStyleState(productId) {
    var context = this;
    return axios.get('/overview/getproductstyle?productId=' + productId)
      .then(function ({ data }) {
        context.setState(data);
      })
      .catch(function (error) {
        //console.log('client axios error: ', error);
      });
  }

  updatePriceBasedOnStyle(styleId) {
    const styles = this.state.results;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].style_id.toString() === styleId) {
        this.setState({
          price: styles[i].original_price,
        });
        console.log('price should now be: ', styles[i].original_price);
      }
    }
  }

  render() {
    const {
      id,
      name,
      slogan,
      description,
      category,
      price,
      productOverview,
      features,
      results,
    } = this.state;
    return (
      <table border="1px">
        <thead>
          <tr>
            <th>
              <div>This is the overview module</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div id="category">{ category }</div>
          </tr>
          <tr>
            <div id="name">{ name }</div>
          </tr>
          {/* this will require passing back up through components, price is derived from style */}
          <tr>
            <div id="price">{ price }</div>
          </tr>
          <tr>
            <div id="slogan">{ slogan }</div>
          </tr>
          <tr>
            <div id="productOverview">{ productOverview }</div>
          </tr>
          <tr>
            <div id="description">{ description }</div>
          </tr>
          <tr>
            <FeaturesList featuresList={features} />
          </tr>
          <tr className="style-picker">
            <Styles results={results} styleChosen={this.state.styleChosen} pickedStyle={this.onChange.bind(this)}/>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Overview;
