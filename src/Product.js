import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="c-product">
        <h2 className="c-product__name">{this.props.name}</h2>
        <p className="c-product__price">{this.props.price}</p>
        <img src={this.props.image} alt={this.props.name} className="c-product__image"/>
      </div>
    );
  }
}

export default Product;