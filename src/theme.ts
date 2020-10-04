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

// CSS VARIABLES

// theme.color = {
//   global          : "var(--color-global)",
//   globalLight1    : "var(--color-global-light1)",
//   globalDark1     : "var(--color-global-dark1)",
//   primary         : "var(--color-primary)",
//   primaryLight1   : "var(--color-primary-light1)",
//   primaryDark1    : "var(--color-primary-dark1)",
//   secondary       : "var(--color-secondary)",
//   secondaryLight1 : "var(--color-secondary-light1)",
//   secondaryDark1  : "var(--color-secondary-dark1)",
//   success         : "var(--color-success)",
//   successLight1   : "var(--color-success-light1)",
//   successDark1    : "var(--color-success-dark1)",
//   disabled        : "var(--color-disabled)",
//   disabledLight1  : "var(--color-disabled-light1)",
//   disabledDark1   : "var(--color-disabled-dark1)",
//   warning         : "var(--color-warning)",
//   warningLight1   : "var(--color-warning-light1)",
//   warningDark1    : "var(--color-warning-dark1)",
//   info            : "var(--color-info)",
//   infoLight1      : "var(--color-info-light1)",
//   infoDark1       : "var(--color-info-dark1)",
//   white           : "var(--color-white)",
//   black           : "var(--color-black)",
//   neutral         : "var(--color-neutral)",
//   neutralLight1   : "var(--color-neutral-light1)",
//   neutralLight2   : "var(--color-neutral-light2)",
//   neutralLight3   : "var(--color-neutral-light3)",
//   neutralDark1    : "var(--color-neutral-dark1)",
//   neutralDark2    : "var(--color-neutral-dark2)",
//   neutralDark3    : "var(--color-neutral-dark3)"
// }

