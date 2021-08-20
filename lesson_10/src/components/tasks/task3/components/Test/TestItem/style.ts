import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .isRight': {
      border: '1px solid green',
    },
    
    '& .notRight': {
      border: '1px solid red',
    },
  }
})

export default useStyles;
