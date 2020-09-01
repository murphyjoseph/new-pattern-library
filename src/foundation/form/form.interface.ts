import { IPattern } from '../../shared/interfaces/pattern.interface';
import { ITextForm } from '../text/text.interface';

export interface IForm extends IPattern {
  name: string
  traitTextForm: ITextForm
  onSubmit: (e: React.SyntheticEvent) => {}
}