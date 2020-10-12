import { TWhiteSpace } from '../types/util-types';
import { TBreakpoints,
         TColors,
         TLabelSize,
         TLabelPosition,
         TLabelDirection,
         TAlignText,
         TBranding,
         TPositionTypes,
         TDirectionSpacing,
         TDisplaySettings } from '../types/util-types';

export interface IStylesGrid {
  container: "",
  colType: "",
  colValue: ""
}

export interface IStylesBrand {
  brand?: TBranding
}

export interface IStylesRounded {
  isRounded?: boolean,
  isRoundedHalf?: boolean,
  isRoundedFull?: boolean
}

export interface IStylesColor {
  colorText?: TColors,
  colorBackground?: TColors
}

export interface IStylesBorder {
  color?: TColors,
  size?: TLabelSize,
  direction?: TDirectionSpacing
}

export interface IStylesColorSvg {
  colorFill?: TColors,
  colorStroke?: TColors
}

export interface IStylesSpacing extends IStylesBreakpoint {
  size: TLabelSize,
  direction: TDirectionSpacing
}

export interface IStylesTextAlign {
  textAlignment?: TAlignText
}

export interface IStylesDisplay {
  display?: TDisplaySettings
}

export interface IStylesShadow {
  size?: TLabelSize,
  direction?: TLabelDirection
}

export interface IStylesMaxWidth extends IStylesBreakpoint {
  size?: TLabelSize
}

export interface IStylesOverflow {
  direction: "x" | "y" | "all"
  type: "hidden" | "auto" | "scroll" | "visible"
}

export interface IStylesPosition {
  direction?: TLabelPosition,
  type?: TPositionTypes
}

export interface IStylesBreakpoint {
  breakpointName?: TBreakpoints,
  breakpointDirection?: "over" | "under"
}