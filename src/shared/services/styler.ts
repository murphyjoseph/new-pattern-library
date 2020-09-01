import _remove from 'lodash/remove';
import styles from "../styles/styles.module.scss";
import { IStylesBorder, IStylesMaxWidth, IStylesRounded, IStylesColor, IStylesPosition, IStylesSpacing, IStylesOverflow, IStylesShadow } from '../interfaces/styles.interface';
import { TWhiteSpace, TDisplaySettings, TAlignmentText, TColors } from '../types/util-types';
import { isRoundedFull, isRounded } from '../styles/styles.module.scss';

const Styles = styles as { [key: string]: string };

export const styleBorder = (border: IStylesBorder) => {
  if (!!border) {
    if (!!border.color && !!border.size && !!border.direction) {
      const size = `-${border.size}`;
      const direction = `-${border.direction}`;
      const color = `-${border.color}`;
      return (
        Styles[`mo-color-border${direction}${color}${size}`]
      )
    } else {
      console.warn("No size, color, and or direction was set on border object.");
    }
  }
}

export const styleMaxWidth = (maxWidth: IStylesMaxWidth) => {
  if (!!maxWidth) {
    if (Array.isArray(maxWidth)) {
      maxWidth.forEach((maxWidth: any) => {
        const size = `-${maxWidth.size}`
        const breakpointName = !!maxWidth.breakpointName ? `-${maxWidth.breakpointName}` : ""
        const breakpointDirection = !!maxWidth.breakpointDirection ? `-${maxWidth.breakpointDirection}` : ""
        return (
          Styles[`ut-max-width${size}${breakpointDirection}${breakpointName}`]
        )
      });
    } else {
      const size = `-${maxWidth.size}`
      const breakpointName = `-${maxWidth.breakpointName}`
      const breakpointDirection = `-${maxWidth.breakpointDirection}`
      return (
        Styles[`ut-max-width${size}${breakpointDirection}${breakpointName}`]
      )
    }
  }
}

export const styleWhiteSpace = (whiteSpace: TWhiteSpace) => {
  return Styles[`ut-white-space-${whiteSpace}`]
}

export const styleDisplay = (display: TDisplaySettings) => {
  return Styles[`ut-display-${display}`]
}

export const styleTextAlignment = (textAlignment: TAlignmentText) => {
  return Styles[`ut-align-text-${textAlignment}`]
}

// add pointer if element has click event
export const styleOnClick = (onClick: () => void) => {
  if (!!onClick) return Styles['ut-clicker-pointer']
}

export const styleIsRounded = (isRounded: IStylesRounded) => {
  return Styles['ut-rounded']
}

export const styleIsRoundedFull = (isRoundedFull: IStylesRounded) => {
  return Styles['ut-rounded-full']
}

export const styleColorStroke = (colorStroke: TColors) => {
  return Styles[`mo-color-stroke-${colorStroke}`]
}

export const styleColorFill = (colorFill: TColors) => {
  return Styles[`mo-color-fill-${colorFill}`]
}

export const styleColorBackground = (colorBackground: TColors) => {
  return Styles[`mo-color-bg-${colorBackground}`]
}

export const styleColorText = (colorText: TColors) => {
  return Styles[`mo-color-text-${colorText}`]
}

// IStylesPosition
export const stylePosition = (position: any) => {
  if(!!position.type && !!position.direction || !!position.direction) {
    const direction = !!position.direction ? `-${position.direction}`: "";
    const type = !!position.type ? `-${position.type}`: "";
    const size = !!position.size ? `-${position.size}`: "";
    const sizeType = !!position.sizeType ? `-${position.sizeType}`: "";
    if (!direction && !type)
      console.warn("A minimum of direction and type must be defined for adding position.");
    if (!!size && !sizeType || !size && !!sizeType)
      console.warn("You must include both sizeType and size or neither for adding position.");
      return Styles[`ut-position${type}${direction}${sizeType}${size}`]
  }
}

