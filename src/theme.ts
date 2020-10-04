export interface ITheme {
  color: any,
  sizes: any,
  branding: any,
  breakpoint: any
}

export let theme: any = {};
theme.color = {
  global          : "hsla(0, 0%, 15%, 1)",
  globalLight1    : "hsla(0, 0%, 25%, 1)",
  globalDark1     : "hsla(0, 0%, 5%, 1)",
  primary         : "hsla(200, 37%, 52%, 1)",
  primaryLight1   : "hsla(200, 37%, 60%, 1)",
  primaryDark1    : "hsla(200, 37%, 44%, 1)",
  secondary       : "hsla(200, 37%, 52%, 1)",
  secondaryLight1 : "hsla(200, 37%, 60%, 1)",
  secondaryDark1  : "hsla(200, 37%, 44%, 1)",
  success         : "hsla(83, 46%, 47%, 1)",
  successLight1   : "hsla(83, 46%, 58%, 1)",
  successDark1    : "hsla(83, 46%, 36%, 1)",
  disabled        : "hsla(0, 0%, 87%, 1)",
  disabledLight1  : "hsla(0, 0%, 95%, 1)",
  disabledDark1   : "hsla(0, 0%, 76%, 1)",
  warning         : "hsla(7, 66%, 57%, 1)",
  warningLight1   : "hsla(7, 66%, 72%, 1)",
  warningDark1    : "hsla(7, 66%, 46%, 1)",
  info            : "hsla(39, 100%, 71%, 1)",
  infoLight1      : "hsla(39, 100%, 80%, 1)",
  infoDark1       : "hsla(39, 100%, 62%, 1)",
  white           : "hsla(0, 100%, 100%, 1)",
  black           : "hsla(0, 0%, 0%, 1)",
  neutral         : "hsla(0, 0%, 60%, 1)",
  neutralLight1   : "hsla(0, 0%, 90%, 1)",
  neutralLight2   : "hsla(0, 0%, 93%, 1)",
  neutralLight3   : "hsla(0, 0%, 95%, 1)",
  neutralDark1    : "hsla(0, 0%, 33%, 1)",
  neutralDark2    : "hsla(0, 0%, 25%, 1)",
  neutralDark3    : "hsla(0, 0%, 22%, 1)"
}

theme.size = {
  general: {
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
  },
  position: {
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
  },
  spacing: {
    unit: "em",
    size1: 0.2,
    size2: 0.43,
    size3: 0.66,
    size4: 0.89,
    size5: 1.12,
    size6: 1.35,
    size7: 1.58,
    size8: 1.81,
    size9: 2.04,
    size10: 2.27,
    size11: 2.5,
    size12: 2.73
  },
  border: {
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
  },
  button: {
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
  },
  font: {
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
  },
  shadow: {
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
  },
  icon: {
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
  },
  logo: {
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
  },
  drawer: {
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
  },
  tracking: {
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
  },
  counter: {
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
  },
  modal: {
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
  },
  gutter: {
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
  },
  field: {
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
  },
  container: {
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
  },
  column: {
    width: {
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
    },
    auto: {
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
  }
}

theme.branding = {
  global    : 'global',
  primary   : 'primary',
  secondary : 'secondary',
  neutral   : 'neutral',
  warning   : 'warning',
  info      : 'info',
  disabled  : 'disabled',
  inactive  : 'inactive'
}

theme.breakpoint = {
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

theme.typography = {}
theme.typography.headingOne = {
  fontFamily: "Apercu",
  fontWeight: "normal",
  fontSize: `${theme.size.font.size11}${theme.size.font.unit}`
}

theme.typography.headingTwo = {
  fontFamily: "Apercu",
  fontWeight: "thinner",
  fontSize: `${theme.size.font.size10}${theme.size.font.unit}`
}

theme.typography.headingThree = {
  fontFamily: "Apercu",
  fontWeight: "bold",
  fontSize: `${theme.size.font.size9}${theme.size.font.unit}`,
  textTransform: "uppercase"
}

theme.typography.titleOne = {
  fontFamily: "Proxima Nova",
  fontWeight: "bold",
  fontSize: `${theme.size.font.size7}${theme.size.font.unit}`
}

theme.typography.titleTwo = {
  fontFamily: "Proxima Nova",
  fontWeight: "normal",
  fontSize: `${theme.size.font.size7}${theme.size.font.unit}`,
  textTransform: "uppercase"
}

theme.typography.bodyOne = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`
}

theme.typography.bodyTwo = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size4}${theme.size.font.unit}`
}

theme.typography.description = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size3}${theme.size.font.unit}`
}

theme.typography.list = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`
}

theme.typography.button = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`,
  textTransform: "uppercase"
}

theme.typography.link = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`,
  textDecoration: "underline"
}

theme.typography.labelOne = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`,
  fontWeight: "bold"
}

theme.typography.labelTwo = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`
}

theme.typography.input = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`
}

theme.typography.placeholder = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`
}

theme.typography.icon = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`
}

theme.typography.option = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`
}

theme.typography.invalid = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`
}

theme.typography.counter = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`
}

theme.typography.figcaption = {
  fontFamily: "Ogg",
  fontSize: `${theme.size.font.size5}${theme.size.font.unit}`
}



