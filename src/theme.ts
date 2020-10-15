import { ITokenColor, ITokenTypography, ITokenTypographyFonts, ITokenSize, ITokenBrand, ITokenBreakpoint, ITokenDepth, ITokenShadow } from './interfaces/token.interface';
import { EColor } from './theme.enum';
// hsla(200, 37%, 52%, 1)

// const color: ITokenColor = {
//   global            : 'hsla(0, 0%, 15%, 1)',
//   globalLight1      : 'hsla(0, 0%, 20%, 1)',
//   globalDark1       : 'hsla(0, 0%, 10%, 1)',
//   globalContrast    : 'hsla(0, 100%, 100%, 1)',
//   primary           : 'hsla(207, 64%, 48%, 1)',
//   primaryLight1     : 'hsla(200, 37%, 60%, 1)',
//   primaryDark1      : 'hsla(200, 37%, 58%, 1)',
//   primaryContrast   : 'hsla(0, 100%, 100%, 1)',
//   secondary         : 'hsla(200, 37%, 52%, 1)',
//   secondaryLight1   : 'hsla(200, 37%, 58%, 1)',
//   secondaryDark1    : 'hsla(200, 37%, 45%, 1)',
//   secondaryContrast : 'hsla(0, 100%, 100%, 1)',
//   tertiary          : 'hsla(400, 38%, 35%, 1)',
//   tertiaryLight1    : 'hsla(400, 38%, 40%, 1)',
//   tertiaryDark1     : 'hsla(400, 38%, 30%, 1)',
//   tertiaryContrast  : 'hsla(0, 100%, 100%, 1)',
//   success           : 'hsla(83, 46%, 47%, 1)',
//   successLight1     : 'hsla(83, 46%, 52%, 1)',
//   successDark1      : 'hsla(83, 46%, 40%, 1)',
//   successContrast   : 'hsla(0, 100%, 100%, 1)',
//   disabled          : 'hsla(0, 0%, 87%, 1)',
//   disabledLight1    : 'hsla(0, 0%, 92%, 1)',
//   disabledDark1     : 'hsla(0, 0%, 70%, 1)',
//   disabledContrast  : 'hsla(0, 100%, 100%, 1)',
//   warning           : 'hsla(7, 66%, 57%, 1)',
//   warningLight1     : 'hsla(7, 66%, 62%, 1)',
//   warningDark1      : 'hsla(7, 66%, 52%, 1)',
//   warningContrast   : 'hsla(0, 100%, 100%, 1)',
//   failure           : 'hsla(7, 66%, 57%, 1)',
//   failureLight1     : 'hsla(7, 66%, 62%, 1)',
//   failureDark1      : 'hsla(7, 66%, 52%, 1)',
//   failureContrast   : 'hsla(0, 100%, 100%, 1)',
//   loading           : 'hsla(47, 94%, 66%, 1)',
//   loadingLight1     : 'hsla(47, 94%, 70%, 1)',
//   loadingDark1      : 'hsla(47, 94%, 60%, 1)',
//   loadingContrast   : 'hsla(0, 100%, 100%, 1)',
//   info              : 'hsla(207, 64%, 48%, 1)',
//   infoLight1        : 'hsla(207, 64%, 55%, 1)',
//   infoDark1         : 'hsla(207, 64%, 42%, 1)',
//   infoContrast      : 'hsla(0, 100%, 100%, 1)',
//   white             : 'hsla(0, 100%, 100%, 1)',
//   black             : 'hsla(0, 0%, 0%, 1)',
//   neutral           : 'hsla(0, 0%, 40%, 1)',
//   neutralLight1     : 'hsla(0, 0%, 50%, 1)',
//   neutralLight2     : 'hsla(0, 0%, 60%, 1)',
//   neutralLight3     : 'hsla(0, 0%, 70%, 1)',
//   neutralDark1      : 'hsla(0, 0%, 30%, 1)',
//   neutralDark2      : 'hsla(0, 0%, 20%, 1)',
//   neutralDark3      : 'hsla(0, 0%, 10%, 1)'
// }

