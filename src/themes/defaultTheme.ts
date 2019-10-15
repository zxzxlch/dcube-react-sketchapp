export const colors = {
  Primary: '#6037b3',
  Ink: '#000000',
  White: '#ffffff',
  'Grey-05': '#f7f7f7',
  'Grey-20': '#ababab',
  'Grey-40': '#9c9c9c',
  'Grey-70': '#5a5a5a',
  Black: '#222223',
  Error: '#d0021b'
};

// 1 unit = 8px
export const spacing = (token: number) => token * 8;

export const typeRamp = {
  xSmall: 14,
  Small: 16,
  Medium: 18,
  Large: 24,
  xLarge: 36
};

export const fontFamily = 'Lato';

export const typography = {
  Base: {
    fontFamily: fontFamily,
    fontSize: typeRamp.Medium
  },
  Heading: {
    fontSize: typeRamp.Large,
    textAlign: 'center'
  },
  Label: {
    fontSize: typeRamp.Medium
  },
  FormError: {
    fontSize: typeRamp.Medium,
    color: colors.Error
  }
};

interface Styles {
  [key: string]: any;
}

export const baseStyles: Styles = {
  Icon: {
    width: spacing(3),
    height: spacing(3)
  },
  'Icon-Body': {
    width: spacing(2),
    height: spacing(2)
  },
  Button: {
    height: 48,
    paddingHorizontal: spacing(2),
    borderWidth: 1,
    backgroundColor: colors.Primary
  },
  Button_Secondary: {
    borderStyle: 'solid',
    borderColor: colors.Primary,
    backgroundColor: 'none'
  },
  'Button-Label': {
    color: colors.White,
    textAlign: 'center',
    fontFamily,
    fontSize: typeRamp.Medium
  },
  'Button-Label_Secondary': {
    color: colors.Primary
  },
  FormLabel: {
    color: colors.Ink,
    fontSize: typeRamp.Medium,
    fontFamily,
    lineHeight: typeRamp.Medium * 1.4,
    marginBottom: spacing(1)
  },
  FileInput: {
    paddingVertical: spacing(4),
    paddingHorizontal: spacing(3),
    backgroundColor: colors.White,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors['Grey-20']
  },
  'FileInput-Label': {
    color: colors['Grey-70'],
    fontSize: typeRamp.Medium
  },
  File: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors['Grey-40'],
    padding: spacing(2)
  },
  File_Progress: {
    borderColor: colors['Grey-20']
  },
  File_Error: {
    borderColor: colors.Error
  },
  'File-FileName': {
    fontSize: typeRamp.Medium
  },
  'File-FileName_Progress': {
    color: colors['Grey-70']
  },
  'File-FileSize': {
    fontSize: typeRamp.Small
  },
  'File-FileSize_Progress': {
    color: colors['Grey-70']
  },
  'File-CloseIcon': {
    marginLeft: spacing(2),
    fill: colors['Grey-70']
  }
};

export default {
  colors,
  spacing,
  typeRamp,
  typography,
  fontFamily
};
