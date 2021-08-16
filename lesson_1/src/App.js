import useStyles from './styles'
import logo from './logo.svg';
import './App.css';

function App() {
  const classes = useStyles();
  const text = <p>текст</p>;

  return (
    <div className={classes.root}>
      {text}
    </div>
  );
}

export default App;
