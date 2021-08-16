import useStyles from './styles'
import './App.css';

function App() {
  const classes = useStyles();
  const getNum1 = () => 1;
  const getNum2 = () => 2;
  const result = getNum1() + getNum2();

  return (
    <div>
      текст {result}
    </div>
  );
}

export default App;
