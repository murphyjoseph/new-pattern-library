import { IPattern } from '../../shared/interfaces/pattern.interface';
import { IState } from '../../shared/interfaces/state.interface';
import { IStylesSpacing, IStylesColor, IStylesDisplay } from '../../shared/interfaces/styles.interface';
import { IText } from '../text/text.interface';

export interface ILabelText {
  text: string
}

export interface ILabel extends IPattern {
  main?: ILabelText
  secondary?: ILabelText,
  isRequired?: boolean,
  for: string
  display?: IStylesDisplay
}