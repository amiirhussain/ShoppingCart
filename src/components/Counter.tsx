import { FC, useState } from 'react';
import { IProps } from '../interface';
import { Card, Button } from 'antd';
import DrawerComp from './DrawerComp';

const { Meta } = Card;
const Counter: FC<IProps> = ({ handleClick, count }) => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card hoverable style={{ width: 240 }}>
        <Meta title={'Counter App'} description="" />
        <Button onClick={handleClick}>Count</Button>
      </Card>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      {/* <DrawerComp count={count} open={open} onClose={onClose} /> */}
    </>
  );
};

export default Counter;
