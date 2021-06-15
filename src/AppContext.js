import React from 'react'

export const AppContext = React.createContext({
  text: '',
})

export const useApp = () => React.useContext(AppContext)
