import useStyles from './styles'
import './App.css';

function App() {
  const classes = useStyles();
  const arr = ['a', 'b', 'c', 'd', 'e']

  return (
    <div>
      <ul>
        {arr.map((value) => <li key={value}>{value}</li>)}
      </ul>
    </div>
  );
}

export default App;
