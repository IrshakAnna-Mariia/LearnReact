import React from "react";
import classNames from "classnames";
import { Typography, Card, Space, Radio, RadioChangeEvent } from "antd";

import useStyles from './style';

const { Text } = Typography;

interface PropTestItem {
  questionObj: TestItemType4;
  isCheckTest: boolean | undefined;
  onChangeText(question: string, settedAnswer: string): void;
}

const TestItem = ({
  questionObj,
  isCheckTest,
  onChangeText,
}: PropTestItem): JSX.Element => {
  const classes = useStyles();
  const isRight: boolean = questionObj.rightAnswer === questionObj.settedAnswer;

  const handleChangeEnteredValue = ({
    target: { value },
  }: RadioChangeEvent): void => onChangeText(questionObj.question, value);

  return (
    <Card>
      <Space direction="vertical">
        <Text> {questionObj.question} </Text>
        <Text type="secondary">
          {isCheckTest &&
            (isRight
              ? `ваш ответ ${questionObj.settedAnswer}, правильно`
              : `ваш ответ ${questionObj.settedAnswer}, не правильно, правильный ответ ${questionObj.rightAnswer}`)}
        </Text>
        <Radio.Group
          onChange={handleChangeEnteredValue}
          value={questionObj.settedAnswer}
          disabled={isCheckTest}
        >
          <Space direction="vertical" className={classes.root}>
            {questionObj.answers.map((answer) => (
              <Radio key={answer} value={answer}>
                <Text
                  className={classNames({
                    isRight: isCheckTest && answer === questionObj.settedAnswer && isRight,
                    notRight: isCheckTest && answer === questionObj.settedAnswer && !isRight,
                  })}
                >
                  {answer}
                </Text>
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Space>
    </Card>
  );
};

export default TestItem;
