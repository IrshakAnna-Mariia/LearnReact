import {useState} from 'react'

function App() {
  const [towns, setTowns] = useState(['Kyiv', 'Lviv', 'Cherkasy']);
  const [town, setTown] = useState('Kyiv');

  const handleChange = (e) => setTown(e.target.value);

  return (
    <div >
      <p>{town}</p>
      <select onChange={handleChange}>
        {towns.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default App;
