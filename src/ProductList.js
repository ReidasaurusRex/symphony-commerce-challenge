import React, { Component } from 'react';
import Product from './Product';
import $ from 'jquery';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: true
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
      }
    })
  }

  render() {
    var items;
    if (this.state.loading) {
      items = (<li>Loading</li>);
    } else {
      items = this.state.products.map(p => {
        let imageHref = "http:" + p.mainImage.ref;
        return <Product key={p.id} name={p.name} price={p.defaultPriceInCents} image={imageHref} />
      });
    }
    console.log(items);
    return (
      <ul className="c-product-list">
        {items}
      </ul>
    );
  }
}

export default ProductList;