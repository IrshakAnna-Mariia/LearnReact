import React, {useState} from 'react';
import { Button } from 'antd';

import Test from './components/Test/Test';

const Task2: React.FC = () => {
  const [checkTest, setCheckTest] = useState<boolean>(false);
  
  const handleChangeCheck = () => setCheckTest(true);

  return (
    <>
      <Test isCheckTest={checkTest}/>
      <Button onClick={handleChangeCheck}>Здать тест</Button>
    </>
  );
};

export default Task2;
