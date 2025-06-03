import 'styled-components/native';
import {Theme as docMorrisTheme} from '../theme/types';

type ThemeType = docMorrisTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
