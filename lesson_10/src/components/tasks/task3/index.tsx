import React, {useState} from 'react';
import { Button } from 'antd';

import Test from './components/Test/Test';

interface BooleanState{
  checkTest: boolean,
  disabledButton: boolean,
  visibleButton: boolean
}

const Task2: React.FC = () => {
  const [booleanState, setBooleanState] = useState<BooleanState>({
    checkTest: false,
    disabledButton: true,
    visibleButton: false
  });
  
  const handleChangeCheck = () => {
    setBooleanState(prev => ({ ...prev, checkTest: true}));
  };

  const handleChangeDisableButton = (disable: boolean) => {
    setBooleanState(prev => ({ ...prev, disabledButton: disable }));
  };

  const handleChangeVisibleButton = (visible: boolean) => {
    setBooleanState(prev => ({ ...prev, visibleButton: visible }));
  };

  return (
    <>
      <Test 
        isCheckTest={booleanState.checkTest}
        onDisableButton={handleChangeDisableButton}
        onVisibleButton={handleChangeVisibleButton}
      />
      <br/>
      {booleanState.visibleButton && <Button disabled={booleanState.disabledButton} onClick={handleChangeCheck}>Здать тест</Button>}
    </>
  );
};

export default Task2;
