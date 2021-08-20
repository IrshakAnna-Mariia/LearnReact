import React, { useState } from "react";
import { Button } from "antd";

import Test from "./components/Test/Test";
import { test } from "./utils/constants";

const Task2: React.FC = () => {
  const [tests, setTests] = useState<TestItemType[]>(test);

  const [isCheckTest, setIsCheckTest] = useState<boolean>(false);

  const [currentTest, setCurrentTest] = useState<number>(1);

  const isDisableBtn = () => {
    const notEmptyAnswerLength = tests
      .map((testItem) => testItem.settedAnswer)
      .filter((answer) => answer !== "").length;
    if (notEmptyAnswerLength === tests.length) {
      return false;
    }

    return true;
  };

  return (
    <>
      <Test
        isCheckTest={isCheckTest}
        currentTest={currentTest}
        setCurrentTest={setCurrentTest}
        tests={tests}
        setTests={setTests}
      />
      <br />
      {currentTest === tests.length && (
        <Button disabled={isDisableBtn()} onClick={() => setIsCheckTest(true)}>
          Здать тест
        </Button>
      )}
    </>
  );
};

export default Task2;
