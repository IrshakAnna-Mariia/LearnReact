import {useState} from 'react'
import useStyles from './styles';

function App() {
  const classes = useStyles();
  const [name, setName] = useState('Иван')
  const [age, setAge] = useState(25)

  const handleClick = () => {
    setName('Коля');
    setAge(30);
  };

  return (
    <div>
      имя: {name}, возраст: {age}
      <button className={classes.button} onClick={handleClick}>нажми на меня</button>
    </div>
  );
}

export default App;
