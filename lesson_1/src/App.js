import useStyles from './styles'
import logo from './logo.svg';
import './App.css';

function App() {
  const classes = useStyles();
  const attr = 'block'


  return (
    <div id={attr} className={classes.root}>
      текст
    </div>
  );
}

export default App;
