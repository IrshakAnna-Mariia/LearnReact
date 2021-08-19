import React, { useState, useEffect } from "react";
import { Space, Pagination } from "antd";

import { test } from "../../utils/constants";
import { TestItemType } from "../../utils/constants.types";
import TestItem from "./TestItem/TestItem";
import { PropsTest } from "./Test.types";

const Test = ({
  isCheckTest,
  onDisableButton,
  onVisibleButton,
}: PropsTest): JSX.Element => {
  const [tests, setTests] = useState<TestItemType[]>(test);
  const [currentTestQ, setCurrentTestQ] = useState<number>(1);

  useEffect(() => {
    if (currentTestQ === tests.length && !isCheckTest) {
      onVisibleButton(true);
    } else onVisibleButton(false);
  }, [currentTestQ, isCheckTest]);

  useEffect(() => {
    const notEmptyAnswerLength = tests
      .map((testItem) => testItem.settedAnswer)
      .filter((answer) => answer !== "").length;
    if (notEmptyAnswerLength === tests.length) {
      onDisableButton(false);
    } else onDisableButton(true);
  }, [tests]);

  const onChengeTest = (question: string, settedAnswer: string) => {
    setTests((prevTests) =>
      prevTests.map((testItem) =>
        testItem.question !== question
          ? testItem
          : { ...testItem, settedAnswer }
      )
    );
  };

  const handleChangeQuestion = (page: number) => setCurrentTestQ(page);

  return (
    <Space direction="vertical">
      {isCheckTest ? (
        tests.map((question) => (
          <TestItem
            key={question.question}
            questionObj={question}
            isCheckTest={isCheckTest}
            onChangeText={onChengeTest}
          />
        ))
      ) : (
        <>
          <TestItem
            key={tests[currentTestQ - 1].question}
            questionObj={tests[currentTestQ - 1]}
            isCheckTest={isCheckTest}
            onChangeText={onChengeTest}
          />
          <Pagination
            simple
            defaultCurrent={1}
            total={tests.length * 10}
            onChange={handleChangeQuestion}
          />
        </>
      )}
    </Space>
  );
};

export default Test;
