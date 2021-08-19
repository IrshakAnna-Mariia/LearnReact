import { TestItemType } from '../../utils/constants.types';

export interface PropsTest {
  isCheckTest: boolean | undefined,
  onDisableButton(disable:boolean): void,
  onVisibleButton(visible:boolean): void
}
