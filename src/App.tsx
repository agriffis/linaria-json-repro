import {styled} from '@linaria/react'
import {ThemeProps, withTheme} from './theming'

const Foo = withTheme(styled.h1<ThemeProps>`
  color: ${({theme}) => theme.color};
`)

function App() {
  return <Foo>Hello!</Foo>
}

export default App
