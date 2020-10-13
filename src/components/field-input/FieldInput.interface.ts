import { ILabel } from "../label/Label.interface";
import { IText } from "../text/Text.interface";
import { IPattern } from "../../interfaces/pattern.interface";
import { IState } from "../../interfaces/state.interface";
import { IStylesColor, IStylesSpacing } from "../../interfaces/styles.interface";

type TKinds = "text" | "tel" | "email" | "password" | "checkbox" | "radio" | "number" | "zipcode" | "hidden";

export interface IFieldInputLabels extends IPattern {
  main?: IText,
  secondary?: IText
  isRequired?: boolean
}

// ID is not required for pattern interface but it does need to be required here for the fields

export interface IFieldInput extends IPattern, IState, IStylesColor {
  kind: TKinds,
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
  padding?: IStylesSpacing,
  margin?: IStylesSpacing,
  for: string,
  traitLabel?: ILabel,
  onChange?: React.FormEventHandler<HTMLInputElement>,
  validation?: () => {[key: string]: any}
}
