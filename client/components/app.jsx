import React from 'react';
import MediaWrapper from './media-wrapper';
import Checkout from './checkout';

class App extends React.Component {
  static fetchImages() {
    return fetch('/images')
      .then(res => res.json())
      .then(data => data)
      .catch(err => err);
  }

  static fetchProducts() {
    return fetch('/products')
      .then(res => res.json())
      .then(data => data.row)
      .catch(err => err);
  }

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      product: {},
      size: null,
      quantity: 1,
    };
    this.handleShoeSizeSelect = this.handleShoeSizeSelect.bind(this);
    this.handleQuantityClick = this.handleQuantityClick.bind(this);
    this.handleQuantityInput = this.handleQuantityInput.bind(this);
  }

  componentDidMount() {
    App.fetchImages()
      .then(data => this.setState({ images: data }));
    App.fetchProducts()
      .then(data => this.setState({ product: data }))
      .then(() => {
        const { product } = this.state;
        document.title = product.productName;
      });
  }

  handleShoeSizeSelect(e) {
    const shoeSize = e.target.value;
    this.setState({
      size: shoeSize,
    });
  }

  handleQuantityClick(e) {
    const val = e.target.value === 'inc' ? 1 : -1;
    console.log(val);
    const { quantity } = this.state;
    if (quantity + val === 0) {
      return false;
    }
    this.setState({
      quantity: quantity + val,
    });
  }

  handleQuantityInput(e) {
    const input = e.target.value;
    console.log(input);
    if (val < 1) {
      return false;
    }
    this.setState({
      quantity: input,
    });
  }

  render() {
    const { images, product, quantity } = this.state;
    const handlers = {
      shoeSizeSelect: this.handleShoeSizeSelect,
      handleQuantityClick: this.handleQuantityClick,
      handleQuantityInput: this.handleQuantityInput,
    };
    return (
      <div id="product-wrapper">
        <MediaWrapper
          images={images}
        />
        <Checkout
          {...product}
          handlers={handlers}
          quantity={quantity}
        />
      </div>
    );
  }
}

export default App;