// theme.size = {
//   general: {
//     unit: "var(--size-general-unit)",
//     size1: "var(--size-general-size1)",
//     size2: "var(--size-general-size2)",
//     size3: "var(--size-general-size3)",
//     size4: "var(--size-general-size4)",
//     size5: "var(--size-general-size5)",
//     size6: "var(--size-general-size6)",
//     size7: "var(--size-general-size7)",
//     size8: "var(--size-general-size8)",
//     size9: "var(--size-general-size9)",
//     size10: "var(--size-general-size10)",
//     size11: "var(--size-general-size11)",
//     size12: "var(--size-general-size12)"
//   },
//   position: {
//     unit: "var(--size-position-unit)",
//     size1: "var(--size-position-size1)",
//     size2: "var(--size-position-size2)",
//     size3: "var(--size-position-size3)",
//     size4: "var(--size-position-size4)",
//     size5: "var(--size-position-size5)",
//     size6: "var(--size-position-size6)",
//     size7: "var(--size-position-size7)",
//     size8: "var(--size-position-size8)",
//     size9: "var(--size-position-size9)",
//     size10: "var(--size-position-size10)",
//     size11: "var(--size-position-size11)",
//     size12: "var(--size-position-size12)"
//   },
//   spacing: {
//     unit: "var(--size-spacing-unit)",
//     size1: "var(--size-spacing-size1)",
//     size2: "var(--size-spacing-size2)",
//     size3: "var(--size-spacing-size3)",
//     size4: "var(--size-spacing-size4)",
//     size5: "var(--size-spacing-size5)",
//     size6: "var(--size-spacing-size6)",
//     size7: "var(--size-spacing-size7)",
//     size8: "var(--size-spacing-size8)",
//     size9: "var(--size-spacing-size9)",
//     size10: "var(--size-spacing-size10)",
//     size11: "var(--size-spacing-size11)",
//     size12: "var(--size-spacing-size12)"
//   },
//   border: {
//     unit: "var(--size-border-unit)",
//     size1: "var(--size-border-size1)",
//     size2: "var(--size-border-size2)",
//     size3: "var(--size-border-size3)",
//     size4: "var(--size-border-size4)",
//     size5: "var(--size-border-size5)",
//     size6: "var(--size-border-size6)",
//     size7: "var(--size-border-size7)",
//     size8: "var(--size-border-size8)",
//     size9: "var(--size-border-size9)",
//     size10: "var(--size-border-size10)",
//     size11: "var(--size-border-size11)",
//     size12: "var(--size-border-size12)"
//   },
//   button: {
//     unit: "var(--size-button-unit)",
//     size1: "var(--size-button-size1)",
//     size2: "var(--size-button-size2)",
//     size3: "var(--size-button-size3)",
//     size4: "var(--size-button-size4)",
//     size5: "var(--size-button-size5)",
//     size6: "var(--size-button-size6)",
//     size7: "var(--size-button-size7)",
//     size8: "var(--size-button-size8)",
//     size9: "var(--size-button-size9)",
//     size10: "var(--size-button-size10)",
//     size11: "var(--size-button-size11)",
//     size12: "var(--size-button-size12)"
//   },
//   font: {
//     unit: "var(--size-font-unit)",
//     size1: "var(--size-font-size1)",
//     size2: "var(--size-font-size2)",
//     size3: "var(--size-font-size3)",
//     size4: "var(--size-font-size4)",
//     size5: "var(--size-font-size5)",
//     size6: "var(--size-font-size6)",
//     size7: "var(--size-font-size7)",
//     size8: "var(--size-font-size8)",
//     size9: "var(--size-font-size9)",
//     size10: "var(--size-font-size10)",
//     size11: "var(--size-font-size11)",
//     size12: "var(--size-font-size12)"
//   },
//   shadow: {
//     unit: "var(--size-shadow-unit)",
//     size1: "var(--size-shadow-size1)",
//     size2: "var(--size-shadow-size2)",
//     size3: "var(--size-shadow-size3)",
//     size4: "var(--size-shadow-size4)",
//     size5: "var(--size-shadow-size5)",
//     size6: "var(--size-shadow-size6)",
//     size7: "var(--size-shadow-size7)",
//     size8: "var(--size-shadow-size8)",
//     size9: "var(--size-shadow-size9)",
//     size10: "var(--size-shadow-size10)",
//     size11: "var(--size-shadow-size11)",
//     size12: "var(--size-shadow-size12)"
//   },
//   icon: {
//     unit: "var(--size-icon-unit)",
//     size1: "var(--size-icon-size1)",
//     size2: "var(--size-icon-size2)",
//     size3: "var(--size-icon-size3)",
//     size4: "var(--size-icon-size4)",
//     size5: "var(--size-icon-size5)",
//     size6: "var(--size-icon-size6)",
//     size7: "var(--size-icon-size7)",
//     size8: "var(--size-icon-size8)",
//     size9: "var(--size-icon-size9)",
//     size10: "var(--size-icon-size10)",
//     size11: "var(--size-icon-size11)",
//     size12: "var(--size-icon-size12)"
//   },
//   logo: {
//     unit: "var(--size-logo-unit)",
//     size1: "var(--size-logo-size1)",
//     size2: "var(--size-logo-size2)",
//     size3: "var(--size-logo-size3)",
//     size4: "var(--size-logo-size4)",
//     size5: "var(--size-logo-size5)",
//     size6: "var(--size-logo-size6)",
//     size7: "var(--size-logo-size7)",
//     size8: "var(--size-logo-size8)",
//     size9: "var(--size-logo-size9)",
//     size10: "var(--size-logo-size10)",
//     size11: "var(--size-logo-size11)",
//     size12: "var(--size-logo-size12)"
//   },
//   drawer: {
//     unit: "var(--size-drawer-unit)",
//     size1: "var(--size-drawer-size1)",
//     size2: "var(--size-drawer-size2)",
//     size3: "var(--size-drawer-size3)",
//     size4: "var(--size-drawer-size4)",
//     size5: "var(--size-drawer-size5)",
//     size6: "var(--size-drawer-size6)",
//     size7: "var(--size-drawer-size7)",
//     size8: "var(--size-drawer-size8)",
//     size9: "var(--size-drawer-size9)",
//     size10: "var(--size-drawer-size10)",
//     size11: "var(--size-drawer-size11)",
//     size12: "var(--size-drawer-size12)"
//   },
//   tracking: {
//     unit: "var(--size-tracking-unit)",
//     size1: "var(--size-tracking-size1)",
//     size2: "var(--size-tracking-size2)",
//     size3: "var(--size-tracking-size3)",
//     size4: "var(--size-tracking-size4)",
//     size5: "var(--size-tracking-size5)",
//     size6: "var(--size-tracking-size6)",
//     size7: "var(--size-tracking-size7)",
//     size8: "var(--size-tracking-size8)",
//     size9: "var(--size-tracking-size9)",
//     size10: "var(--size-tracking-size10)",
//     size11: "var(--size-tracking-size11)",
//     size12: "var(--size-tracking-size12)"
//   },
//   counter: {
//     unit: "var(--size-counter-unit)",
//     size1: "var(--size-counter-size1)",
//     size2: "var(--size-counter-size2)",
//     size3: "var(--size-counter-size3)",
//     size4: "var(--size-counter-size4)",
//     size5: "var(--size-counter-size5)",
//     size6: "var(--size-counter-size6)",
//     size7: "var(--size-counter-size7)",
//     size8: "var(--size-counter-size8)",
//     size9: "var(--size-counter-size9)",
//     size10: "var(--size-counter-size10)",
//     size11: "var(--size-counter-size11)",
//     size12: "var(--size-counter-size12)"
//   },
//   modal: {
//     unit: "var(--size-modal-unit)",
//     size1: "var(--size-modal-size1)",
//     size2: "var(--size-modal-size2)",
//     size3: "var(--size-modal-size3)",
//     size4: "var(--size-modal-size4)",
//     size5: "var(--size-modal-size5)",
//     size6: "var(--size-modal-size6)",
//     size7: "var(--size-modal-size7)",
//     size8: "var(--size-modal-size8)",
//     size9: "var(--size-modal-size9)",
//     size10: "var(--size-modal-size10)",
//     size11: "var(--size-modal-size11)",
//     size12: "var(--size-modal-size12)"
//   },
//   gutter: {
//     unit: "var(--size-gutter-unit)",
//     size1: "var(--size-gutter-size1)",
//     size2: "var(--size-gutter-size2)",
//     size3: "var(--size-gutter-size3)",
//     size4: "var(--size-gutter-size4)",
//     size5: "var(--size-gutter-size5)",
//     size6: "var(--size-gutter-size6)",
//     size7: "var(--size-gutter-size7)",
//     size8: "var(--size-gutter-size8)",
//     size9: "var(--size-gutter-size9)",
//     size10: "var(--size-gutter-size10)",
//     size11: "var(--size-gutter-size11)",
//     size12: "var(--size-gutter-size12)"
//   },
//   field: {
//     unit: "var(--size-field-unit)",
//     size1: "var(--size-field-size1)",
//     size2: "var(--size-field-size2)",
//     size3: "var(--size-field-size3)",
//     size4: "var(--size-field-size4)",
//     size5: "var(--size-field-size5)",
//     size6: "var(--size-field-size6)",
//     size7: "var(--size-field-size7)",
//     size8: "var(--size-field-size8)",
//     size9: "var(--size-field-size9)",
//     size10: "var(--size-field-size10)",
//     size11: "var(--size-field-size11)",
//     size12: "var(--size-field-size12)"
//   },
//   container: {
//     unit: "var(--size-container-unit)",
//     size1: "var(--size-container-size1)",
//     size2: "var(--size-container-size2)",
//     size3: "var(--size-container-size3)",
//     size4: "var(--size-container-size4)",
//     size5: "var(--size-container-size5)",
//     size6: "var(--size-container-size6)",
//     size7: "var(--size-container-size7)",
//     size8: "var(--size-container-size8)",
//     size9: "var(--size-container-size9)",
//     size10: "var(--size-container-size10)",
//     size11: "var(--size-container-size11)",
//     size12: "var(--size-container-size12)"
//   },
//   column: {
//     width: {
//       unit: "var(--size-column-width-unit)",
//       size1: "var(--size-column-width-size1)",
//       size2: "var(--size-column-width-size2)",
//       size3: "var(--size-column-width-size3)",
//       size4: "var(--size-column-width-size4)",
//       size5: "var(--size-column-width-size5)",
//       size6: "var(--size-column-width-size6)",
//       size7: "var(--size-column-width-size7)",
//       size8: "var(--size-column-width-size8)",
//       size9: "var(--size-column-width-size9)",
//       size10: "var(--size-column-width-size10)",
//       size11: "var(--size-column-width-size11)",
//       size12: "var(--size-column-width-size12)"
//     },
//     auto: {
//       unit: "var(--size-column-auto-unit)",
//       size1: "var(--size-column-auto-size1)",
//       size2: "var(--size-column-auto-size2)",
//       size3: "var(--size-column-auto-size3)",
//       size4: "var(--size-column-auto-size4)",
//       size5: "var(--size-column-auto-size5)",
//       size6: "var(--size-column-auto-size6)",
//       size7: "var(--size-column-auto-size7)",
//       size8: "var(--size-column-auto-size8)",
//       size9: "var(--size-column-auto-size9)",
//       size10: "var(--size-column-auto-size10)",
//       size11: "var(--size-column-auto-size11)",
//       size12: "var(--size-column-auto-size12)"
//     }
//   }
// }

// theme.branding = {
//   global    : 'var(--branding-global)',
//   primary   : 'var(--branding-primary)',
//   secondary : 'var(--branding-secondary)',
//   neutral   : 'var(--branding-neutral)',
//   warning   : 'var(--branding-warning)',
//   info      : 'var(--branding-info)',
//   disabled  : 'var(--branding-disabled)',
//   inactive  : 'var(--branding-inactive)'
// }

// theme.breakpoint = {
//   breakpoint1  : 'var(--breakpoint1)',
//   breakpoint2  : 'var(--breakpoint2)',
//   breakpoint3  : 'var(--breakpoint3)',
//   breakpoint4  : 'var(--breakpoint4)',
//   breakpoint5  : 'var(--breakpoint5)',
//   breakpoint6  : 'var(--breakpoint6)',
//   breakpoint7  : 'var(--breakpoint7)',
//   breakpoint8  : 'var(--breakpoint8)',
//   breakpoint9  : 'var(--breakpoint9)',
//   breakpoint10 : 'var(--breakpoint10)',
//   main         : 'var(--breakpoint-main)'
// }