// @flow
import * as React from 'react';
import Radium from 'radium';
import { Text, View } from 'react-sketchapp';
import { baseStyles, typography } from '../designSystem';

const styles = {
  Button: {
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

type Props = {
  variant: 'primary' | 'secondary';
  label: string;
};

const Button = ({ variant = 'primary', label }: Props) => (
  <View
    name="Button"
    style={[
      styles.Button,
      baseStyles.Button,
      variant == 'secondary' && baseStyles.Button_Secondary
    ]}
  >
    <Text
      name="Label"
      style={[
        typography.Base,
        baseStyles['Button-Label'],
        variant == 'secondary' && baseStyles['Button-Label_Secondary']
      ]}
    >
      {label}
    </Text>
  </View>
);

export default Radium(Button) as (prop: Props) => JSX.Element;
