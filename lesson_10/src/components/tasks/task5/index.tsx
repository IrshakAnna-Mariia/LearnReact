import React, {useState} from 'react';
import { Button, Space } from 'antd';

import { test } from './utils/constants';
import Test from './components/Test/Test';

const Task5: React.FC = () => {
  const [tests, setTests] = useState<TestItemTypeWithArr[]>(test);

  const [isCheckTest, setIsCheckTest] = useState<boolean>(false);

  const [currentTest, setCurrentTest] = useState<number>(1);

  const isDisableBtn = () => {
    const notEmptyAnswerLength = tests
      .map((testItem) => testItem.settedAnswers)
      .filter((answers) => answers.length !== 0).length;
    if (notEmptyAnswerLength === tests.length) {
      return false;
    }

    return true;
  };

  return (
    <Space direction="vertical">
      <Test
        isCheckTest={isCheckTest}
        currentTest={currentTest}
        setCurrentTest={setCurrentTest}
        tests={tests}
        setTests={setTests}
      />
      {currentTest === tests.length && !isCheckTest && (
        <Button disabled={isDisableBtn()} onClick={() => setIsCheckTest(true)}>
          Здать тест
        </Button>
      )}
    </Space>
  );
};

export default Task5;
