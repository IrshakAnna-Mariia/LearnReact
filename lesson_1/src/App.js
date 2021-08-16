import useStyles from './styles'
import logo from './logo.svg';
import './App.css';

function App() {
  const classes = useStyles();
  const text = 'текст';

  return (
    <div className={classes.root}>
      {text}
    </div>
  );
}

export default App;
