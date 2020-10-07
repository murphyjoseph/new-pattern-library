
// Theme Object Literal that references CSS Variables

export let themeCss: any = {};
themeCss.color = {
  global          : "var(--color-global)",
  globalLight1    : "var(--color-global-light1)",
  globalDark1     : "var(--color-global-dark1)",
  primary         : "var(--color-primary)",
  primaryLight1   : "var(--color-primary-light1)",
  primaryDark1    : "var(--color-primary-dark1)",
  secondary       : "var(--color-secondary)",
  secondaryLight1 : "var(--color-secondary-light1)",
  secondaryDark1  : "var(--color-secondary-dark1)",
  success         : "var(--color-success)",
  successLight1   : "var(--color-success-light1)",
  successDark1    : "var(--color-success-dark1)",
  disabled        : "var(--color-disabled)",
  disabledLight1  : "var(--color-disabled-light1)",
  disabledDark1   : "var(--color-disabled-dark1)",
  warning         : "var(--color-warning)",
  warningLight1   : "var(--color-warning-light1)",
  warningDark1    : "var(--color-warning-dark1)",
  info            : "var(--color-info)",
  infoLight1      : "var(--color-info-light1)",
  infoDark1       : "var(--color-info-dark1)",
  white           : "var(--color-white)",
  black           : "var(--color-black)",
  neutral         : "var(--color-neutral)",
  neutralLight1   : "var(--color-neutral-light1)",
  neutralLight2   : "var(--color-neutral-light2)",
  neutralLight3   : "var(--color-neutral-light3)",
  neutralDark1    : "var(--color-neutral-dark1)",
  neutralDark2    : "var(--color-neutral-dark2)",
  neutralDark3    : "var(--color-neutral-dark3)"
}

