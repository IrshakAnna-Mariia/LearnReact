import React, { ChangeEvent, useState } from "react";
import { Typography, Card, Input } from "antd";

import { PropTestItem } from "./TestItem.types";

const { Text } = Typography;

const TestItem = ({
  questionObj,
  isCheckTest,
  onChangeText,
}: PropTestItem): JSX.Element => {
  const [enteredAnswer, setEnteredAnswer] = useState<string>("");
  const isRight: boolean = questionObj.answer === questionObj.settedAnswer;

  const handleChangeEnteredValue = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    onChangeText(questionObj.question, value);
    setEnteredAnswer(value);
  };

  return (
    <Card>
      <Text> {questionObj.question} </Text>
      <br />
      <Text type="secondary">
        {isCheckTest &&
          (isRight
            ? `ваш ответ ${questionObj.settedAnswer}, правильно`
            : `ваш ответ ${questionObj.settedAnswer}, не правильно, правильный ответ ${questionObj.answer}`)}
      </Text>
      <Input
        style={{
          border: isCheckTest
            ? isRight
              ? "1px solid green"
              : "1px solid red"
            : "1px solid #000",
        }}
        value={enteredAnswer}
        onChange={handleChangeEnteredValue}
      />
    </Card>
  );
};

export default TestItem;
