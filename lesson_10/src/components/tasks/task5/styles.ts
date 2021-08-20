import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    '& .isRight': {
      color: 'green',
    },

    '& .notRight': {
      color: 'red',
    },
  }
})

export default useStyles;
