// @flow
import * as React from 'react';
import Radium from 'radium';
import { Text, View } from 'react-sketchapp';
import Button from './Button';
import { baseStyles, spacing, typography } from '../designSystem';

type Props = {};

const styles = {
  FileInput: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  'FileInput-Label': {
    marginLeft: spacing(1.5)
  }
};

const FileInput = (props: Props) => (
  <View name="File Input" style={[styles.FileInput, baseStyles.FileInput]}>
    <Button variant="secondary" label="Choose file" />
    <Text style={[typography.Base, styles['FileInput-Label'], baseStyles['FileInput-Label']]}>
      or drag file in here
    </Text>
  </View>
);

export default Radium(FileInput) as (prop: Props) => JSX.Element;
