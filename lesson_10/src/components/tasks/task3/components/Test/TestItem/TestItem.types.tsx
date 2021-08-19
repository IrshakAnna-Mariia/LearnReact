import { TestItemType } from "../../../utils/constants.types";

export interface PropTestItem {
  questionObj: TestItemType,
  isCheckTest: boolean | undefined,
  onChangeText(question: string, settedAnswer: string):void
}
