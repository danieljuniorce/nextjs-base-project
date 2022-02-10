import { DefaultTheme } from 'styled-components'

import themeLight from './light'
import themeDark from './dark'

export type ThemeProps = typeof themeLight

export const _getTheme = (theme: 'dark' | 'light'): DefaultTheme => {
  if (theme === 'dark') {
    return themeDark
  } else {
    return themeLight
  }
}
