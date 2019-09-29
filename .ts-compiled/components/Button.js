// @flow
import * as React from 'react';
import { Text, View } from 'react-sketchapp';
import { spacing, colors, fontFamily, typeRamp } from '../designSystem';
const baseStyle = {
    paddingVertical: spacing(1.5),
    paddingHorizontal: spacing(2),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.Primary,
    flexGrow: 0,
    flexShrink: 1
};
const labelStyle = {
    color: colors.Primary,
    textAlign: 'center',
    fontFamily,
    fontSize: typeRamp.Medium
};
const Button = ({ label }) => {
    const styles = {};
    return (<View name="Button" style={Object.assign({}, baseStyle)}>
      <Text name="Label" style={Object.assign({}, labelStyle)}>
        {label}
      </Text>
    </View>);
};
export default Button;
