import React from "react";
import { Space, Pagination } from "antd";

import TestItem from "./TestItem";

interface PropsTest {
  isCheckTest: boolean | undefined;
  currentTest: number;
  setCurrentTest: React.Dispatch<React.SetStateAction<number>>;
  tests: TestItemType4[];
  setTests: React.Dispatch<React.SetStateAction<TestItemType4[]>>;
}

const Test = ({
  isCheckTest,
  currentTest,
  setCurrentTest,
  tests,
  setTests,
}: PropsTest): JSX.Element => {
  const onChengeTest = (question: string, settedAnswer: string) => {
    setTests((prevTests) =>
      prevTests.map((testItem) =>
        testItem.question !== question
          ? testItem
          : { ...testItem, settedAnswer }
      )
    );
  };

  const handleChangeQuestion = (page: number) => setCurrentTest(page);

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
            key={tests[currentTest - 1].question}
            questionObj={tests[currentTest - 1]}
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
