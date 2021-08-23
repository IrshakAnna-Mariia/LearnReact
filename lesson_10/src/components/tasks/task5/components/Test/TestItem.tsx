import React, { FC } from "react";
import classNames from "classnames";
import { Typography, Card, Space, Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox/Checkbox";

import useStyles from "../../styles";

const { Text } = Typography;
interface PropTestItemTask5 {
  questionObj: TestItemTypeWithArr;
  isCheckTest: boolean | undefined;
  onChangeText(question: string, settedAnswers: (string | undefined)[]): void;
}

const TestItem: FC<PropTestItemTask5> = ({
  questionObj,
  isCheckTest,
  onChangeText,
}) => {
  const classes = useStyles();
  const isRight =
    questionObj.rightAnswers.length === questionObj.settedAnswers.length &&
    questionObj.rightAnswers.every(
      (val, index) => val === questionObj.settedAnswers[index]
    );

  const handleChangeEnteredAnswers = ({
    target: { name },
  }: CheckboxChangeEvent) => {
    questionObj.settedAnswers.find((answer) => answer === name)
      ? onChangeText(
          questionObj.question,
          questionObj.settedAnswers.filter((currAnswer) => currAnswer !== name)
        )
      : onChangeText(
          questionObj.question,
          questionObj.settedAnswers.concat(name)
        );
  };

  return (
    <Card>
      <Space direction="vertical">
        <Text> {questionObj.question} </Text>
        <Text type="secondary">
          {isCheckTest &&
            (isRight
              ? `ваш ответ ${questionObj.settedAnswers.map(
                  (item) => item
                )}, правильно`
              : `ваш ответ ${questionObj.settedAnswers.map(
                  (item) => item
                )}, не правильно, правильный ответ ${questionObj.rightAnswers.map(
                  (item) => item
                )}`)}
        </Text>
        <Space direction="vertical" className={classes.root}>
          {questionObj.answers.map((answer) => (
            <Checkbox
              key={answer}
              name={answer}
              checked={questionObj.settedAnswers.includes(answer)}
              onChange={handleChangeEnteredAnswers}
            >
              <Text
                className={classNames({
                  isRight:
                    isCheckTest &&
                    questionObj.settedAnswers.includes(answer) &&
                    questionObj.rightAnswers.includes(answer),
                  notRight:
                    isCheckTest &&
                    questionObj.settedAnswers.includes(answer) &&
                    !questionObj.rightAnswers.includes(answer),
                })}
              >
                {answer}
              </Text>
            </Checkbox>
          ))}
        </Space>
      </Space>
    </Card>
  );
};

export default TestItem;
