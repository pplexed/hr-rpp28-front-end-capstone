import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const CarouselContainer extends React.Component {
  constructor(props) {
    super(props);

    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.checkScroll = this.checkScroll.bind(this);

    this.state = {
      showScrollLeft: false,
      showScrollRight: true,
      scrollWidth: 0
    };

    this.ref = React.createRef();
  }

  scrollRight() {

  }

  scrollLeft() {

  }

  checkScroll() {

  }

  componentDidMount() {

  }

  render() {
    return (

    );
  }
};

CarouselContainer.propTypes = {

};

export default CarouselContainer;