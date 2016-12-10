import React, { Component } from 'react';
import Product from "../Product";
import renderer from 'react-test-renderer';

test('Product renders name, price, and image from props', () => {
  const product = {
    name: "Product 1",
    price: 100,
    image: "image-cdn.symphonycommerce.com/images/sites/fijiwater/1424736511908_6pack_straw_image_1.400w.jpg"
  }

  const component = renderer.create(
    <Product name={product.name} price={product.price} image={product.image} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});