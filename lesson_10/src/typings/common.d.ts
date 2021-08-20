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
