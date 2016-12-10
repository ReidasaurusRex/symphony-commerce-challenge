import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }
}

export default ProductList;