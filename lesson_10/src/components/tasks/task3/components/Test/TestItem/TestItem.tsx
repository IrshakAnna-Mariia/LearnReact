import React, { ChangeEvent } from "react";
import { Typography, Card, Input } from "antd";
import classNames from "classnames";

import useStyles from "./style";
interface PropTestItem {
  questionObj: TestItemType;
  isCheckTest: boolean | undefined;
  onChangeText(question: string, settedAnswer: string): void;
}

const { Text } = Typography;

const TestItem = ({
  questionObj,
  isCheckTest,
  onChangeText,
}: PropTestItem): JSX.Element => {
  const classes = useStyles();

  const isRight: boolean = questionObj.answer === questionObj.settedAnswer;

  const handleChangeEnteredValue = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void =>
    onChangeText(questionObj.question, value);

  return (
    <Card className={classes.root}>
      <Text> {questionObj.question} </Text>
      <br />
      <Text type="secondary">
        {isCheckTest &&
          (isRight
            ? `ваш ответ ${questionObj.settedAnswer}, правильно`
            : `ваш ответ ${questionObj.settedAnswer}, не правильно, правильный ответ ${questionObj.answer}`)}
      </Text>
      <Input
        className={classNames('someClass', 'someClass2', {
          isRight: isCheckTest && isRight,
          notRight: isCheckTest && !isRight,
        })}
        value={questionObj.settedAnswer}
        onChange={handleChangeEnteredValue}
      />
    </Card>
  );
};

export default TestItem;
