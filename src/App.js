import { AppContext, useApp } from './AppContext'

export const Text = () => {
  const { text } = useApp()

  return <div>{text}</div>
}

export default function App({ text }) {
  return (
    <AppContext.Provider value={{ text }}>
      <Text />
    </AppContext.Provider>
  )
}
