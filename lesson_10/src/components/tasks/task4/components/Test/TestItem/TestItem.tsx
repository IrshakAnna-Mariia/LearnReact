import React from "react";
import { Typography, Card, Space, Radio, RadioChangeEvent } from "antd";

import { PropTestItem } from "./TestItem.types";

const TestItem = ({questionObj, isCheckTest, onChangeText}: PropTestItem): JSX.Element => {
  const isRight: boolean = questionObj.rightAnswer === questionObj.settedAnswer;

  const { Text } = Typography;

  const handleChangeEnteredValue = ({
    target: { value },
  }: RadioChangeEvent): void => onChangeText(questionObj.question, value);

  return (
    <Card>
      <Text> {questionObj.question} </Text>
      <br />
      <Text type="secondary">
        {isCheckTest &&
          (isRight
            ? `ваш ответ ${questionObj.settedAnswer}, правильно`
            : `ваш ответ ${questionObj.settedAnswer}, не правильно, правильный ответ ${questionObj.rightAnswer}`)}
      </Text>
      <br />
      <Radio.Group
        onChange={handleChangeEnteredValue}
        value={questionObj.settedAnswer}
        disabled={isCheckTest}
      >
        <Space direction="vertical">
          {questionObj.answers.map((answer) => (
            <Radio key={answer} value={answer}>
              <Text
                type={
                  isCheckTest && answer === questionObj.settedAnswer
                    ? isRight
                      ? "success"
                      : "danger"
                    : undefined
                }
              >
                {answer}
              </Text>
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </Card>
  );
};

export default TestItem;
