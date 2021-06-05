import React from 'react';
import FeaturesList from './features.jsx';
import { sampleProductInfo } from '../../../../sampleDataSets';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    // default state
    this.state = {
      id: '',
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
    };
  }

  componentDidMount() {
    this.setState(sampleProductInfo);
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
          {/* this will require conditional logic, price is derived from style */}
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
        </tbody>
      </table>
    );
  }
}

export default Overview;
