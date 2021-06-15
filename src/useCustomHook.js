import React from 'react'

export const useCustomHook = () => {
  const [state] = React.useState('Initial')

  return state
}
