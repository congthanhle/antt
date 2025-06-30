# Button Components

This library provides custom Button components based on Ant Design with additional features and customization options.

## Components

### TButton

A customizable button with enhanced styling options and simplified API.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | React.ReactNode | - | Text content of the button |
| children | React.ReactNode | - | Child elements (alternative to text) |
| type | 'primary' \| 'default' \| 'dashed' \| 'link' \| 'text' | 'default' | Button type |
| size | 'large' \| 'middle' \| 'small' | 'middle' | Button size |
| shape | 'default' \| 'circle' \| 'round' | 'default' | Button shape |
| ghost | boolean | false | Ghost style (transparent background) |
| danger | boolean | false | Danger style (red color) |
| block | boolean | false | Full width button |
| icon | React.ReactNode | - | Icon element |
| customStyle | React.CSSProperties | - | Additional custom styles |
| htmlType | 'button' \| 'submit' \| 'reset' | 'button' | HTML button type attribute |
| loading | boolean \| { delay: number } | false | Loading state |
| bordered | boolean | true | Whether to show button border |

All other Ant Design Button props are also supported.

#### Examples

```tsx
// Basic button
<TButton text="Default Button" />

// Primary button with icon
<TButton 
  type="primary" 
  icon={<SearchOutlined />} 
  text="Search" 
/>

// Rounded button without border
<TButton 
  type="primary" 
  shape="round" 
  bordered={false} 
  text="Custom Button"
  customStyle={{ backgroundColor: '#722ed1' }} 
/>

// Block button with loading state
<TButton 
  type="primary" 
  block 
  loading 
  text="Loading..."
/>
```

### TButtonGroup

A group container for multiple buttons.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| customStyle | React.CSSProperties | - | Additional custom styles |
| size | 'large' \| 'middle' \| 'small' | - | Size of all buttons in the group |

All other Ant Design Button.Group props are also supported.

#### Example

```tsx
<TButtonGroup>
  <TButton type="primary" icon={<LeftOutlined />} text="Back" />
  <TButton type="primary" icon={<RightOutlined />} text="Forward" />
</TButtonGroup>
```

## Custom Styling

You can customize the appearance of buttons in several ways:

1. **Using the type prop**:
   ```tsx
   <TButton type="primary" text="Primary Button" />
   <TButton type="dashed" text="Dashed Button" />
   ```

2. **Using the customStyle prop**:
   ```tsx
   <TButton 
     customStyle={{ 
       background: 'linear-gradient(to right, #1677ff, #52c41a)',
       borderRadius: '20px',
       fontWeight: 'bold',
     }} 
     text="Custom Gradient Button" 
   />
   ```

3. **Using the bordered prop**:
   ```tsx
   <TButton 
     type="primary"
     bordered={false}
     text="No Border Button" 
   />
   ```

## Dependencies

- React 18+
- Ant Design 5.0+
- @ant-design/icons (for icons)
