import useStyles from './styles';

function App() {
  const classes = useStyles();

  const handleClick = () => alert('hello');

  return (
    <div>
      <button className={classes.button} onClick={handleClick}>нажми на меня</button>
    </div>
  );
}

export default App;
