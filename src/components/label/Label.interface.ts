import { IPattern } from '../../interfaces/pattern.interface';
import { IStylesDisplay } from '../../interfaces/styles.interface';

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