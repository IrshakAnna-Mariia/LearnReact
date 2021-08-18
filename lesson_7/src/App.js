import {useState, useEffect} from 'react';
import MyButton from './components/Button';
import MySelect from './components/MySelect';

import workersList from './constants/workers';
import useStyles from './styles';

function App() {
  const [workers] = useState(workersList);
  const [filteredWorkers, setFilteredWorkers] = useState(workersList.filter((item, index) => index <= 9));
  const [maxView, setMaxView] = useState(10);
  const [pages, setPages] = useState(Math.ceil(workers.length / maxView));
  const [currentPage, setCurrentPage] = useState(1)

  const classes = useStyles();

  useEffect(() => {
    setFilteredWorkers(workersList.filter((item, index) => index <= currentPage * maxView - 1 && index >= currentPage * maxView - maxView));
    setPages(Math.ceil(workers.length / maxView));
  }, [currentPage, maxView])

  const onClickPage = (currPage) => setCurrentPage(currPage);

  const onClickPrevNext = (name) => {
    switch (name) {
      case 'Prev':
        setCurrentPage(prevCurrent => (prevCurrent > 1 && prevCurrent <= pages) ?  prevCurrent - 1 : prevCurrent);
        break;
      case 'Next':
        setCurrentPage(prevCurrent => (prevCurrent >= 1 && prevCurrent < pages) ? prevCurrent + 1 : prevCurrent);
        break;
      default:
        break;
    }
  }

  const onChangeMaxView = (value) => setMaxView(value);

  const pageButtons = function() {
    const buttonsArray = []
    for (let i = 0; i < pages; i++) {
      buttonsArray.push(<MyButton 
        className={currentPage === i + 1 ? classes.selectButton : null} 
        key={i} 
        name={i + 1} 
        onClick={onClickPage}
      />);
    }
    return buttonsArray;
  }();

  return (
    <div className={classes.div}>
      <table className={classes.table}>
        <tbody>
          {filteredWorkers.map(item => (
            <tr key={item.name}>
              <td className={classes.td}>{item.name}</td>
              <td className={classes.td}>{item.surname}</td>
              <td className={classes.td}>{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {pageButtons}
        <MyButton
          key='prev'
          name='Prev'
          onClick={onClickPrevNext}
        />
        <MyButton
          key='next'
          name='Next'
          onClick={onClickPrevNext}
        />
        <MySelect onChange={onChangeMaxView}/>
      </div>
    </div>
  );
}

export default App;
