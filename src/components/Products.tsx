import React, { useContext } from 'react';
import { Card, Button } from 'antd';
import { CartContext } from '../context/CartContext';
import ProductItem from '../data/ProductItem';

import '../styles/product.css';

const { Meta } = Card;

interface ProductItemType {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item: ProductItemType) => {
    addToCart({ ...item, quantity: 1 });
  };

  return (
    <div className="product-card-container">
      {ProductItem.map((item) => (
        <Card
          key={item.id}
          hoverable
          style={{ width: 300 }}
          cover={<img src={item.image} alt={item.name} />}
        >
          <Meta title={item.name} description={`$${item.price}`} />
          <Button className="btn" onClick={() => handleAddToCart(item)}>
            Add to Cart
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Products;