themeCss.size = {
  general: {
    unit: "var(--size-general-unit)",
    size1: "var(--size-general-size1)",
    size2: "var(--size-general-size2)",
    size3: "var(--size-general-size3)",
    size4: "var(--size-general-size4)",
    size5: "var(--size-general-size5)",
    size6: "var(--size-general-size6)",
    size7: "var(--size-general-size7)",
    size8: "var(--size-general-size8)",
    size9: "var(--size-general-size9)",
    size10: "var(--size-general-size10)",
    size11: "var(--size-general-size11)",
    size12: "var(--size-general-size12)"
  },
  position: {
    unit: "var(--size-position-unit)",
    size1: "var(--size-position-size1)",
    size2: "var(--size-position-size2)",
    size3: "var(--size-position-size3)",
    size4: "var(--size-position-size4)",
    size5: "var(--size-position-size5)",
    size6: "var(--size-position-size6)",
    size7: "var(--size-position-size7)",
    size8: "var(--size-position-size8)",
    size9: "var(--size-position-size9)",
    size10: "var(--size-position-size10)",
    size11: "var(--size-position-size11)",
    size12: "var(--size-position-size12)"
  },
  spacing: {
    unit: "var(--size-spacing-unit)",
    size1: "var(--size-spacing-size1)",
    size2: "var(--size-spacing-size2)",
    size3: "var(--size-spacing-size3)",
    size4: "var(--size-spacing-size4)",
    size5: "var(--size-spacing-size5)",
    size6: "var(--size-spacing-size6)",
    size7: "var(--size-spacing-size7)",
    size8: "var(--size-spacing-size8)",
    size9: "var(--size-spacing-size9)",
    size10: "var(--size-spacing-size10)",
    size11: "var(--size-spacing-size11)",
    size12: "var(--size-spacing-size12)"
  },
  border: {
    unit: "var(--size-border-unit)",
    size1: "var(--size-border-size1)",
    size2: "var(--size-border-size2)",
    size3: "var(--size-border-size3)",
    size4: "var(--size-border-size4)",
    size5: "var(--size-border-size5)",
    size6: "var(--size-border-size6)",
    size7: "var(--size-border-size7)",
    size8: "var(--size-border-size8)",
    size9: "var(--size-border-size9)",
    size10: "var(--size-border-size10)",
    size11: "var(--size-border-size11)",
    size12: "var(--size-border-size12)"
  },
  button: {
    unit: "var(--size-button-unit)",
    size1: "var(--size-button-size1)",
    size2: "var(--size-button-size2)",
    size3: "var(--size-button-size3)",
    size4: "var(--size-button-size4)",
    size5: "var(--size-button-size5)",
    size6: "var(--size-button-size6)",
    size7: "var(--size-button-size7)",
    size8: "var(--size-button-size8)",
    size9: "var(--size-button-size9)",
    size10: "var(--size-button-size10)",
    size11: "var(--size-button-size11)",
    size12: "var(--size-button-size12)"
  },
  font: {
    unit: "var(--size-font-unit)",
    size1: "var(--size-font-size1)",
    size2: "var(--size-font-size2)",
    size3: "var(--size-font-size3)",
    size4: "var(--size-font-size4)",
    size5: "var(--size-font-size5)",
    size6: "var(--size-font-size6)",
    size7: "var(--size-font-size7)",
    size8: "var(--size-font-size8)",
    size9: "var(--size-font-size9)",
    size10: "var(--size-font-size10)",
    size11: "var(--size-font-size11)",
    size12: "var(--size-font-size12)"
  },
  shadow: {
    unit: "var(--size-shadow-unit)",
    size1: "var(--size-shadow-size1)",
    size2: "var(--size-shadow-size2)",
    size3: "var(--size-shadow-size3)",
    size4: "var(--size-shadow-size4)",
    size5: "var(--size-shadow-size5)",
    size6: "var(--size-shadow-size6)",
    size7: "var(--size-shadow-size7)",
    size8: "var(--size-shadow-size8)",
    size9: "var(--size-shadow-size9)",
    size10: "var(--size-shadow-size10)",
    size11: "var(--size-shadow-size11)",
    size12: "var(--size-shadow-size12)"
  },
  icon: {
    unit: "var(--size-icon-unit)",
    size1: "var(--size-icon-size1)",
    size2: "var(--size-icon-size2)",
    size3: "var(--size-icon-size3)",
    size4: "var(--size-icon-size4)",
    size5: "var(--size-icon-size5)",
    size6: "var(--size-icon-size6)",
    size7: "var(--size-icon-size7)",
    size8: "var(--size-icon-size8)",
    size9: "var(--size-icon-size9)",
    size10: "var(--size-icon-size10)",
    size11: "var(--size-icon-size11)",
    size12: "var(--size-icon-size12)"
  },
  logo: {
    unit: "var(--size-logo-unit)",
    size1: "var(--size-logo-size1)",
    size2: "var(--size-logo-size2)",
    size3: "var(--size-logo-size3)",
    size4: "var(--size-logo-size4)",
    size5: "var(--size-logo-size5)",
    size6: "var(--size-logo-size6)",
    size7: "var(--size-logo-size7)",
    size8: "var(--size-logo-size8)",
    size9: "var(--size-logo-size9)",
    size10: "var(--size-logo-size10)",
    size11: "var(--size-logo-size11)",
    size12: "var(--size-logo-size12)"
  },
  drawer: {
    unit: "var(--size-drawer-unit)",
    size1: "var(--size-drawer-size1)",
    size2: "var(--size-drawer-size2)",
    size3: "var(--size-drawer-size3)",
    size4: "var(--size-drawer-size4)",
    size5: "var(--size-drawer-size5)",
    size6: "var(--size-drawer-size6)",
    size7: "var(--size-drawer-size7)",
    size8: "var(--size-drawer-size8)",
    size9: "var(--size-drawer-size9)",
    size10: "var(--size-drawer-size10)",
    size11: "var(--size-drawer-size11)",
    size12: "var(--size-drawer-size12)"
  },
  tracking: {
    unit: "var(--size-tracking-unit)",
    size1: "var(--size-tracking-size1)",
    size2: "var(--size-tracking-size2)",
    size3: "var(--size-tracking-size3)",
    size4: "var(--size-tracking-size4)",
    size5: "var(--size-tracking-size5)",
    size6: "var(--size-tracking-size6)",
    size7: "var(--size-tracking-size7)",
    size8: "var(--size-tracking-size8)",
    size9: "var(--size-tracking-size9)",
    size10: "var(--size-tracking-size10)",
    size11: "var(--size-tracking-size11)",
    size12: "var(--size-tracking-size12)"
  },
  counter: {
    unit: "var(--size-counter-unit)",
    size1: "var(--size-counter-size1)",
    size2: "var(--size-counter-size2)",
    size3: "var(--size-counter-size3)",
    size4: "var(--size-counter-size4)",
    size5: "var(--size-counter-size5)",
    size6: "var(--size-counter-size6)",
    size7: "var(--size-counter-size7)",
    size8: "var(--size-counter-size8)",
    size9: "var(--size-counter-size9)",
    size10: "var(--size-counter-size10)",
    size11: "var(--size-counter-size11)",
    size12: "var(--size-counter-size12)"
  },
  modal: {
    unit: "var(--size-modal-unit)",
    size1: "var(--size-modal-size1)",
    size2: "var(--size-modal-size2)",
    size3: "var(--size-modal-size3)",
    size4: "var(--size-modal-size4)",
    size5: "var(--size-modal-size5)",
    size6: "var(--size-modal-size6)",
    size7: "var(--size-modal-size7)",
    size8: "var(--size-modal-size8)",
    size9: "var(--size-modal-size9)",
    size10: "var(--size-modal-size10)",
    size11: "var(--size-modal-size11)",
    size12: "var(--size-modal-size12)"
  },
  gutter: {
    unit: "var(--size-gutter-unit)",
    size1: "var(--size-gutter-size1)",
    size2: "var(--size-gutter-size2)",
    size3: "var(--size-gutter-size3)",
    size4: "var(--size-gutter-size4)",
    size5: "var(--size-gutter-size5)",
    size6: "var(--size-gutter-size6)",
    size7: "var(--size-gutter-size7)",
    size8: "var(--size-gutter-size8)",
    size9: "var(--size-gutter-size9)",
    size10: "var(--size-gutter-size10)",
    size11: "var(--size-gutter-size11)",
    size12: "var(--size-gutter-size12)"
  },
  field: {
    unit: "var(--size-field-unit)",
    size1: "var(--size-field-size1)",
    size2: "var(--size-field-size2)",
    size3: "var(--size-field-size3)",
    size4: "var(--size-field-size4)",
    size5: "var(--size-field-size5)",
    size6: "var(--size-field-size6)",
    size7: "var(--size-field-size7)",
    size8: "var(--size-field-size8)",
    size9: "var(--size-field-size9)",
    size10: "var(--size-field-size10)",
    size11: "var(--size-field-size11)",
    size12: "var(--size-field-size12)"
  },
  container: {
    unit: "var(--size-container-unit)",
    size1: "var(--size-container-size1)",
    size2: "var(--size-container-size2)",
    size3: "var(--size-container-size3)",
    size4: "var(--size-container-size4)",
    size5: "var(--size-container-size5)",
    size6: "var(--size-container-size6)",
    size7: "var(--size-container-size7)",
    size8: "var(--size-container-size8)",
    size9: "var(--size-container-size9)",
    size10: "var(--size-container-size10)",
    size11: "var(--size-container-size11)",
    size12: "var(--size-container-size12)"
  },
  column: {
    width: {
      unit: "var(--size-column-width-unit)",
      size1: "var(--size-column-width-size1)",
      size2: "var(--size-column-width-size2)",
      size3: "var(--size-column-width-size3)",
      size4: "var(--size-column-width-size4)",
      size5: "var(--size-column-width-size5)",
      size6: "var(--size-column-width-size6)",
      size7: "var(--size-column-width-size7)",
      size8: "var(--size-column-width-size8)",
      size9: "var(--size-column-width-size9)",
      size10: "var(--size-column-width-size10)",
      size11: "var(--size-column-width-size11)",
      size12: "var(--size-column-width-size12)"
    },
    auto: {
      unit: "var(--size-column-auto-unit)",
      size1: "var(--size-column-auto-size1)",
      size2: "var(--size-column-auto-size2)",
      size3: "var(--size-column-auto-size3)",
      size4: "var(--size-column-auto-size4)",
      size5: "var(--size-column-auto-size5)",
      size6: "var(--size-column-auto-size6)",
      size7: "var(--size-column-auto-size7)",
      size8: "var(--size-column-auto-size8)",
      size9: "var(--size-column-auto-size9)",
      size10: "var(--size-column-auto-size10)",
      size11: "var(--size-column-auto-size11)",
      size12: "var(--size-column-auto-size12)"
    }
  }
}

