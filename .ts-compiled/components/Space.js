// @flow
import * as React from 'react';
import { View } from 'react-sketchapp';
import { spacing } from '../designSystem';
const Space = ({ h = 0, v = 0, children }) => (<View name="#Space" style={{
    paddingHorizontal: spacing(h),
    paddingVertical: spacing(v)
}}>
    {children}
  </View>);
export default Space;
