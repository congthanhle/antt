# FloatButton Components

This library provides custom FloatButton components based on Ant Design with additional features and customization options.

## Components

### TFloatButton

A customizable floating action button with position and styling options.

#### Props

- `type?: 'default' | 'primary'` - Button type (default: 'primary')
- `position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'` - Button position (default: 'bottom-right')
- `customStyle?: React.CSSProperties` - Additional custom styles
- `tooltip?: string` - Tooltip text
- `badge?: { count?: number; dot?: boolean }` - Badge configuration
- All other Ant Design FloatButton props are supported

#### Example

```tsx
import { TFloatButton } from 'antt';
import { PlusOutlined } from '@ant-design/icons';

<TFloatButton
  icon={<PlusOutlined />}
  type="primary"
  position="bottom-right"
  tooltip="Add new item"
  onClick={() => console.log('Add clicked')}
/>
```

### TFloatButtonGroup

A group of floating action buttons with customizable positioning.

#### Props

- `position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'` - Group position (default: 'bottom-right')
- `customStyle?: React.CSSProperties` - Additional custom styles
- All other Ant Design FloatButton.Group props are supported

#### Example

```tsx
import { TFloatButtonGroup, TFloatButton } from 'antt';
import { QuestionCircleOutlined, CustomerServiceOutlined } from '@ant-design/icons';

<TFloatButtonGroup
  position="bottom-left"
  trigger="click"
  type="primary"
  icon={<CustomerServiceOutlined />}
>
  <TFloatButton tooltip="Help" icon={<QuestionCircleOutlined />} />
  <TFloatButton tooltip="Support" icon={<CustomerServiceOutlined />} />
</TFloatButtonGroup>
```

### TBackTop

A back-to-top floating button with enhanced positioning options.

#### Props

- `visibilityHeight?: number` - Height threshold for showing the button (default: 400)
- `duration?: number` - Animation duration in milliseconds (default: 450)
- `target?: () => HTMLElement | Window | Document` - Target container for scrolling
- `position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'` - Button position (default: 'bottom-right')
- `customStyle?: React.CSSProperties` - Additional custom styles
- `onClick?: () => void` - Click handler
- `icon?: React.ReactNode` - Custom icon
- `description?: React.ReactNode` - Button description
- `tooltip?: string` - Tooltip text
- `type?: 'default' | 'primary'` - Button type

#### Example

```tsx
import { TBackTop } from 'antt';

<TBackTop
  position="top-right"
  visibilityHeight={100}
  tooltip="Back to top"
/>
```

## Positioning

All components support four position options:
- `top-left`: Fixed 24px from top and left
- `top-right`: Fixed 24px from top and right  
- `bottom-left`: Fixed 24px from bottom and left
- `bottom-right`: Fixed 24px from bottom and right (default)

## Styling

Use the `customStyle` prop for additional styling that will be merged with the position styles. The `style` prop is also supported for direct styling.

## Dependencies

- React 18+
- Ant Design 5.0+
- @ant-design/icons (for icons)
