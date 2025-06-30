import React from 'react';
import { Button } from 'antd';

type MyButtonProps = {
  text: string;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
};

const MyButton: React.FC<MyButtonProps> = ({ text, type = 'primary' }) => {
  return <Button type={type}>{text}</Button>;
};

export default MyButton;
