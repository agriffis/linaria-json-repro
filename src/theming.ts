import {createTheming} from '@scampersand/react-theme-provider'
import theme from './theme.json'

export type DefaultTheme = typeof theme

export interface ThemeProps {
  theme: DefaultTheme
}

const {ThemeProvider, useTheme, withTheme} = createTheming(theme)

export {ThemeProvider, useTheme, withTheme}
