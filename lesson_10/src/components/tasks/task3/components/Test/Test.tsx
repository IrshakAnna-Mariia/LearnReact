import React from "react";
import { Space, Pagination } from "antd";

import TestItem from "./TestItem/TestItem";

interface PropsTest {
  isCheckTest: boolean | undefined,
  currentTest: number,
  setCurrentTest: React.Dispatch<React.SetStateAction<number>>,
  tests: TestItemType[],
  setTests: React.Dispatch<React.SetStateAction<TestItemType[]>>
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

  const handleChangeQuestion = (pageNumber: number) =>
    setCurrentTest(pageNumber);

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
        <div>
          <TestItem
            key={tests[currentTest - 1].question}
            questionObj={tests[currentTest - 1]}
            isCheckTest={isCheckTest}
            onChangeText={onChengeTest}
          />
          <Pagination
            simple
            current={currentTest}
            pageSize={1}
            total={tests.length}
            onChange={handleChangeQuestion}
          />
        </div>
      )}
    </Space>
  );
};

export default Test;
