import { IPattern } from '../../shared/interfaces/pattern.interface';
import { IState } from '../../shared/interfaces/state.interface';
import { IStylesSpacing, IStylesColor } from '../../shared/interfaces/styles.interface';
import { IText, ITextForm } from '../text/text.interface';
import { ILabel } from '../label/label.interface';

type TKinds = "text" | "tel" | "email" | "password" | "checkbox" | "radio" | "number" | "zipcode" | "hidden";

export interface IFieldInputLabels extends IPattern {
  main?: IText,
  secondary?: IText
  isRequired?: boolean
}

// ID is not required for pattern interface but it does need to be required here for the fields

export interface IFieldInput extends IPattern, IState, IStylesColor {
  kind: TKinds,
  onChange?: React.FormEventHandler<HTMLInputElement>,
  onFocus?: Function,
  readonly?: boolean,
  isRequired?: boolean,
  name?: string,
  maxLength?: number,
  max?: number,
  min?: number,
  placeholder?: string,
  value?: any,
  defaultValue?: any,
  inputmode?: string,
  pattern?: string,
  validation?: () => {[key: string]: any},
  padding?: IStylesSpacing,
  margin?: IStylesSpacing,
  id: string,
  traitLabel?: ILabel
  traitDescription?: IText
}

