import React from 'react';
import { FloatButton } from 'antd';
import type { FloatButtonProps } from 'antd';

interface TFloatButtonProps extends Omit<FloatButtonProps, 'type'> {
  type?: 'default' | 'primary';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  customStyle?: React.CSSProperties;
  tooltip?: string;
  badge?: {
    count?: number;
    dot?: boolean;
  };
}

const TFloatButton: React.FC<TFloatButtonProps> = ({
  type = 'primary',
  position = 'bottom-right',
  customStyle,
  tooltip,
  badge,
  style,
  ...props
}) => {
  // Position styles
  const getPositionStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'fixed',
      zIndex: 1000,
    };

    switch (position) {
      case 'top-left':
        return { ...baseStyle, top: 24, left: 24 };
      case 'top-right':
        return { ...baseStyle, top: 24, right: 24 };
      case 'bottom-left':
        return { ...baseStyle, bottom: 24, left: 24 };
      case 'bottom-right':
      default:
        return { ...baseStyle, bottom: 24, right: 24 };
    }
  };

  const finalStyle = {
    ...getPositionStyle(),
    ...customStyle,
    ...style,
  };

  return (
    <FloatButton
      type={type}
      style={finalStyle}
      tooltip={tooltip}
      badge={badge}
      {...props}
    />
  );
};

export default TFloatButton;