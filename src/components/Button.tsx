// @flow
import * as React from 'react';
import Radium from 'radium';
import { Text, View } from 'react-sketchapp';
import { baseStyles } from '../designSystem';

type Props = {
  variant: 'primary' | 'secondary';
  label: string;
};

const Button = ({ variant = 'primary', label }: Props) => (
  <View
    name="Button"
    style={[
      baseStyles.Button,
      variant == 'secondary' && baseStyles.Button_Secondary
    ]}
  >
    <Text
      name="Label"
      style={[
        baseStyles['Button-Label'],
        variant == 'secondary' && baseStyles['Button-Label_Secondary']
      ]}
    >
      {label}
    </Text>
  </View>
);

export default Radium(Button);
