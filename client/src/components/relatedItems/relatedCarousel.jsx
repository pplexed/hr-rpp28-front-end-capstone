import React from 'react';
import PropTypes from 'prop-types';
import RelatedItemCard from './relatedItemCard.jsx';
import RelatedItemsList from './relatedItemsList.jsx';

class RelatedCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      clickedProduct: {}
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.cardButtonClick = this.cardButtonClick.bind(this);

    this.modalRef = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.props.data === nextProps.data) || (this.state.showModal !== nextState.showModal);
  }

  componentDidUpdate() {
    if (this.state.showModal) {
      this.modalRef.current.focus();
    }
  }

  showModal(data) {
    this.setState({
      showModal: true,
      clickedProduct: data
    });
  }

  hideModal() {
    this.setState({
      showModal: false
    });
  }

  cardButtonClick(event, data) {
    this.showModal(data);
  }

  render() {
    return (
      <RelatedItemsList />
    );
  }
}

export default RelatedCarousel;
