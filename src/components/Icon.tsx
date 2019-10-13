import * as React from 'react';
import Radium from 'radium';
import { View } from 'react-sketchapp';
import { spacing, baseStyles } from '../designSystem';

interface SvgProps {
  fill?: string;
  style?: any;
}

interface Props extends SvgProps {
  svg: React.ComponentType<SvgProps>;
}

const styles = {
  Base: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  Svg: {}
};

const Icon = ({ svg: SvgType, fill, style }: Props) => (
  <View style={[styles.Base, style, baseStyles.Icon]}>
    <SvgType fill={fill} style={[styles.Svg, baseStyles['Icon-Body']]} />
  </View>
);

export default Radium(Icon) as (prop: Props) => JSX.Element;
