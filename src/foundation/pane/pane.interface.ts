import { IPattern } from '../../shared/interfaces/pattern.interface';
import { IBar } from '../bar/bar.interface';
import { IContent } from '../content/content.interface';
import { IStylesShadow } from '../../shared/interfaces/styles.interface';

export interface IPane extends IPattern {
  shadow: IStylesShadow,
  traitBar: IBar,
  traitContent: IContent
}