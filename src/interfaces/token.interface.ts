import { TUnitOfMeasurement, TSizesText, TFonts, TColors, TLabelSize } from '../types/util-types';


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
  global          : string,
  globalLight1    : string,
  globalDark1     : string,
  primary         : string,
  primaryLight1   : string,
  primaryDark1    : string,
  secondary       : string,
  secondaryLight1 : string,
  secondaryDark1  : string,
  tertiary        : string,
  tertiaryLight1  : string,
  tertiaryDark1   : string,
  success         : string,
  successLight1   : string,
  successDark1    : string,
  disabled        : string,
  disabledLight1  : string,
  disabledDark1   : string,
  warning         : string,
  warningLight1   : string,
  warningDark1    : string,
  failure         : string,
  failureLight1   : string,
  failureDark1    : string,
  loading         : string,
  loadingLight1   : string,
  loadingDark1    : string,
  info            : string,
  infoLight1      : string,
  infoDark1       : string,
  white           : string,
  black           : string,
  neutral         : string,
  neutralLight1   : string,
  neutralLight2   : string,
  neutralLight3   : string,
  neutralDark1    : string,
  neutralDark2    : string,
  neutralDark3    : string
}

export interface ITokenSize extends ITokenSizeLabels, ITokenUnit {}

export interface ITokenBrand {
  globalColor: TColors,
  globalContrast: TColors

  primaryColor: TColors,
  primaryContrast: TColors

  secondaryColor: TColors,
  secondaryContrast: TColors

  tertiaryColor: TColors,
  tertiaryContrast: TColors

  warningColor: TColors,
  warningContrast: TColors

  infoColor: TColors,
  infoContrast: TColors

  failureColor: TColors,
  failureContrast: TColors

  loadingColor: TColors,
  loadingContrast: TColors

  disabledColor: TColors,
  disabledContrast: TColors

  successColor: TColors,
  successContrast: TColors
}

// export interface ITokenBrand {
//   global: {
//     color: TColors,
//     contrast: TColors
//   },
//   primary: {
//     color: TColors,
//     contrast: TColors
//   },
//   secondary: {
//     color: TColors,
//     contrast: TColors
//   },
//   tertiary: {
//     color: TColors,
//     contrast: TColors
//   },
//   warning: {
//     color: TColors,
//     contrast: TColors
//   },
//   info: {
//     color: TColors,
//     contrast: TColors
//   }
//   state: {
//     failure: {
//       color: TColors,
//       contrast: TColors
//     },
//     loading: {
//       color: TColors,
//       contrast: TColors
//     },
//     disabled: {
//       color: TColors,
//       contrast: TColors
//     },
//     success: {
//       color: TColors,
//       contrast: TColors
//     }
//   }
// }

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
  heading: string,
  title: string,
  text: string
}

export interface ITokenTypographyLevel {
  size: TLabelSize,
  lineHeight: number,
  letterSpacing: number,
  font: TFonts
}

// export interface ITokenTypography {
//   heading: {
//     level1: ITokenTypographyLevel,
//     level2: ITokenTypographyLevel,
//     level3: ITokenTypographyLevel
//   },
//   title: {
//     level1: ITokenTypographyLevel,
//     level2: ITokenTypographyLevel
//   }
// }

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
