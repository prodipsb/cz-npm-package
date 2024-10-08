import React, { useState } from 'react'

type props = {
  value?: number
}

const MyCounter = ({ value = 0 }: props) => {
  const [counter, setCounter] = useState(value)

  const onMinus = () => {
    setCounter((val) => val - 1)
  }

  const onPlus = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  )
}

export default MyCounter
