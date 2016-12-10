import React, { Component } from 'react';
import ProductList from './ProductList'

class App extends Component {
  render() {
    return (
      <div className="c-app">
        <h1 className="c-app-title">Extras</h1>
        <p className="c-app-description">Purchase FIJI Water Accessories ranging from Signature Silver Sleeves to FIJI Water Car Cup Holders. Accessorize your FIJI Water today!</p>
        <ProductList />
      </div>
    );
  }
}

export default App;
