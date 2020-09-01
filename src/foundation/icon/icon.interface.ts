import { IPattern } from '../../shared/interfaces/pattern.interface';
import { ILink } from '../../shared/interfaces/link.interface';
import { IEvent } from '../../shared/interfaces/event.interface';
import { IStylesColorSvg, IStylesTextAlign, IStylesDisplay, IStylesSpacing } from '../../shared/interfaces/styles.interface';
import { TSizeLabels } from '../../shared/types/util-types';

import { TIconNames } from './icon.enum';

export interface IIcon extends IPattern, ILink, IEvent, IStylesColorSvg, IStylesTextAlign, IStylesDisplay {
  padding?: IStylesSpacing,
  margin?: IStylesSpacing,
  size: TSizeLabels,
  name: TIconNames
}

export interface IIconLink extends IIcon, ILink {}


export interface IIconAction extends IIcon, IEvent {}

