import React, { Component } from 'react';
import Product from './Product';
import $ from 'jquery';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount() {

  }
}

export default ProductList;