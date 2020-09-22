import { IPattern } from '../../../shared/interfaces/pattern.interface';
import { IBar } from '../Bar/Bar.interface';
import { IContent } from '../Content/Content.interface';
import { IStylesShadow } from '../../../shared/interfaces/styles.interface';

export interface IPane extends IPattern {
  shadow: IStylesShadow,
  traitBar: IBar,
  traitContent: IContent
}