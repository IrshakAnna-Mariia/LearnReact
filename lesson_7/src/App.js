import {useState} from 'react';

function App() {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [selectedCity, setSelectedCity]= useState('');

  const handleClikAddCity = () => {
    setCities(prevCities => city ? prevCities.concat(city) : prevCities);
    setCity('');
  }

  const handleChangeCity = ({target: {value}}) => setCity(value);

  const handleSetCity = ({ target: { value } }) => setSelectedCity(value);

  return (
    <div>
      <input value={city} onChange={handleChangeCity}/>
      <button onClick={handleClikAddCity}>Add City</button>
      <select value={selectedCity} onChange={handleSetCity}>
        {cities.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
      <p>{selectedCity}</p>
    </div>
  );
}

export default App;
