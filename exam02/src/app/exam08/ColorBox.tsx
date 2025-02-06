'use client'

import { ColorConsumer } from './ColorContext2'

const colors = ['red', 'blue', 'orange', 'gray', 'pink']

const ColorBox = () => {
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

  return (
    <ColorConsumer>
      {({ state: { color }, actions: { setColor } }) => (
        <>
          <div
            style={{ background: color, width: '300px', height: '300px' }}
          ></div>
          <ColorTapGroup setColor={setColor} />
        </>
      )}
    </ColorConsumer>
  )
}

export default ColorBox
