// @flow
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { spacing, colors, typeRamp, fontFamily } from '../designSystem';
import Button from './Button';
const styles = StyleSheet.create({
    register: {
        backgroundColor: colors.LightGrey,
        padding: spacing.Large,
        boxSizing: 'border-box'
    },
    heading: {
        color: colors.Purple,
        fontSize: typeRamp.Medium,
        fontFamily,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: spacing.Medium,
        width: 300
    }
});
const FileUpload = () => (<View style={styles.register}>
    <Text style={styles.heading}>Upload file</Text>
    <Text style={styles.heading}>
      You can upload a file to this component. Try using drag and drop!
    </Text>
    <View name="Dropzone">
      <Button label="Register"/>
    </View>
  </View>);
FileUpload.defaultProps = {
    session: {
        email: '',
        password: ''
    }
};
export default FileUpload;