const color: ITokenColor = {
  global            : EColor.global,
  globalLight1      : EColor.globalLight1,
  globalDark1       : EColor.globalDark1,
  globalContrast    : EColor.globalContrast,
  primary           : EColor.primary,
  primaryLight1     : EColor.primaryLight1,
  primaryDark1      : EColor.primaryDark1,
  primaryContrast   : EColor.primaryContrast,
  secondary         : EColor.secondary,
  secondaryLight1   : EColor.secondaryLight1,
  secondaryDark1    : EColor.secondaryDark1,
  secondaryContrast : EColor.secondaryContrast,
  tertiary          : EColor.tertiary,
  tertiaryLight1    : EColor.tertiaryLight1,
  tertiaryDark1     : EColor.tertiaryDark1,
  tertiaryContrast  : EColor.tertiaryContrast,
  success           : EColor.success,
  successLight1     : EColor.successLight1,
  successDark1      : EColor.successDark1,
  successContrast   : EColor.successContrast,
  disabled          : EColor.disabled,
  disabledLight1    : EColor.disabledLight1,
  disabledDark1     : EColor.disabledDark1,
  disabledContrast  : EColor.disabledContrast,
  warning           : EColor.warning,
  warningLight1     : EColor.warningLight1,
  warningDark1      : EColor.warningDark1,
  warningContrast   : EColor.warningContrast,
  failure           : EColor.failure,
  failureLight1     : EColor.failureLight1,
  failureDark1      : EColor.failureDark1,
  failureContrast   : EColor.failureContrast,
  loading           : EColor.loading,
  loadingLight1     : EColor.loadingLight1,
  loadingDark1      : EColor.loadingDark1,
  loadingContrast   : EColor.loadingContrast,
  info              : EColor.info,
  infoLight1        : EColor.infoLight1,
  infoDark1         : EColor.infoDark1,
  infoContrast      : EColor.infoContrast,
  white             : EColor.white,
  black             : EColor.black,
  neutral           : EColor.neutral,
  neutralLight1     : EColor.neutralLight1,
  neutralLight2     : EColor.neutralLight2,
  neutralLight3     : EColor.neutralLight3,
  neutralDark1      : EColor.neutralDark1,
  neutralDark2      : EColor.neutralDark2,
  neutralDark3      : EColor.neutralDark3
}


const sizeGeneral: ITokenSize = {
  unit: "em",
  size1: 0.25,
  size2: 0.48,
  size3: 0.71,
  size4: 0.94,
  size5: 1.17,
  size6: 1.4,
  size7: 1.63,
  size8: 1.86,
  size9: 2.09,
  size10: 2.32,
  size11: 2.55,
  size12: 2.78
}

const sizePosition: ITokenSize = {
  unit: "em",
  size1: 0.5,
  size2: 0.96,
  size3: 1.42,
  size4: 1.88,
  size5: 2.34,
  size6: 2.8,
  size7: 3.26,
  size8: 3.72,
  size9: 4.18,
  size10: 4.64,
  size11: 5.1,
  size12: 5.56
}

const sizeSpacing: ITokenSize = {
  unit: "em",
  size1: "0.2em",
  size2: "0.43em",
  size3: "0.66em",
  size4: "0.89em",
  size5: "1.12em",
  size6: "1.35em",
  size7: "1.58em",
  size8: "1.81em",
  size9: "2.04em",
  size10: "2.27em",
  size11: "2.5em",
  size12: "2.73em"
}

const sizeBorder: ITokenSize = {
  unit: "px",
  size1: 1,
  size2: 2,
  size3: 3,
  size4: 4,
  size5: 5,
  size6: 6,
  size7: 7,
  size8: 8,
  size9: 9,
  size10: 10,
  size11: 11,
  size12: 12
}

const sizeButton: ITokenSize = {
  unit: "em",
  size1: 2.5,
  size2: 4.79,
  size3: 7.08,
  size4: 9.37,
  size5: 11.66,
  size6: 13.95,
  size7: 16.24,
  size8: 18.53,
  size9: 20.82,
  size10: 23.11,
  size11: 25.4,
  size12: 27.69
}

const sizeFont: ITokenSize = {
  unit: "em",
  size1: 0.6,
  size2: 0.8,
  size3: 1,
  size4: 1.2,
  size5: 1.4,
  size6: 1.6,
  size7: 1.8,
  size8: 2,
  size9: 2.2,
  size10: 2.4,
  size11: 2.6,
  size12: 2.8
}

const sizeShadow: ITokenSize = {
  unit: "em",
  size1: 0.08,
  size2: 0.15,
  size3: 0.22,
  size4: 0.29,
  size5: 0.36,
  size6: 0.43,
  size7: 0.5,
  size8: 0.57,
  size9: 0.64,
  size10: 0.71,
  size11: 0.78,
  size12: 0.85
}

const sizeIcon: ITokenSize = {
  unit: "em",
  size1: 0.25,
  size2: 0.48,
  size3: 0.71,
  size4: 0.94,
  size5: 1.17,
  size6: 1.4,
  size7: 1.63,
  size8: 1.86,
  size9: 2.09,
  size10: 2.32,
  size11: 2.55,
  size12: 2.78
}

const sizeLogo: ITokenSize = {
  unit: "em",
  size1: 0.19,
  size2: 0.36,
  size3: 0.53,
  size4: 0.7,
  size5: 0.87,
  size6: 1.04,
  size7: 1.21,
  size8: 1.38,
  size9: 1.55,
  size10: 1.72,
  size11: 1.89,
  size12: 2.06
}

const sizeDrawer: ITokenSize = {
  unit: "em",
  size1: 1.75,
  size2: 3.35,
  size3: 4.95,
  size4: 6.55,
  size5: 8.15,
  size6: 9.75,
  size7: 11.35,
  size8: 12.95,
  size9: 14.55,
  size10: 16.15,
  size11: 17.75,
  size12: 19.35
}

