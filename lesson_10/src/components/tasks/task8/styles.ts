import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    height: '100vh', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',

    '& .gameRow': {
      display: 'flex', 
      justifyContent: 'center',

      '& .gameCell': {
        width: '20vw',
        height: '20vh',
        border: "1px solid #111",
        textAlign: 'center',

        '& .cellItem': {
          fontSize: '20vh',
          lineHeight: 1,
        }
      }
    }
  }
})

export default useStyles;
