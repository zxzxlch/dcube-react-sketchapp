// @flow
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import FormLabel from './FormLabel';
import FileInput from './FileInput';
import { spacing, colors, typeRamp, fontFamily } from '../designSystem';
import Button from './Button';

const FileUpload = () => (
  <View name="File Upload">
    <FormLabel text="Upload file" />
    <FormLabel text="You can upload a file to this component. Try using drag and drop!" />
    <FileInput />
  </View>
);

export default FileUpload;
