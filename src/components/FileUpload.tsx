// @flow
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { spacing, colors, typeRamp, fontFamily } from '../designSystem';
import Button from './Button';

const styles = StyleSheet.create({
  label: {
    color: colors.Ink,
    fontSize: typeRamp.Medium,
    fontFamily,
    marginBottom: spacing(1)
  },
  dropzone: {
    height: 170,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.LightGrey
  },
  'dropzone.label': {
    marginTop: spacing(2),
    color: colors.DarkGrey,
    fontSize: typeRamp.Medium
  }
});

const FileUpload = () => (
  <View name="File Upload">
    <Text style={styles.label}>Upload file</Text>
    <Text style={styles.label}>
      You can upload a file to this component. Try using drag and drop!
    </Text>
    <View name="Dropzone" style={styles.dropzone}>
      <Button label="Choose file" />
      <Text style={styles['dropzone.label']}>or drag file in here</Text>
    </View>
  </View>
);

FileUpload.defaultProps = {
  session: {
    email: '',
    password: ''
  }
};

export default FileUpload;
