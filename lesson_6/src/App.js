import {useState} from 'react'

function App() {
  const [town, setTown] = useState('Kyiv');

  const handleChange = (e) => setTown(e.target.value);

  return (
    <div >
      <p>{town}</p>
      <select onChange={handleChange}>
        <option>Kyiv</option>
        <option>Lviv</option>
        <option>Cherkasy</option>
      </select>
    </div>
  );
}

export default App;
