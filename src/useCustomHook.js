import React from 'react'

export const useCustomHook = (initial = 'Initial') => {
  return React.useState(initial)
}
