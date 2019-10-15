export const colors = {
  Primary: '#00639d',
  Ink: '#343838',
  White: '#ffffff',
  'Grey-05': '#fafbfc',
  'Grey-10': '#f5f7fa',
  'Grey-20': '#ebeff5',
  'Grey-30': '#dde3ed',
  'Grey-40': '#c8d1e0',
  'Grey-50': '#afbacc',
  'Grey-60': '#8e99ab',
  'Grey-70': '#707a8a',
  'Grey-80': '#58606e',
  'Grey-90': '#434a54',
  'Grey-100': '#333840',
  Black: '#343838',
  Error: '#b51d09'
};

// 1 unit = 8px
export const spacing = (token: number) => token * 8;

export const typeRamp = {
  xSmall: 16,
  Small: 17,
  Medium: 18,
  Large: 21,
  xLarge: 24
};

export const fontFamily = 'Open Sans';

export const typography = {
  Base: {
    fontFamily: fontFamily,
    fontSize: typeRamp.Medium,
    color: colors.Ink
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
    borderWidth: 1.5,
    backgroundColor: colors.Primary,
    borderRadius: 4
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
    fontSize: typeRamp.Medium,
    fontWeight: 600
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
    borderColor: colors['Grey-40']
  },
  'FileInput-Label': {
    color: colors['Grey-70'],
    fontSize: typeRamp.Medium
  },
  File: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors['Grey-40'],
    padding: spacing(2),
    borderRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.1
  },
  File_Progress: {
    // borderColor: colors['Grey-20']
    backgroundColor: colors['Grey-10']
  },
  File_Error: {
    borderWidth: 1.5,
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
