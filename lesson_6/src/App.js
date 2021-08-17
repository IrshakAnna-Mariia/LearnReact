import { useState } from 'react';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeChecked = ({target: {value}}) => {
    switch (value) {
      case 'Отмечено':
        setIsChecked(true);
        break;
      case 'Не отмечено':
        setIsChecked(false)
        break;

      default:
        setIsChecked(prevCheck => !prevCheck)
        break;
    }
  };

  return (
    <div >
      <input type='checkbox' checked={isChecked} onChange={handleChangeChecked}/>
      <select value={isChecked ? 'Отмечено' : 'Не отмечено'} onChange={handleChangeChecked} >
        <option>Не отмечено</option>
        <option>Отмечено</option>
      </select>
    </div>
  );
}

export default App;
