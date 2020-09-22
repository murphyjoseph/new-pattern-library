import { IPattern } from '../../shared/interfaces/pattern.interface';
import { TColors } from '../../shared/types/util-types';
import { IStylesSpacing } from '../../shared/interfaces/styles.interface';

export interface IContent extends IPattern {
  colorBackground?: TColors,
  padding?: IStylesSpacing,
  margin?: IStylesSpacing,
  slot: JSX.Element | React.ReactNode
}