const sizeModal: ITokenSize = {
  unit: "em",
  size1: 10,
  size2: 15.42,
  size3: 20.84,
  size4: 26.26,
  size5: 31.68,
  size6: 37.1,
  size7: 42.52,
  size8: 47.94,
  size9: 53.36,
  size10: 58.78,
  size11: 64.2,
  size12: 69.62
}

const sizeGutter: ITokenSize = {
  unit: "em",
  size1: 0.25,
  size2: 0.48,
  size3: 0.71,
  size4: 0.94,
  size5: 1.17,
  size6: 1.4,
  size7: 1.63,
  size8: 1.86,
  size9: 2.09,
  size10: 2.32,
  size11: 2.55,
  size12: 2.78
}

const sizeField: ITokenSize = {
  unit: "em",
  size1: 3,
  size2: 5.75,
  size3: 8.5,
  size4: 11.25,
  size5: 14,
  size6: 16.75,
  size7: 19.5,
  size8: 22.25,
  size9: 25,
  size10: 27.75,
  size11: 30.5,
  size12: 33.25
}

const sizeContainer: ITokenSize = {
  unit: "em",
  size1: 10,
  size2: 17.5,
  size3: 25,
  size4: 32.5,
  size5: 40,
  size6: 47.5,
  size7: 55,
  size8: 62.5,
  size9: 70,
  size10: 77.5,
  size11: 85,
  size12: 92.5
}

const sizeColumnWidth: ITokenSize = {
  unit: "em",
  size1: 7.5,
  size2: 14.38,
  size3: 21.26,
  size4: 28.14,
  size5: 35.02,
  size6: 41.9,
  size7: 48.78,
  size8: 55.66,
  size9: 62.54,
  size10: 69.41,
  size11: 76.29,
  size12: 83.17
}

const sizeColumnAuto: ITokenSize = {
  unit: "none",
  size1: 1,
  size2: 2,
  size3: 3,
  size4: 4,
  size5: 5,
  size6: 6,
  size7: 7,
  size8: 8,
  size9: 9,
  size10: 10,
  size11: 11,
  size12: 12
}

const breakpoint: ITokenBreakpoint = {
  breakpoint1  : '350px',
  breakpoint2  : '560px',
  breakpoint3  : '850px',
  breakpoint4  : '1000px',
  breakpoint5  : '1100px',
  breakpoint6  : '1250px',
  breakpoint7  : '1400px',
  breakpoint8  : '1750px',
  breakpoint9  : '2000px',
  breakpoint10 : '2200px',
  main         : '1000px'
}

const typographyFont: ITokenTypographyFonts = {
  heading: 'Apercu',
  title: 'Proxima Nova',
  text: 'Ogg'
}

const typographyLevel: ITokenTypography = {
  level1: {
    size: 'size11',
    font: 'heading',
    letterSpacing: 0.2,
    lineHeight: 1.4
  },
  level2: {
    size: 'size10',
    font: 'heading',
    letterSpacing: 0.1,
    lineHeight: 1.3
  },
  level3: {
    size: 'size9',
    font: 'heading',
    letterSpacing: 0.1,
    lineHeight: 1.2
  },
  level4: {
    size: 'size8',
    font: 'title',
    letterSpacing: 0.1,
    lineHeight: 1.2
  },
  level5: {
    size: 'size7',
    font: 'title',
    letterSpacing: 0.1,
    lineHeight: 1.2
  },
  level6: {
    size: 'size5',
    font: 'text',
    letterSpacing: 0.3,
    lineHeight: 1.1
  },
  level7: {
    size: 'size5',
    font: 'text',
    letterSpacing: 0.1,
    lineHeight: 1.2
  },
  level8: {
    size: 'size4',
    font: 'text',
    letterSpacing: 0.1,
    lineHeight: 1.1
  }
}

const shadow: ITokenShadow = {
  small: {
    blur: '0rem',
    spread: '0.14rem',
    x: '0.14rem',
    y: '0.14rem'
  },
  medium: {
    blur: '0rem',
    spread: '0.23rem',
    x: '0.25rem',
    y: '0rem'
  },
  large: {
    blur: '0rem',
    spread: '0.98rem',
    x: '1.34rem',
    y: '0rem'
  }
}

const depth: ITokenDepth = {
  content: 100,
  navigation: 1000,
  sheet: 1100,
  overlay: 1200,
  modal: 1300,
  toast: 1400,
  dialog: 1500,
  menu: 1600,
  tooltip: 1700
}

export const theme: any = {
  color: color,
  breakpoint: breakpoint,
  depth: depth,
  shadow: shadow,
  typography: {
    font: typographyFont,
    level: typographyLevel
  },
  size: {
    general: sizeGeneral,
    position: sizePosition,
    spacing: sizeSpacing,
    border: sizeBorder,
    button: sizeButton,
    font: sizeFont,
    shadow: sizeShadow,
    icon: sizeIcon,
    logo: sizeLogo,
    drawer: sizeDrawer,
    modal: sizeModal,
    field: sizeField,
    container: sizeContainer,
    column: {
      width: sizeColumnWidth,
      auto: sizeColumnAuto
    }
  }
}

