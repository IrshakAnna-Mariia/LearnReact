import React, {useState} from 'react';
import { Space } from 'antd';

import { test } from '../../utils/constants';
import { TestItemType } from '../../utils/constants.types';
import TestItem from './TestItem/TestItem';
import { PropsTest } from './Test.types';

const Test = ({ isCheckTest }: PropsTest): JSX.Element => {
  const [tests, setTests] = useState<TestItemType[]>(test);

  const onChengeTest = (question: string, settedAnswer: string) => {
    setTests(prevTests => prevTests.map(testItem => testItem.question !== question ? testItem : ({ ...testItem, settedAnswer })))
  }

  return (
    <Space direction="vertical">
      {tests.map(question => (
        <TestItem 
          key={question.question} 
          questionObj={question}
          isCheckTest={isCheckTest}
          onChangeText={onChengeTest}
        />
      ))}
    </Space>
  );
};

export default Test;
