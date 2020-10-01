import { IPattern } from '../../shared/interfaces/pattern.interface';
import { IStylesColor, IStylesSpacing, IStylesBorder, IStylesPosition,
         IStylesRounded, IStylesShadow, IStylesDisplay, IStylesTextAlign,
         IStylesOverflow, IStylesMaxWidth } from '../../shared/interfaces/styles.interface';
import { TSizeLabels } from '../../shared/types/util-types';
import { IEvent } from '../../shared/interfaces/event.interface';
import { ILink } from '../../shared/interfaces/link.interface';

export interface IContainer extends IPattern, IStylesColor, IStylesRounded, IStylesDisplay, IStylesTextAlign {
  border?: IStylesBorder,
  padding?: IStylesSpacing | IStylesSpacing[],
  margin?: IStylesSpacing,
  position?: IStylesPosition,
  shadow?: IStylesShadow,
  minHeight?: TSizeLabels,
  maxHeight?: TSizeLabels,
  maxWidth?: IStylesMaxWidth | IStylesMaxWidth[],
  overflow?: IStylesOverflow
}

export interface IContainerAction extends IContainer, IEvent {}
export interface IContainerLink extends IContainer, ILink {}
export interface IContainerActionLink extends IContainer, IEvent, ILink {}