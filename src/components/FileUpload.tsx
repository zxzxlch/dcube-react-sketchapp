// @flow
import * as React from 'react';
import { View } from 'react-sketchapp';
import FormLabel from './FormLabel';
import FileInput from './FileInput';
import File, { FileProps } from './File';
import { spacing } from '../designSystem';

type Props = {
  files: FileProps[];
};

const FileUpload = ({ files }: Props) => (
  <View name="File Upload">
    <FormLabel text="Upload file" />
    <FormLabel text="You can upload a file to this component. Try using drag and drop!" />
    <FileInput style={{ marginTop: spacing(2) }} />
    {files.map((props, index) => (
      <File key={index} {...props} style={{ marginTop: spacing(3) }} />
    ))}
  </View>
);

export default FileUpload;
