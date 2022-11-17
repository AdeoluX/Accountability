import {Dimensions, useColorScheme} from 'react-native';
const {width, height} = Dimensions.get('window');

const theme = useColorScheme();

export const COLORS = {
  //base colors
  primary: '#253334', //Green
  secondary: '#cacfd9', //Gray

  //colors
  black: '#1e1f20',
  white: '#ffffff',
  lightGray: '#eff2f5',
  gray: '#8b9097',
  textColor: theme === 'dark' ? '#fff' : '#333',
};

export const FONTS = {
  primaryFonts: {
    regular: 'TitilliumWeb-Regular',
    bold: 'TitilliumWeb-Bold',
  },
};

export const SIZES = {
  //global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  //app dimensions
  width,
  height,
};

export const base_url = 'https://accountability-app.herokuapp.com/api/v1';

const appTheme = {COLORS, SIZES};

export default appTheme;
