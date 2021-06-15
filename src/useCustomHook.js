import React from 'react'

export const useCustomHook = (initial = 'Initial') => {
  const [state, setState] = React.useState(initial)

  return [state, setState]
}
