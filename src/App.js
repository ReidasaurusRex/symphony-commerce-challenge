import React, { Component } from 'react';
import ProductList from './ProductList'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Extras</h1>
        <p>Purchase FIJI Water Accessories ranging from Signature Silver Sleeves to FIJI Water Car Cup Holders. Accessorize your FIJI Water today!</p>
        <ProductList />
      </div>
    );
  }
}

export default App;
