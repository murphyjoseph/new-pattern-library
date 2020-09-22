import { IPattern } from '../../shared/interfaces/pattern.interface';
import { IIcon } from '../icon/icon.interface';
import { IText } from '../text/text.interface';

export interface IFlag extends IPattern {
  traitIcon: IIcon,
  traitText: IText
}