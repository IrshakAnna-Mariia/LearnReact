import {useState} from 'react';

import testList from './constants/testList';
import useStyles from './styles';

function App() {
  const [test, setTest] = useState(testList);
  const classes = useStyles();

  const handleSetAnswer = ({ target: { value } }, propAnswer, propQuestion, propRight) => {
    setTest(prevTest => prevTest.map(({ question, answers, right}) => ({
      question, 
      answers, 
      right,
      isRight: test.find(({ question }) => question === propQuestion).answers.indexOf(propAnswer) === propRight,
      selectAnswer: value
    })))
  }

  return (
    <div>
      {test.map(({question, answers, right, isRight, selectAnswer}) => (
        <div key={question}>
          <p>{question}</p>
          {answers.map(answer => (
              <div 
                key={answer} 
                className={(selectAnswer === answer) ? isRight ? classes.textRight : classes.textWrong : null}
              >
                <input 
                  name={question} 
                  value={answer} 
                  type='radio' 
                  onChange={(e) => {handleSetAnswer(e, answer, question, right)}}
                />
                {answer}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
