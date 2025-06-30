import React from 'react';
import { Button } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd/es/button';

interface TButtonProps extends Omit<AntButtonProps, 'type'> {
  text?: React.ReactNode;
  children?: React.ReactNode;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  size?: 'large' | 'middle' | 'small';
  shape?: 'default' | 'circle' | 'round';
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  icon?: React.ReactNode;
  customStyle?: React.CSSProperties;
  htmlType?: 'button' | 'submit' | 'reset';
  loading?: boolean | { delay: number };
  bordered?: boolean;
}

const TButton: React.FC<TButtonProps> = ({
  text,
  children,
  type = 'default',
  size = 'middle',
  shape = 'default',
  ghost = false,
  danger = false,
  block = false,
  icon,
  customStyle,
  style,
  htmlType = 'button',
  loading = false,
  bordered = true,
  ...props
}) => {
  const content = text || children;
  
  const finalStyle: React.CSSProperties = {
    ...style,
    ...customStyle,
    ...(bordered === false ? { border: 'none', boxShadow: 'none' } : {})
  };
  
  return (
    <Button
      type={type}
      size={size}
      shape={shape === 'default' ? undefined : shape}
      ghost={ghost}
      danger={danger}
      block={block}
      icon={icon}
      style={finalStyle}
      htmlType={htmlType}
      loading={loading}
      {...props}
    >
      {content}
    </Button>
  );
};

export default TButton;
