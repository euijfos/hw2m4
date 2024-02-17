import React, { useState } from 'react';

const ColorSwitcher = () => {
    const[color1, setColor1]= useState('red')
    const[color2, setColor2] = useState('blue')

    const ColorClick = (colorNumber)=> {
        if (colorNumber === 1) {
            setColor1(color2)
            setColor2(color1)
        }else if (colorNumber === 2 ){
            setColor1(color2)
            setColor2(color1)
        }
    }


  return (
      <div>
        <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color1,
              margin: '10px',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            onClick={() => ColorClick(1)}
        ></div>

        <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color2,
              margin: '10px',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            onClick={() => ColorClick(2)}
        ></div>
      </div>
  );
}

export default ColorSwitcher;