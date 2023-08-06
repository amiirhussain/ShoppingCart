import React, { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import { Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import '../styles/navabr.css';
import DrawerComp from './DrawerComp';
import { CartContext } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState<string>('home');
  const [open, setOpen] = useState<boolean>(false);
  const { cartItems } = useContext(CartContext);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClick = (e: { key: string }) => {
    setCurrent(e.key);
  };

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <>
      <Menu
        className="menu-bar"
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ fontSize: '17px' }}
      >
        <Menu.Item key="">
          <NavLink to="/">
            <img src={logo} style={{ width: '40px' }} />
          </NavLink>
        </Menu.Item>
        <Menu.Item key="home">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="cart">
          <NavLink to="/cart">Cart</NavLink>
        </Menu.Item>
        <Menu.Item key="about">
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
        <Menu.Item
          onClick={showDrawer}
          key="cartDrawer"
          style={{ marginLeft: 'auto' }}
        >
          <Badge count={totalQuantity}>
            <ShoppingCartOutlined
              style={{
                fontSize: '18px',
                border: '1px solid',
                padding: '10px',
                borderRadius: '50%',
              }}
            />
          </Badge>
        </Menu.Item>
      </Menu>

      <DrawerComp open={open} onClose={onClose} />
    </>
  );
};

export default Navbar;
