import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  div: {
    margin: '10px'
  },
  table: {
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    border: '1px solid #111'
  },
  td: {
    border: '1px solid #111'
  },
  selectButton: {
    backgroundColor: 'red'
  }
})

export default useStyles;
