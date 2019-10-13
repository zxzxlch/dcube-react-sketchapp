// @flow
import * as React from 'react';
import Radium from 'radium';
import { Text, View } from 'react-sketchapp';
import { baseStyles, typography, colors, spacing } from '../designSystem';
import CloseIconSvg from '../assets/TimesRegular';

type Props = {
  filename: string;
  filesize: string;
  style?: any;
};

const styles = {
  File: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  'File-Body': {
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1
  },
  'File-CloseIcon': {
    width: spacing(2),
    height: spacing(2),
    flexGrow: 0,
    flexShrink: 0,
    marginLeft: spacing(2),
    marginRight: spacing(1),
    fill: colors['Grey-70']
  }
};

const File = ({ filename, filesize, style }: Props) => (
  <View name="File" style={[style, styles.File, baseStyles.File]}>
    <View style={styles['File-Body']}>
      <Text style={[typography.Base, baseStyles.File_FileName]}>
        {filename}
      </Text>
      <Text style={[typography.Base, baseStyles.File_FileSize]}>
        {filesize}
      </Text>
    </View>
    <CloseIconSvg
      // width={16}
      // height={16}
      fill={styles['File-CloseIcon'].fill}
      style={[styles['File-CloseIcon']]}
    />
  </View>
);

export default Radium(File) as (prop: Props) => JSX.Element;
export type FileProps = Props;
