import App from './App'
import { screen, render } from '@testing-library/react'

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      name: 'Mocked Skywalker',
    }),
  })
})

test('renders loading state', () => {
  render(<App />)

  expect(screen.getByText(/loading.../i)).toBeInTheDocument()
})

test('renders data', async () => {
  render(<App />)

  expect(await screen.findByText(/mocked skywalker/i)).toBeInTheDocument()
})