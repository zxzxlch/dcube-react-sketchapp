import * as React from 'react';
import Radium from 'radium';
import { render, Artboard, Page } from 'react-sketchapp';
import { colors, spacing } from './designSystem';
import Space from './components/Space';
import FileUpload from './components/FileUpload';
import File, { FileProps } from './components/File';
import FileInput from './components/FileInput';

const styles = {
  desktop: {
    backgroundColor: colors.White,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 672,
    flexDirection: 'column',
    flexWrap: 'nowrap'
  },
  mobile: {
    backgroundColor: colors.White,
    position: 'absolute',
    top: 0,
    left: 772,
    width: 320,
    flexDirection: 'column',
    flexWrap: 'nowrap'
  },
  states: {
    backgroundColor: colors.White,
    position: 'absolute',
    top: 0,
    left: 1192,
    width: 672,
    flexDirection: 'column',
    flexWrap: 'nowrap'
  }
};

const defaultFiles: FileProps[] = [
  {
    filename: 'new doc 2019-10-11 16.23.00_20191011164919 (1).png',
    filesize: '820 Kb'
  },
  { filename: 'File02.pdf', filesize: '1.0 MB' },
  { filename: 'File01.pdf', filesize: '203 Kb' }
];

const statesArtboardFiles: FileProps[] = [
  { filename: 'File01.pdf', filesize: '203 Kb' },
  { filename: 'File01.pdf', filesize: '203 Kb', status: 'progress' },
  {
    filename: 'File01.pdf',
    filesize: '203 Kb',
    status: 'error',
    error: 'This file could not be uploaded. Try again?'
  }
];

const _Contents = () => (
  <Page>
    <Artboard name="File Upload/Desktop" style={styles.desktop}>
      <Space h={3} v={3}>
        <FileUpload files={defaultFiles} />
      </Space>
    </Artboard>
    <Artboard name="File Upload/Mobile" style={styles.mobile}>
      <Space h={2} v={2}>
        <FileUpload files={defaultFiles} />
      </Space>
    </Artboard>
    <Artboard name="File Upload/States" style={styles.states}>
      <Space h={3} v={3}>
        <FileInput
          errors={[
            'The selected file must be a jpg, gif, png, or pdf.',
            'File size cannot exceed 500 KB.'
          ]}
        />
        {statesArtboardFiles.map((props, index) => (
          <File key={index} {...props} style={{ marginTop: spacing(3) }} />
        ))}
      </Space>
    </Artboard>
  </Page>
);

const Contents = Radium(_Contents);

export default (context: any) => {
  render(<Contents />, context.document.pages()[2]);
};
