import React from 'react';
import ColorBox from './ColorBox';
import { colors } from '../data/data';

const ColorBoxesContainer = () => {
  return (
    <div>
      {[...Array(5)].map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {colors.slice(rowIndex * 5, rowIndex * 5 + 5).map((color, colorIndex) => (
            <ColorBox key={colorIndex} color={color} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ColorBoxesContainer;
