import useStyles from './styles'
import logo from './logo.svg';
import './App.css';

function App() {
  const classes = useStyles();
  const text1 = <p>текст1</p>;
  const text2 = <p>текст2</p>;


  return (
    <div className={classes.root}>
      {text1}
      <p>!!!</p>
      {text2}
    </div>
  );
}

export default App;
