import { IPattern } from '../../../shared/interfaces/pattern.interface';
import { IIconAction } from '../../../foundation/icon/icon.interface';
import { IStylesSpacing } from '../../../shared/interfaces/styles.interface';
import { TColors } from '../../../shared/types/util-types';
import { ITextAction, ITextLink } from '../../../foundation/text/text.interface';

export interface IBar extends IPattern {
  colorBackground: TColors,
  padding?: IStylesSpacing,
  margin?: IStylesSpacing,
  iconActionBindings?: IIconAction
  textActionBindings?: ITextAction
  textLinkBindings?: ITextLink
  slot: JSX.Element | React.ReactNode
}