import React, { Component } from 'react';
import Product from './Product';
import $ from 'jquery';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      products: [],
      loading: true;
    }
  }

  componentDidMount() {
    var url = "https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js"
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'JSON',
      success: function(data) {
        this.setState({products: data.products, loading: false})
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(url, status, err.toString());
      }.bind(this)
    })
  }
}

export default ProductList;