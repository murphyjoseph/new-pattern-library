import { IStylesSpacing } from '../../shared/interfaces/styles.interface';
import { TColors } from '../../shared/types/util-types';
import { IPattern } from '../../shared/interfaces/pattern.interface';


export interface IPage extends IPattern {
  title: string
  margin: IStylesSpacing
  padding: IStylesSpacing
  colorBackground?: TColors
}