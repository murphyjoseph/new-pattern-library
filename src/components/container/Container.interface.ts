import { IPattern } from '../../interfaces/pattern.interface';
import { IStylesColor, IStylesSpacing, IStylesBorder, IStylesPosition,
         IStylesRounded, IStylesShadow, IStylesDisplay, IStylesTextAlign,
         IStylesOverflow, IStylesMaxWidth } from '../../interfaces/styles.interface';
import { TLabelSize } from '../../types/util-types';
import { IEvent } from '../../interfaces/event.interface';
import { ILink } from '../../interfaces/link.interface';

export interface IContainer extends IPattern, IStylesColor, IStylesRounded, IStylesDisplay, IStylesTextAlign {
  border?: IStylesBorder,
  padding?: IStylesSpacing | IStylesSpacing[],
  margin?: IStylesSpacing,
  position?: IStylesPosition,
  shadow?: IStylesShadow,
  minHeight?: TLabelSize,
  maxHeight?: TLabelSize,
  maxWidth?: IStylesMaxWidth | IStylesMaxWidth[],
  overflow?: IStylesOverflow
}

export interface IContainerAction extends IContainer, IEvent {}
export interface IContainerLink extends IContainer, ILink {}
export interface IContainerActionLink extends IContainer, IEvent, ILink {}