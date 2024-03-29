// theme.js
const theme = {
  colors: {
    primary: '#EB0057',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#262727',
    lightGray: '#818181',
  },
  fonts: {
    montserrat: {
      100: 'Montserrat-Thin',
      200: 'Montserrat-ExtraLight',
      300: 'Montserrat-Light',
      400: 'Montserrat-Regular',
      500: 'Montserrat-Medium',
      600: 'Montserrat-SemiBold',
      700: 'Montserrat-Bold',
      800: 'Montserrat-ExtraBold',
      900: 'Montserrat-Black',
    },
  },
};

export type ThemeType = typeof theme;
export default theme;
