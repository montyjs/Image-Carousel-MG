import React from 'react';
import PropTypes from 'prop-types';
import ShoeSizeSelect from './checkoutSubComponents/shoeSizeSelect';
import CheckoutQuantity from './checkoutSubComponents/checkoutQuantity';
import ShippingOptions from './checkoutSubComponents/shippingOptions';
import BuyButtons from './checkoutSubComponents/buyButtons';

const Checkout = ({
  productName, companyName, itemNumber, color, price, rating, noRatings, shoeSizes,
}) => (
  <div className="checkout-wrapper">
    <div className="company">
      <a href="https://rei.com">
        { companyName }
      </a>
    </div>
    <div className="product-name">
      <h1>
        { productName }
      </h1>
    </div>
    <div className="product-info-row">
      <div className="stars">
        add some starz
      </div>
      <div className="no-ratings">
        { `${rating}(${noRatings})` }
      </div>
      <div className="item-number">
        { `item #${itemNumber}` }
      </div>
    </div>
    <div className="product-current-price">
      { `$${price}` }
    </div>
    <div className="message-wrapper">
      <button type="button" className="product-shipping-button">
        <span>
          {/* The non-solid truck is not included in the free version of font-awesome */}
          <i className="fas fa-truck" />
        </span>
        This item ships for FREE!
      </button>
      <p className="price-messaging">
        <b>Members save 20%</b>
        {' '}
on one eligible full-price item with code
        {' '}
        <b>ANNV19</b>
        {' '}
thru May 27.
        {' '}
        <span className="details-link">Details</span>
      </p>
    </div>
    <div className="color-wrapper">
      { `Color: ${color.slice(0, 1).toUpperCase() + color.slice(1)}` }
      <img src="https://rei.com/media/4f72b233-00f4-449b-b3c8-c338b526cb05?size=60" className="shoe-thumbnail" alt="shoe-thumbnail" />
    </div>
    <ShoeSizeSelect shoeSizes={shoeSizes} />
    <CheckoutQuantity />
    <hr />
    <ShippingOptions />
    <BuyButtons />
  </div>
);

Checkout.propTypes = {
  productName: PropTypes.string,
  companyName: PropTypes.string,
  itemNumber: PropTypes.number,
  color: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.string,
  noRatings: PropTypes.number,
  shoeSizes: PropTypes.array,
};

Checkout.defaultProps = {
  productName: '',
  companyName: '',
  itemNumber: 0,
  color: '',
  price: '80.00',
  rating: '5',
  noRatings: 0,
  shoeSizes: [42, 42, 42],
};

export default Checkout;
