export const colors = {
  Primary: '#6037b3',
  Ink: '#000000',
  White: '#ffffff',
  LightGrey: '#ababab',
  Grey: '#cccccc',
  DarkGrey: '#5a5a5a',
  Black: '#222223'
};

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

export default {
  colors,
  spacing,
  typeRamp,
  typography,
  fontFamily
};
