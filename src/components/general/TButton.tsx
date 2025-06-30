import React from 'react';
import { Button } from 'antd';

type ButtonProps = {
  text: string;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
};

const TButton: React.FC<ButtonProps> = ({ text, type = 'primary' }) => {
  return <Button type={type}>{text}</Button>;
};

export default TButton;
