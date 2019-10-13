// @flow
import * as React from 'react';
import Radium from 'radium';
import { Text, View } from 'react-sketchapp';
import { baseStyles, typography, colors, spacing } from '../designSystem';
import CloseIconSvg from '../assets/TimesRegular';

type Props = {
  filename: string;
  filesize: string;
  status?: 'default' | 'progress' | 'error';
  error?: string;
  style?: any;
};

const styles = {
  Base: {
    flexDirection: 'column'
  },
  'File-Field': {
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
  },
  'File-Error': {
    marginTop: spacing(1.5)
  }
};

const File = ({
  filename,
  filesize,
  status = 'default',
  error,
  style
}: Props) => {
  const isProgress = status == 'progress';
  const isError = status == 'error';

  const errorText = error && (
    <Text
      name="Error"
      style={[typography.Base, typography.FormError, styles['File-Error']]}
    >
      {error}
    </Text>
  );

  return (
    <View name="File" style={[style, styles.Base]}>
      <View
        style={[
          styles['File-Field'],
          baseStyles.File,
          isProgress ? baseStyles.File_Progress : undefined,
          isError ? baseStyles.File_Error : undefined
        ]}
      >
        <View style={styles['File-Body']}>
          <Text
            style={[
              typography.Base,
              baseStyles['File-FileName'],
              isProgress ? baseStyles['File-FileName_Progress'] : undefined
            ]}
          >
            {filename}
          </Text>
          <Text
            style={[
              typography.Base,
              baseStyles['File-FileSize'],
              isProgress ? baseStyles['File-FileSize_Progress'] : undefined
            ]}
          >
            {filesize}
          </Text>
        </View>
        <CloseIconSvg
          fill={styles['File-CloseIcon'].fill}
          style={[styles['File-CloseIcon']]}
        />
      </View>
      {errorText}
    </View>
  );
};

export default Radium(File) as (prop: Props) => JSX.Element;
export type FileProps = Props;
