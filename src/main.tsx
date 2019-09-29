import * as React from 'react';
import { render, Artboard } from 'react-sketchapp';
import { colors, spacing } from './designSystem';
import Space from './components/Space';
import FileUpload from './components/FileUpload';

const Page = () => (
  <Artboard
    name="File Upload/Initial"
    style={{
      backgroundColor: colors.White,
      width: 672,
      flexDirection: 'column',
      flexWrap: 'nowrap'
    }}
  >
    <Space h={3} v={3}>
      <FileUpload />
    </Space>
  </Artboard>
);

export default () => {
  render(<Page />, context.document.pages()[1]);
};
