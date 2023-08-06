import React, { useContext } from 'react';
import { Drawer, Button, Space, Card, message } from 'antd';
import { CartContext } from '../context/CartContext';
import '../styles/drawer.css';

const { Meta } = Card;
interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const DrawerComp: React.FC<DrawerProps> = ({ open, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useContext(CartContext);

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 2.5,
      })
      .then(() => message.success('Loading finished', 2.5))
      .then(() => message.info('Loading finished', 2.5));
  };

  const isTotalPriceGreaterThanZero = totalPrice > 0;

  return (
    <Drawer
      title="Cart Items"
      placement="right"
      onClose={onClose}
      visible={open}
    >
      {cartItems.map((item) => (
        <Card key={item.id}>
          <p></p>
          <Meta
            title={item.name}
            description={`Total Price: $${(item.price * item.quantity).toFixed(
              2,
            )}`}
          />
          <Space size={'large'}>
            <Meta description={`Price: $${item.price}`} />
            <p>Quantity: {item.quantity}</p>
            <div className="quantity--buttons">
              <Button onClick={() => increaseQuantity(item.id)}>+</Button>
              <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
            </div>
          </Space>
          <Button type="primary" onClick={() => removeFromCart(item.id)}>
            Remove
          </Button>
        </Card>
      ))}
      <div
        style={{
          borderTop: '1px solid #ccc',
          marginTop: '16px',
          paddingTop: '16px',
        }}
      >
        <Meta description={`Total Price: $${totalPrice.toFixed(2)}`} />
      </div>
      {isTotalPriceGreaterThanZero && (
        <Button onClick={success}>Pay Now</Button>
      )}
      {contextHolder}
    </Drawer>
  );
};

export default DrawerComp;
