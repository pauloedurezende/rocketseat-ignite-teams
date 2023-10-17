import 'styled-components/native';

import theme from '../theme';

declare module 'styled-components/native' {
  type CustomTheme = typeof theme;

  export interface DefaultTheme extends CustomTheme {}
}
