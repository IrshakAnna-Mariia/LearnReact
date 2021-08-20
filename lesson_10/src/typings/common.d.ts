declare interface EmployeesList {
  key: string,
  name: string,
  surname: string,
  workedDays: number,
  salaryOfDay: number,
  salary: number
}

declare interface TestItemType {
  question: string,
  answer: string,
  settedAnswer: string
}
declare interface TestItemType4 {
  question: string,
  answers: string[],
  rightAnswer: string,
  settedAnswer: string
}
declare interface PropTestItem {
  questionObj: TestItemType,
  isCheckTest: boolean | undefined,
  onChangeText(question: string, settedAnswers: string[]): void
}

declare interface TestItemTypeWithArr {
  question: string,
  answers: string[],
  rightAnswers: string[],
  settedAnswers: (string|undefined)[]
}
