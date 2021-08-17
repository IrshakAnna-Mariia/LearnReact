import {useState} from 'react';

function App() {
  const [routes, setRoutes] = useState([
    'Черкаси - Київ',
    'Черкаси - Одеса',
    'Черкасі - Лвів'
  ]);
  const [currentRoute, setCurrentRoute] = useState('');

  const handleChangeRoute = ({target: {value}}) => setCurrentRoute(value)

  return (
    <div>
      <p>{currentRoute}</p>
      {routes.map(item => (
        <div key={item}>
          <input 
            type='radio' 
            name='routes' 
            value={item} 
            onChange={handleChangeRoute}
          />
          {item}
        </div>
      ))}
    </div>
  );
}

export default App;
