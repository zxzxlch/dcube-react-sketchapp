// @flow
import * as React from 'react';
import Radium from 'radium';
import { Text } from 'react-sketchapp';
import { baseStyles, typography } from '../designSystem';

type Props = {
  text: string;
};

const FormLabel = ({ text }: Props) => (
  <Text name="Label" style={[typography.Base, baseStyles.FormLabel]}>
    {text}
  </Text>
);

export default Radium(FormLabel) as (props: Props) => JSX.Element;
