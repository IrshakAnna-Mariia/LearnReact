import useStyles from './styles'
import './App.css';

function App() {
  const classes = useStyles();
  const show = false;

  return (
    <div>
      {show ? 'текст 1': 'текст 2'}
    </div>
  );
}

export default App;