themeCss.branding = {
  global    : 'var(--branding-global)',
  primary   : 'var(--branding-primary)',
  secondary : 'var(--branding-secondary)',
  neutral   : 'var(--branding-neutral)',
  warning   : 'var(--branding-warning)',
  info      : 'var(--branding-info)',
  disabled  : 'var(--branding-disabled)',
  inactive  : 'var(--branding-inactive)'
}

themeCss.breakpoint = {
  breakpoint1  : 'var(--breakpoint1)',
  breakpoint2  : 'var(--breakpoint2)',
  breakpoint3  : 'var(--breakpoint3)',
  breakpoint4  : 'var(--breakpoint4)',
  breakpoint5  : 'var(--breakpoint5)',
  breakpoint6  : 'var(--breakpoint6)',
  breakpoint7  : 'var(--breakpoint7)',
  breakpoint8  : 'var(--breakpoint8)',
  breakpoint9  : 'var(--breakpoint9)',
  breakpoint10 : 'var(--breakpoint10)',
  main         : 'var(--breakpoint-main)'
}

themeCss.typography = {}
themeCss.typography.headingOne = {
  fontFamily: "Apercu",
  fontWeight: "normal",
  fontSize: themeCss.size.font.size11
}

themeCss.typography.headingTwo = {
  fontFamily: "Apercu",
  fontWeight: "thinner",
  fontSize: themeCss.size.font.size10
}

