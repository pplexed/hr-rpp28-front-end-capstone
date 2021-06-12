import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StyledSlideInfo from './SlideInfo.jsx';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.fetchStylesDataFromApi()
      .then((data) => {
        // if there are styles associated with the product
        if (!data.results) {
          throw Error('no styles found for product');
        }

        // move the default item to the front of the array if not already there
        const styles = data.results.sort((a) => {
          return a['default?'] ? 1 : 0;
        });
        const defaultStyle = styles[0];
        this.setState({
          styles: styles,
          defaultStyle: defaultStyle,
          loading: false
        });
      })
      .catch((error) => {
        console.error('Slide Error: ', error);
      });
    this.fetchReviewMetaDataFromApi()
      .then((data) => {
        // if there is no data with a ratings object something went wrong
        if (!data.ratings) {
          throw Error('no review metadata found for product');
        }
        let count = 0;
        let sum = 0;
        Object.entries(data.ratings)
          .map(([key, value]) => {
            return [parseInt(key), parseInt(value)];
          })
          .forEach(([key, value]) => {
            count += value;
            sum += (key * value);
          });
        this.setState({
          reviewData: {
            count: count,
            sum: sum
          }
        });
      });
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = () => {
      return;
    };
  }

  handleButtonClick(e) {
    event.preventDefault();
    this.props.cardButtonClick(e, this.props.data);
  }

  fetchStylesDataFromApi() {
    const url = `/relatedItems/relatedItems/products/${this.props.data.id}/styles`;
    return axios.get(url)
      .then((response) => {
        if (response && response.data) {
          return response.data;
        }
      }).catch(() => {
        throw Error('fetching styles data failed', this.props.data.id);
      });
  }

  fetchReviewMetaDataFromApi() {
    const url = `/api/reviews/meta?product_id=${this.props.data.id}`;
    return axios.get(url)
      .then((response) => {
        if (response && response.data) {
          return response.data;
        }
      }).catch(() => {
        throw Error('fetching review meta data failed');
      });
  }

  render() {



  }
};

export default Slide;