export const stylePadding = (padding: IStylesSpacing) => {
  if (Array.isArray(padding)) {
    padding.forEach((padding: any) => {
      const direction = `-${padding.direction}`;
      const size = `-${padding.size}`;
      const breakpointName = !!padding.breakpointName ? `-${padding.breakpointName}` : "";
      const breakpointDirection = !!padding.breakpointDirection ? `-${padding.breakpointDirection}` : "";
      return Styles[`ut-padding${direction}${size}${breakpointDirection}${breakpointName}`]
    });
  } else {
    const direction = `-${padding.direction}`;
    const size = `-${padding.size}`;
    const breakpointName = !!padding.breakpointName ? `-${padding.breakpointName}` : "";
    const breakpointDirection = !!padding.breakpointDirection ? `-${padding.breakpointDirection}` : "";
    console.log(`ut-padding${direction}${size}${breakpointDirection}${breakpointName}`)
    return Styles[`ut-padding${direction}${size}${breakpointDirection}${breakpointName}`];
  }
}

export const styleMargin = (margin: IStylesSpacing) => {
  if (Array.isArray(margin)) {
    margin.forEach((margin: any) => {
      const direction = `-${margin.direction}`;
      const size = `-${margin.size}`;
      const breakpointName = !!margin.breakpointName ? `-${margin.breakpointName}` : "";
      const breakpointDirection = !!margin.breakpointDirection ? `-${margin.breakpointDirection}` : "";
      return Styles[`ut-margin${direction}${size}${breakpointDirection}${breakpointName}`]
    });
  } else {
    const direction = `-${margin.direction}`;
    const size = `-${margin.size}`;
    const breakpointName = !!margin.breakpointName ? `-${margin.breakpointName}` : ""
    const breakpointDirection = !!margin.breakpointDirection ? `-${margin.breakpointDirection}` : ""
    return Styles[`ut-margin${direction}${size}${breakpointDirection}${breakpointName}`]
  }
}

export const styleOverflow = (overflow: IStylesOverflow) => {
  if (!overflow.direction && !overflow.type) {
    console.warn("Please supply both overflow direction and overflow type values.");
    return;
  }
  const direction = `-${overflow.direction}`;
  const type = `-${overflow.type}`;
  return Styles[`ut-overflow${direction}${type}`]
}

// SHADOW CONCATENATION
export const styleShadow = (shadow: IStylesShadow) => {
  if (!!shadow.size && !!shadow.direction) {
    const direction = `-${shadow.direction}`;
    const size = `-${shadow.size}`;
    return Styles[`ut-shadow${direction}${size}`]
  }
}

