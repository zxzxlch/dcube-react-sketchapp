export const colors = {
  Primary: '#6037b3',
  Ink: '#000000',
  White: '#ffffff',
  LightGrey: '#ababab',
  Grey: '#cccccc',
  DarkGrey: '#5a5a5a',
  Black: '#222223'
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

export const typography = {
  Heading: {
    fontSize: typeRamp.Large,
    textAlign: 'center'
  },
  Label: {
    fontSize: typeRamp.Medium
  }
};

export const fontFamily = 'Lato';

export const baseStyles = {
  Button: {
    paddingVertical: spacing(1.5),
    paddingHorizontal: spacing(2),
    borderWidth: 1,
    flexGrow: 0,
    flexShrink: 1,
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
  Label: {
    color: colors.Ink,
    fontSize: typeRamp.Medium,
    fontFamily,
    lineHeight: typeRamp.Medium * 1.4,
    marginBottom: spacing(1)
  },
  FileInput: {
    height: 170,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.LightGrey
  },
  'FileInput-Label': {
    marginTop: spacing(2),
    color: colors.DarkGrey,
    fontSize: typeRamp.Medium
  }
};

export default {
  colors,
  spacing,
  typeRamp,
  typography,
  fontFamily
};
