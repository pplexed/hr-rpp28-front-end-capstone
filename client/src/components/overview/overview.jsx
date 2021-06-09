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
      defaultPrice: 0,
      productOverview: '',
      features: [{
        feature: '',
        value: '',
      }],
      results: [{
        style_id: 0,
        name: '',
        original_price: 0,
        sale_price: 0,
        default: true,
        photos: [{
          thumbnail_url: '',
          url: '',
        }],
        skus: {},
      }],
      styleChosen: 0,
    };
    this.updateProductState = this.updateProductState.bind(this);
    // () => this.updateProductState();
  }

  componentDidMount() {
    // this.setState(sampleProductInfo);
    // this.setState(sampleStyleInfo);
    // this.updateProductState();
    // () => this.updateProductState()
    //   .then
    //   console.log('this.state: ', this.state);
    try {
      this.updateProductState();
    } catch (error) {
      console.error(error);
    }
  }

  onChange(e) {
    // may need 1) conditional logic 2) another onChange on lower lvl 3) change to track spec comp
    this.setState({
      styleChosen: e.target.value,
    });
  }

  updateProductState() {
    var context = this;
    return axios.get('/getOneProduct')
      .then(function ({ data }) {
        context.setState(data);
      })
      .catch(function (error) {
        console.log('client axios error: ', error);
      });
  }

  render() {
    const {
      id,
      name,
      slogan,
      description,
      category,
      defaultPrice,
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
            <div id="defaultPrice">{ defaultPrice }</div>
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
