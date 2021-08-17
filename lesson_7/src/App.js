import {useState} from 'react';
import useStyles from './styles';

function App() {
  const [isGreen, setIsGreen] = useState(false);

  const classes = useStyles(isGreen);

  const handleChangeText = ({target: {value}}) => {
    value.length >= 4 && value.length <= 9 ? setIsGreen(true) : setIsGreen(false);
  }

  return (
    <div>
      <input className={classes.input} onChange={handleChangeText} type='text'/>
    </div>
  );
}

export default App;
