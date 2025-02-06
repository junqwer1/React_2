'use client'

import { useContext } from 'react'
import ColorContext2 from './ColorContext2'

const colors = ['red', 'blue', 'orange', 'gray', 'pink']

const ColorBox2 = () => {
  const ColorTapGroup = ({ setColor }) => {
    const ColorTap = colors.map((c) => (
      <span
        key={c}
        style={{
          display: 'inline-block',
          width: '30px',
          height: '30px',
          background: c,
        }}
        onClick={() => setColor(c)}
      ></span>
    ))

    return ColorTap
  }
  
  const {
    state: { color},
    actions: {setColor},
  } = useContext(ColorContext2)
  return (
    <>
      <div style={{ background: color, width: '300px', height: '300px' }}></div>
      <ColorTapGroup setColor={setColor} />
    </>
  )
}

export default ColorBox2
