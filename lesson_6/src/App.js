import { useState } from 'react';

function App() {
  const [colors, setColors] = useState(['#000000', '#ff00ff', '#ff0000']);
  const [currentColor, setCurrentColor] = useState('#000000');

  const handleChangeColor = ({target: {value}}) => setCurrentColor(value);


  return (
    <div >
      <p style={{color: currentColor}}>Какой-то текст</p>
      <select onChange={handleChangeColor}>
        {colors.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default App;
