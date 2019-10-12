import * as React from 'react';
import Radium from 'radium';
import { render, Artboard, Page } from 'react-sketchapp';
import { colors, spacing } from './designSystem';
import Space from './components/Space';
import FileUpload from './components/FileUpload';
import { FileProps } from './components/File';

const styles = {
  desktop: {
    backgroundColor: colors.White,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 672,
    flexDirection: 'column',
    flexWrap: 'nowrap'
  }
};

const files: FileProps[] = [
  {
    filename: 'new doc 2019-10-11 16.23.00_20191011164919 (1).png',
    filesize: '820 Kb'
  },
  { filename: 'File02.pdf', filesize: '1.0 MB' },
  { filename: 'File01.pdf', filesize: '203 Kb' }
];

const _Contents = () => {
  return (
    <Page>
      <Artboard name="Desktop/File Upload/Initial" style={styles.desktop}>
        <Space h={3} v={3}>
          <FileUpload files={files} />
        </Space>
      </Artboard>
      <Artboard
        name="Mobile/File Upload/Initial"
        style={{
          backgroundColor: colors.White,
          position: 'absolute',
          top: 0,
          left: 772,
          width: 320,
          flexDirection: 'column',
          flexWrap: 'nowrap'
        }}
      >
        <Space h={2} v={2}>
          <FileUpload files={files} />
        </Space>
      </Artboard>
    </Page>
  );
};

const Contents = Radium(_Contents);

export default (context: any) => {
  render(<Contents />, context.document.pages()[2]);
};
