import React from 'react';
import styled from 'styled-components';


const CarouselContainer extends React.Component {
  constructor(props) {
    super(props);

    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.checkScroll = this.checkScroll.bind(this);

    this.state = {
      displayScrollLeft: false,
      displayScrollRight: true,
      scrollWidth: 0
    };

    this.carouselRef = React.createRef();
  }

  scrollRight() {
    this.carouselRef.current.scrollLeft += this.carouselRef.current.firstChild.clientWidth;
    this.checkScroll;
  }

  scrollLeft() {
    this.carouselRef.current.scrollLeft -= this.carouselRef.current.firstChild.clientWidth;
    this.checkScroll;
  }

  checkScroll() {

  }

  componentDidMount() {
    if (this.carouselRef.current.children.length < 4) {
      this.setState({
        displayScrollLeft: false,
        displayScrollRight: false
      });
    }
  }

  render() {
    return (

    );
  }
};

export default CarouselContainer;