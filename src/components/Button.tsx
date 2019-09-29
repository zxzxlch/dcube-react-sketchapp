// @flow
import * as React from 'react';
import { Text, View, TextStyle, Style } from 'react-sketchapp';
import { spacing, colors, fontFamily, typeRamp } from '../designSystem';

type Props = {
  label: string;
};

const baseStyle: Style = {
  paddingVertical: spacing(1.5),
  paddingHorizontal: spacing(2),
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: colors.Primary,
  flexGrow: 0,
  flexShrink: 1
};

const labelStyle: TextStyle = {
  color: colors.Primary,
  textAlign: 'center',
  fontFamily,
  fontSize: typeRamp.Medium
};

const Button = ({ label }: Props) => {
  const styles = {};
  return (
    <View name="Button" style={{ ...baseStyle }}>
      <Text name="Label" style={{ ...labelStyle }}>
        {label}
      </Text>
    </View>
  );
};

export default Button;
