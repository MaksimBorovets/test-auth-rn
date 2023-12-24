import 'styled-components/native';

import { ThemeType } from './src/styles/theme/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