export const styler = ({shadow, overflow, margin, padding, position, colorText, colorBackground, colorFill, colorStroke, isRoundedFull, isRounded, onClick, textAlignment, display, whiteSpace, maxWidth, border, css}: any) => {
  // const listofstyles = {shadow: "", overflow: "", margin: "", padding: "", position: "", colorText: "", colorBackground: "", colorFill: "", colorStroke: "", isRoundedFull: "", isRounded: "", onClick: "", textAlignment: "", display: "", whiteSpace: "", maxWidth: "", border: ""}
  let _shadow, _overflow, _margin, _padding, _position, _colorText, _colorBackground, _colorFill, _colorStroke, _isRoundedFull, _isRounded, _onClick, _textAlignment, _display, _whiteSpace, _maxWidth, _border, _cssClasses;
  // if (!!shadow) _shadow = styleShadow(shadow)
  // if (!!overflow) _overflow = styleOverflow(overflow)
  // if (!!margin) _margin = styleMargin(margin)
  // if (!!padding) _padding = stylePadding(padding)
  // if (!!position) _position = stylePosition(position)
  // if (!!colorText) _colorText = styleColorText(colorText)
  // if (!!colorBackground) _colorBackground = styleColorBackground(colorBackground)
  // if (!!colorFill) _colorFill = styleColorFill(colorFill)
  // if (!!colorStroke) _colorStroke = styleColorStroke(colorStroke)
  // if (!!isRoundedFull) _isRoundedFull = styleIsRoundedFull(isRoundedFull)
  // if (!!isRounded) _isRounded = styleIsRounded(isRounded)
  // if (!!onClick) _onClick = styleOnClick(onClick)
  // if (!!textAlignment) _textAlignment = styleTextAlignment(textAlignment)
  // if (!!display) _display = styleDisplay(display)
  // if (!!whiteSpace) _whiteSpace = styleWhiteSpace(whiteSpace)
  // if (!!maxWidth) _maxWidth = styleMaxWidth(maxWidth)
  // if (!!border) _border = styleBorder(border)
  // if (!!cssClasses) _cssClasses = cssClasses

  let CssClassesArray: any = []

  if (!!shadow) CssClassesArray.push(styleShadow(shadow))
  if (!!overflow) CssClassesArray.push(styleOverflow(overflow))
  if (!!margin) CssClassesArray.push(styleMargin(margin))
  if (!!padding) CssClassesArray.push(stylePadding(padding))
  if (!!position) CssClassesArray.push(stylePosition(position))
  if (!!colorText) CssClassesArray.push(styleColorText(colorText))
  if (!!colorBackground) CssClassesArray.push(styleColorBackground(colorBackground))
  if (!!colorFill) CssClassesArray.push(styleColorFill(colorFill))
  if (!!colorStroke) CssClassesArray.push(styleColorStroke(colorStroke))
  if (!!isRoundedFull) CssClassesArray.push(styleIsRoundedFull(isRoundedFull))
  if (!!isRounded) CssClassesArray.push(styleIsRounded(isRounded))
  if (!!onClick) CssClassesArray.push(styleOnClick(onClick))
  if (!!textAlignment) CssClassesArray.push(styleTextAlignment(textAlignment))
  if (!!display) CssClassesArray.push(styleDisplay(display))
  if (!!whiteSpace) CssClassesArray.push(styleWhiteSpace(whiteSpace))
  if (!!maxWidth) CssClassesArray.push(styleMaxWidth(maxWidth))
  if (!!border) CssClassesArray.push(styleBorder(border))
  if (!!css) {
    if (!!css.classes) CssClassesArray.push(css.classes)
    if (!!css.internal) CssClassesArray.push(css.internal)
  }

  return CssClassesArray;

  // const _shadow = !!shadow ? styleShadow(shadow) : "";
  // const _overflow = !!overflow ? styleOverflow(overflow) : "";
  // const _margin = !!margin ? styleMargin(margin) : "";
  // const _padding = !!padding ? stylePadding(padding) : "";
  // const _position = !!position ? stylePosition(position) : "";
  // const _colorText = !!colorText ? styleColorText(colorText) : "";
  // const _colorBackground = !!colorBackground ? styleColorBackground(colorBackground) : "";
  // const _colorFill = !!colorFill ? styleColorFill(colorFill) : "";
  // const _colorStroke = !!colorStroke ? styleColorStroke(colorStroke) : "";
  // const _isRoundedFull = !!isRoundedFull ? styleIsRoundedFull(isRoundedFull) : "";
  // const _isRounded = !!isRounded ? styleIsRounded(isRounded) : "";
  // const _onClick = !!onClick ? styleOnClick(onClick) : "";
  // const _textAlignment = !!textAlignment ? styleTextAlignment(textAlignment) : "";
  // const _display = !!display ? styleDisplay(display) : "";
  // const _whiteSpace = !!whiteSpace ? styleWhiteSpace(whiteSpace) : "";
  // const _maxWidth = !!maxWidth ? styleMaxWidth(maxWidth) : "";
  // const _border = !!border ? styleBorder(border) : "";
  // const _cssClasses = !!cssClasses ? cssClasses : "";
  // return [_shadow, _overflow, _margin, _padding, _position, _colorText, _colorBackground, _colorFill, _colorStroke, _isRoundedFull, _isRounded, _onClick, _textAlignment, _display, _whiteSpace, _maxWidth, _border, _cssClasses].join(" ");
}

export const stylerAttributeAndClassSetup = (bindings: any) => {
  const stylerClasses = styler(bindings)
  if (!!stylerClasses && stylerClasses.length > 0) return { className: stylerClasses }
  return
}