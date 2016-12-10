import React, { Component } from 'react';
import ProductList from "../ProductList";
import renderer from 'react-test-renderer';

test('Creates Product components for each each product', () => {
  const products = [
    {
      name: "Product 1",
      price: 100,
      image: "image-cdn.symphonycommerce.com/images/sites/fijiwater/1424736511908_6pack_straw_image_1.400w.jpg"
    }, {
      name: "Product 2",
      price: 200,
      image: "image-cdn.symphonycommerce.com/images/sites/fijiwater/1424736511908_6pack_straw_image_1.400w.jpg"
    }, {
      name: "Product 3",
      price: 300,
      image: "image-cdn.symphonycommerce.com/images/sites/fijiwater/1424736511908_6pack_straw_image_1.400w.jpg"
    }
  ];

  const productComponents = products.map(p => <Product name={p.name} price={p.price} image={p.image} />);

  const component = renderer.create(
    <ProductList>
      {productComponents}
    </ProductList>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});