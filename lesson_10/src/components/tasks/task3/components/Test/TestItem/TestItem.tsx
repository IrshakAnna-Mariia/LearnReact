import React, {ChangeEvent, useState} from 'react';
import { Typography, Card, Input } from 'antd';

import { PropTestItem } from './TestItem.types';

const TestItem = ({ questionObj, isCheckTest, onChangeText}: PropTestItem): JSX.Element => {
  const isRight: boolean = questionObj.answer === questionObj.settedAnswer;

  const { Text } = Typography;

  const handleChangeEnteredValue = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => onChangeText(questionObj.question, value);

  return (
    <Card>
      <Text> {questionObj.question} </Text>
      <br/>
      <Text type="secondary">
        {isCheckTest && (isRight
          ? `ваш ответ ${questionObj.settedAnswer}, правильно`
          : `ваш ответ ${questionObj.settedAnswer}, не правильно, правильный ответ ${questionObj.answer}`)}
      </Text>
      <Input 
        style={{ border: isCheckTest ? (isRight ? '1px solid green' : '1px solid red') : '1px solid '}}
        value={questionObj.settedAnswer}
        onChange={handleChangeEnteredValue}
      />
    </Card>
  )
}

export default TestItem;
