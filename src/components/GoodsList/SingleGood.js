import React from 'react';
import PropTypes from 'prop-types';
import productImg from '../../assets/product_image_placeholder.png';
import './SingleGood.scss';

class SingleGood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, price, onAddToCart } = this.props;
    return (
      <li>
        <span className="name">{name}</span>
        <img src={productImg} className="image-size" alt="good-img" />
        <div className="foot">
          <span>{price}</span>
          <button className="add-cart-btn" onClick={onAddToCart}>
            add to cart
          </button>
        </div>
      </li>
    );
  }
}

SingleGood.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  onAddToCart: PropTypes.func,
};

export default SingleGood;
