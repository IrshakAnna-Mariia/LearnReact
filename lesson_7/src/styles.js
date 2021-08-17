import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  input: props => ({
    borderColor: props ? 'green' : 'red'
  })
})

export default useStyles;
