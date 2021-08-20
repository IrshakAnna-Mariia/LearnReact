import React from "react";
import { Space, Pagination } from "antd";

import TestItem from "./TestItem";
interface PropsTest {
  isCheckTest: boolean | undefined;
  currentTest: number;
  setCurrentTest: React.Dispatch<React.SetStateAction<number>>;
  tests: TestItemTypeWithArr[];
  setTests: React.Dispatch<React.SetStateAction<TestItemTypeWithArr[]>>;
}

const Test = ({
  isCheckTest,
  currentTest,
  setCurrentTest,
  tests,
  setTests,
}: PropsTest): JSX.Element => {

  const onChengeTest = (question: string, settedAnswers: (string | undefined)[]) => {
    setTests((prevTests) =>
      prevTests.map((testItem) =>
        testItem.question !== question
          ? testItem
          : { ...testItem, settedAnswers }
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
