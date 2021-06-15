import App, { Text } from './App'
import { screen, render } from '@testing-library/react'
import { AppContext } from './AppContext'

test('renders app', () => {
  render(<App text="Frontend testing is fun!" />)

  expect(screen.getByText(/frontend testing is fun/i)).toBeInTheDocument()
})

test('Text by importing the context', () => {
  render(
    <AppContext.Provider value={{ text: 'Frontend testing is fun' }}>
      <Text />
    </AppContext.Provider>
  )

  expect(screen.getByText(/frontend testing is fun/i)).toBeInTheDocument()
})
