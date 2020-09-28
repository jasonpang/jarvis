import React, { useState, useEffect } from 'react'
import { render, Text } from 'ink'
import { Context } from './types'

export function Console({ context }: { context: Context }) {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(previousCounter => previousCounter + 1)
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return null
  // return <Text color="green">{context.server.}</Text>
}
