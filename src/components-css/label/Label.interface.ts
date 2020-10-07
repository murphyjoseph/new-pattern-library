import { IPattern } from '../../interfaces/pattern.interface';
import { IState } from '../../interfaces/state.interface';
import { IStylesSpacing, IStylesColor, IStylesDisplay } from '../../interfaces/styles.interface';
import { IText } from '../text/Text.interface';

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