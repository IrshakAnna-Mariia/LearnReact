import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'space-around', 
    justifyContent: 'center', 
    margin: '10vw', 

    '& .gameFieldContainer': {
      display: "flex", 
      justifyContent: 'space-around',

      '& .gameField': {
        marginBottom: '30px',

        '& .gameRow': {
          display: 'flex', 
          justifyContent: 'space-between',

          '& .gameCell': {
            width: '3vw', 
            height: '3vw', 
            textAlign: 'center', 
            border: '1px solid black',
            fontSize: '3vw',
            color: 'white',
            lineHeight: 1,
          },

          '& .isSelect': {
            backgroundColor: 'black',
          }
        }
      }
    }
  }
})

export default useStyles;
