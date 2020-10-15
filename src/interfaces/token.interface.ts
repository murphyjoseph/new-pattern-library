import { TUnitOfMeasurement, TSizesText, TFonts, TColor, TLabelSize } from '../types/util-types';


// probably should be one or the other still working out
// how this should work but long term seems like "number" is better
export interface ITokenSizeLabels {
  size1 : string | number,
  size2 : string | number,
  size3 : string | number,
  size4 : string | number,
  size5 : string | number,
  size6 : string | number,
  size7 : string | number,
  size8 : string | number,
  size9 : string | number,
  size10: string | number,
  size11: string | number,
  size12: string | number
}

export interface ITokenUnit {
  unit: TUnitOfMeasurement
}

// global, primary, secondary, tertiary, warning, info, failure, loading, disabled, success
export interface ITokenColor {
  global            : string,
  globalLight1      : string,
  globalDark1       : string,
  globalContrast    : string,
  primary           : string,
  primaryLight1     : string,
  primaryDark1      : string,
  primaryContrast   : string,
  secondary         : string,
  secondaryLight1   : string,
  secondaryDark1    : string,
  secondaryContrast : string,
  tertiary          : string,
  tertiaryLight1    : string,
  tertiaryDark1     : string,
  tertiaryContrast  : string,
  success           : string,
  successLight1     : string,
  successDark1      : string,
  successContrast   : string,
  disabled          : string,
  disabledLight1    : string,
  disabledDark1     : string,
  disabledContrast  : string,
  warning           : string,
  warningLight1     : string,
  warningDark1      : string,
  warningContrast   : string,
  failure           : string,
  failureLight1     : string,
  failureDark1      : string,
  failureContrast   : string,
  loading           : string,
  loadingLight1     : string,
  loadingDark1      : string,
  loadingContrast   : string,
  info              : string,
  infoLight1        : string,
  infoDark1         : string,
  infoContrast      : string,
  white             : string,
  black             : string,
  neutral           : string,
  neutralLight1     : string,
  neutralLight2     : string,
  neutralLight3     : string,
  neutralDark1      : string,
  neutralDark2      : string,
  neutralDark3      : string
}

export interface ITokenSize extends ITokenSizeLabels, ITokenUnit {}

export interface ITokenBrand {
  globalColor: TColor
  globalContrast: TColor

  primaryColor: TColor
  primaryContrast: TColor

  secondaryColor: TColor
  secondaryContrast: TColor

  tertiaryColor: TColor
  tertiaryContrast: TColor

  warningColor: TColor
  warningContrast: TColor

  infoColor: TColor
  infoContrast: TColor

  failureColor: TColor,
  failureContrast: TColor

  loadingColor: TColor,
  loadingContrast: TColor

  disabledColor: TColor,
  disabledContrast: TColor

  successColor: TColor,
  successContrast: TColor
}

export interface ITokenShadow {
  small: {
    blur: string,
    spread: string,
    x: string,
    y: string
  },
  medium: {
    blur: string,
    spread: string,
    x: string,
    y: string
  },
  large: {
    blur: string,
    spread: string,
    x: string,
    y: string
  }
}

export interface ITokenDepth {
  content    : number,
  navigation : number,
  sheet      : number,
  overlay    : number,
  modal      : number,
  toast      : number,
  dialog     : number,
  menu       : number,
  tooltip    : number
}


export interface ITokenBreakpoint {
  breakpoint1  : string,
  breakpoint2  : string,
  breakpoint3  : string,
  breakpoint4  : string,
  breakpoint5  : string,
  breakpoint6  : string,
  breakpoint7  : string,
  breakpoint8  : string,
  breakpoint9  : string,
  breakpoint10 : string,
  main         : string
}

export interface ITokenTypographyFonts {
  heading : string,
  title   : string,
  text    : string
}

export interface ITokenTypographyLevel {
  size          : TLabelSize,
  lineHeight    : number,
  letterSpacing : number,
  font          : TFonts
}

export interface ITokenTypography {
  level1: ITokenTypographyLevel,
  level2: ITokenTypographyLevel,
  level3: ITokenTypographyLevel,
  level4: ITokenTypographyLevel,
  level5: ITokenTypographyLevel,
  level6: ITokenTypographyLevel,
  level7: ITokenTypographyLevel,
  level8: ITokenTypographyLevel
}
