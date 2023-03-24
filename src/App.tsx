import {styled} from '@linaria/react'
import theme from './theme.json'

const Foo = styled.h1`
  color: ${theme.color};
`

function App() {
  return <Foo>Hello!</Foo>
}

export default App
