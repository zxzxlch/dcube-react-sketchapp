import * as React from 'react';
import { render, Artboard, Page } from 'react-sketchapp';
import { colors } from './designSystem';
import Space from './components/Space';
import FileUpload from './components/FileUpload';
const Contents = () => (<Page name="Templates">
    <Artboard name="Desktop/File Upload/Initial" style={{
    backgroundColor: colors.White,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 672,
    flexDirection: 'column',
    flexWrap: 'nowrap'
}}>
      <Space h={3} v={3}>
        <FileUpload />
      </Space>
    </Artboard>
    <Artboard name="Mobile/File Upload/Initial" style={{
    backgroundColor: colors.White,
    position: 'absolute',
    top: 0,
    left: 772,
    width: 320,
    flexDirection: 'column',
    flexWrap: 'nowrap'
}}>
      <Space h={2} v={2}>
        <FileUpload />
      </Space>
    </Artboard>
  </Page>);
export default (context) => {
    render(<Contents />, context.document.pages()[1]);
};
