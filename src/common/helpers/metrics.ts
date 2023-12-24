// METRICS HELPER
import { Dimensions, Platform, PixelRatio } from 'react-native';

// This helper is created to manage scales for different devices demensions, combined from two articles:
// Guide how to use and best practices -> https://medium.com/simform-engineering/create-responsive-design-in-react-native-f84522a44365
//  Article/docs -> https://sanjanahumanintech.medium.com/react-native-achieving-responsiveness-through-scalable-fonts-dimensions-and-pixels-e6a3d4ff8791

// USAGE:
/* 
  --------------------------
    verticalScale ->
     height, marginTop,
     marginBottom, marginVertical, lineHeight,
     paddingTop, paddingBottom, paddingVertical, likewise
  --------------------------
    horizontalScale -> 
     width, marginLeft, marginRight, marginHorizontal,
     paddingLeft,paddingRight, paddingHorizontal, likewise
  --------------------------
    fontScale -> 
     fontSize
  --------------------------
  */

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// E.G. -> metrics from Figma design
const GUIDE_LINE_BASE_WIDTH = 375;
const GUIDE_LINE_BASE_HEIGHT = 808;

const scale = SCREEN_WIDTH / GUIDE_LINE_BASE_WIDTH;
const scaleVertical = SCREEN_HEIGHT / GUIDE_LINE_BASE_HEIGHT;

export function horizontalScale(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
}

export function verticalScale(size: number) {
  const newSize = size * scaleVertical;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
}

export const fontScale: (size: number, factor?: number) => number = (
  size,
  factor = 0.5,
) => size + (horizontalScale(size) - size) * factor;

export function isTablet() {
  if (SCREEN_WIDTH > 550) {
    return true;
  }

  return false;
}

export function isScreenHeight770() {
  if (SCREEN_HEIGHT > 740 && SCREEN_HEIGHT < 760) {
    return true;
  }

  return false;
}