themeCss.typography.headingThree = {
  fontFamily: "Apercu",
  fontWeight: "bold",
  fontSize: themeCss.size.font.size9,
  textTransform: "uppercase"
}

themeCss.typography.titleOne = {
  fontFamily: "Proxima Nova",
  fontWeight: "bold",
  fontSize: themeCss.size.font.size7
}

themeCss.typography.titleTwo = {
  fontFamily: "Proxima Nova",
  fontWeight: "normal",
  fontSize: themeCss.size.font.size7,
  textTransform: "uppercase"
}

themeCss.typography.bodyOne = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size4
}

themeCss.typography.bodyTwo = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size3
}

themeCss.typography.description = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size3
}

themeCss.typography.list = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5
}

themeCss.typography.button = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5,
  textTransform: "uppercase"
}

themeCss.typography.link = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5,
  textDecoration: "underline"
}

themeCss.typography.labelOne = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5,
  fontWeight: "bold"
}

themeCss.typography.labelTwo = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5
}

themeCss.typography.input = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5
}

themeCss.typography.placeholder = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5
}

themeCss.typography.icon = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5
}

themeCss.typography.option = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5
}

themeCss.typography.invalid = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5
}

themeCss.typography.counter = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5
}

themeCss.typography.figcaption = {
  fontFamily: "Ogg",
  fontSize: themeCss.size.font.size5
}
