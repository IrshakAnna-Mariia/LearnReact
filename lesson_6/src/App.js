import { useState } from 'react';

function App() {
  const [names, setNames] = useState(['Давид', 'Саша', 'Бодя']);
  const [newName, setNewName] = useState('');

  const handleChangeNewName = ({target: {value}}) => setNewName(value);
  
  const handleAddNewName = () => {
    setNames(prevNames => prevNames.concat(newName));
    setNewName('');
  };

  return (
    <div >
      <select>
        {names.map(item => <option key={item} >{item}</option>)}
      </select>
      <input type='text' value={newName} onChange={handleChangeNewName} />
      <button onClick={handleAddNewName} >Добавить</button>
    </div>
  );
}

export default App;
