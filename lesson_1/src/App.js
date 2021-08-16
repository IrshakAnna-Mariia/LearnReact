import useStyles from './styles'
import './App.css';

function App() {
  const classes = useStyles();
  const getText = () => <p>текст</p>

  return (
    <div>
      {getText()}
    </div>
  );
}

export default App;
