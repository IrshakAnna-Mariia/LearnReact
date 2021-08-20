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

  const onChengeTest = (question: string, settedAnswer: string) => {
    setTests((prevTests) =>
      prevTests.map((testItem) =>
        testItem.question !== question
          ? testItem
          : { ...testItem, settedAnswer }
      )
    );
  };

  const handleChangeQuestion = (pageNumber: number) => setCurrentTestQ(pageNumber);

  useEffect(() => {
    if (currentTestQ === tests.length && !isCheckTest) {
      onVisibleButton(true);
    } else onVisibleButton(false);
    // eslint-disable-next-line
  }, [currentTestQ, isCheckTest]);

  useEffect(() => {
    const notEmptyAnswerLength = tests
      .map((testItem) => testItem.settedAnswer)
      .filter((answer) => answer !== "").length;
    if (notEmptyAnswerLength === tests.length) {
      onDisableButton(false);
    } else onDisableButton(true);
    // eslint-disable-next-line
  }, [tests]);

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
            pageSize={1}
            total={tests.length}
            onChange={handleChangeQuestion}
          />
        </>
      )}
    </Space>
  );
};

export default Test;
