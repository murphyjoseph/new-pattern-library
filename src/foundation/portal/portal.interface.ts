import { IPattern } from '../../shared/interfaces/pattern.interface';

export interface IPortal extends IPattern {
  isBlurred?: boolean,
  preset?: "initial"
}