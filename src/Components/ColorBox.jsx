import vite, { useState } from 'vite';

const ColorBox = ( color ) => {
  const [boxColor, setBoxColor] = useState(color);

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBoxColor(randomColor);
  };

  return (
    <div
      onClick={changeColor}
      style={{
        backgroundColor: boxColor,
        width: '50px',
        height: '50px',
        display: 'inline-block',
        margin: '5px',
      }}
    />
  );
};

export default ColorBox;
