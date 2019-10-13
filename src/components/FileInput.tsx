// @flow
import * as React from 'react';
import Radium from 'radium';
import { Text, View } from 'react-sketchapp';
import Button from './Button';
import { baseStyles, spacing, typography, colors } from '../designSystem';

type Props = {
  style?: any;
  errors?: string[];
};

const styles = {
  FileInput: {
    flexDirection: 'column'
  },
  'FileInput-Field': {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  'FileInput-Button': {
    flexShrink: 0
  },
  'FileInput-Label': {
    flexShrink: 1,
    marginLeft: spacing(1.5)
  },
  'FileInput-Error': {
    marginTop: spacing(1.5)
  }
};

const FileInput = ({ style, errors = [] }: Props) => {
  const errorText = errors.length > 0 && (
    <Text
      name="Error"
      style={[typography.Base, typography.FormError, styles['FileInput-Error']]}
    >
      {errors.join('\n')}
    </Text>
  );

  return (
    <View name="File Input" style={[style, styles.FileInput]}>
      <View
        name="Field"
        style={[styles['FileInput-Field'], baseStyles.FileInput]}
      >
        <Button
          variant="secondary"
          label="Choose file"
          style={styles['FileInput-Button']}
        />
        <Text
          style={[
            typography.Base,
            styles['FileInput-Label'],
            baseStyles['FileInput-Label']
          ]}
        >
          or drag file in here
        </Text>
      </View>
      {errorText}
    </View>
  );
};

export default Radium(FileInput) as (prop: Props) => JSX.Element;
