import { IPattern } from '../../shared/interfaces/pattern.interface';
import { IFieldInput } from '../field-input/field-input.interface';
import { IStylesSpacing } from '../../shared/interfaces/styles.interface';

export interface IFieldGroupInput extends IPattern {
  margin?: IStylesSpacing
  padding?: IStylesSpacing
  traitFieldInput: Omit<IFieldInput[], "kind">
}