// export const stylesConfig = {
//   labels: {
//     sizes: {
//       size1  : 'size1',
//       size2  : 'size2',
//       size3  : 'size3',
//       size4  : 'size4',
//       size5  : 'size5',
//       size6  : 'size6',
//       size7  : 'size7',
//       size8  : 'size8',
//       size9  : 'size9',
//       size10 : 'size10',
//       size11 : 'size11',
//       size12 : 'size12'
//     },
//     branding: {
//       global    : 'global',
//       primary   : 'primary',
//       secondary : 'secondary',
//       neutral   : 'neutral',
//       warning   : 'warning',
//       info      : 'info',
//       disabled  : 'disabled',
//       inactive  : 'inactive',
//     },
//     directions: {
//       positions: {
//         center              : 'center',
//         centerVertical      : 'center-vertical',
//         centerVerticalLeft  : 'center-vertical-left',
//         centerVerticalRight : 'center-vertical-right',
//         centerHorizontal    : 'center-horizontal',
//         centerBlock         : 'center-block',
//         top                 : 'top',
//         topRight            : 'top-right',
//         topLeft             : 'top-left',
//         left                : 'left',
//         right               : 'right',
//         bottom              : 'bottom',
//         bottomRight         : 'bottom-right',
//         bottomLeft          : 'bottom-left'
//       },
//       general: {
//         all         : 'all',
//         bottom      : 'bottom',
//         bottomLeft  : 'bottom-left',
//         bottomRight : 'bottom-right',
//         horizontal  : 'horizontal',
//         left        : 'left',
//         right       : 'right',
//         top         : 'top',
//         topLeft     : 'top-left',
//         topRight    : 'top-right',
//         vertical    : 'vertical',
//         center      : 'center',
//         middle      : 'middle'
//       }
//     },
//   },
//   colors: {
//     global          : "hsla(0, 0%, 15%, 1)",
//     globalLight1    : "hsla(0, 0%, 25%, 1)",
//     globalDark1     : "hsla(0, 0%, 5%, 1)",
//     primary         : "hsla(200, 37%, 52%, 1)",
//     primaryLight1   : "hsla(200, 37%, 60%, 1)",
//     primaryDark1    : "hsla(200, 37%, 44%, 1)",
//     secondary       : "hsla(200, 37%, 52%, 1)",
//     secondaryLight1 : "hsla(200, 37%, 60%, 1)",
//     secondaryDark1  : "hsla(200, 37%, 44%, 1)",
//     success         : "hsla(83, 46%, 47%, 1)",
//     successLight1   : "hsla(83, 46%, 58%, 1)",
//     successDark1    : "hsla(83, 46%, 36%, 1)",
//     disabled        : "hsla(0, 0%, 87%, 1)",
//     disabledLight1  : "hsla(0, 0%, 95%, 1)",
//     disabledDark1   : "hsla(0, 0%, 76%, 1)",
//     warning         : "hsla(7, 66%, 57%, 1)",
//     warningLight1   : "hsla(7, 66%, 72%, 1)",
//     warningDark1    : "hsla(7, 66%, 46%, 1)",
//     info            : "hsla(39, 100%, 71%, 1)",
//     infoLight1      : "hsla(39, 100%, 80%, 1)",
//     infoDark1       : "hsla(39, 100%, 62%, 1)",
//     white           : "hsla(0, 100%, 100%, 1)",
//     black           : "hsla(0, 0%, 0%, 1)",
//     neutral         : "hsla(0, 0%, 60%, 1)",
//     neutralLight1   : "hsla(0, 0%, 90%, 1)",
//     neutralLight2   : "hsla(0, 0%, 93%, 1)",
//     neutralLight3   : "hsla(0, 0%, 95%, 1)",
//     neutralDark1    : "hsla(0, 0%, 33%, 1)",
//     neutralDark2    : "hsla(0, 0%, 25%, 1)",
//     neutralDark3    : "hsla(0, 0%, 22%, 1)",
//   },
//   size: {
//     floor   : .25,
//     ceiling : 3
//   },
//   fontTypes: {
//     level1: [{fontFamily: 'sans-serif'}, {fontSize: 'size10'}],
//     level2: [{fontFamily: 'sans-serif'}, {fontSize: 'size8'}],
//     level3: [{fontFamily: 'sans-serif'}, {fontSize: 'size6'}],
//     level4: [{fontFamily: 'sans-serif'}, {fontSize: 'size3'}],
//     level5: [{fontFamily: 'sans-serif'}, {fontSize: 'size2'}]
//   },
//   breakpoints: {
//     ems    : {breakpoint3: '13px', breakpoint4: '13px', breakpoint6: "13px"},
//     mobile : "breakpoint6"
//   }
// }

// export const stylesText = {
//   headingOne   : stylesConfig.fontTypes.level1,
//   headingTwo   : stylesConfig.fontTypes.level1,
//   headingThree : stylesConfig.fontTypes.level1,
//   titleOne     : stylesConfig.fontTypes.level4,
//   titleTwo     : stylesConfig.fontTypes.level4,
//   bodyOne      : stylesConfig.fontTypes.level5,
//   bodyTwo      : stylesConfig.fontTypes.level5,
//   description  : stylesConfig.fontTypes.level5,
//   list         : stylesConfig.fontTypes.level4,
//   btn          : stylesConfig.fontTypes.level4,
//   link         : stylesConfig.fontTypes.level4,
//   labelOne     : stylesConfig.fontTypes.level4,
//   labelTwo     : stylesConfig.fontTypes.level5,
//   input        : stylesConfig.fontTypes.level4,
//   placeholder  : stylesConfig.fontTypes.level4,
//   icon         : stylesConfig.fontTypes.level1,
//   option       : stylesConfig.fontTypes.level4,
//   invalid      : stylesConfig.fontTypes.level4,
//   counter      : stylesConfig.fontTypes.level5,
//   figcaption   : stylesConfig.fontTypes.level4
// }
