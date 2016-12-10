import React, { Component } from 'react';
import './styles/Product.css';

class Product extends Component {
  render() {
    return (
      <li className="c-product">
        
        <img src={this.props.image} alt={this.props.name} className="c-product__image"/>
        
        <div className="c-product__text">
          <h3 className="c-product__name">{this.props.name}</h3>
          <p className="c-product__price">{this.props.price}</p>
        </div>
        
      </li>
    );
  }
}

export default Product;