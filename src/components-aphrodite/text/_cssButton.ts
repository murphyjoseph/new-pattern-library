import { StyleSheet } from 'aphrodite';
import { themeCss } from '../../themeCss';

export const cssButton: any = StyleSheet.create({
  base: {
    display: "block",
    minHeight: themeCss.size.button.size1,
    padding: themeCss.size.spacing.size2,
    cursor: "pointer",
    background: themeCss.color.global,
  },
  hover: {
    ':hover': {
      background: themeCss.color.globalLight1,
      transition: "200ms"
    }
  }
})

export const cssButtonVariant: any = StyleSheet.create({
  global: {
    background: themeCss.color.global,
    ':hover': {
      background: themeCss.color.globalLight1
    }
  },
  primary: {
    background: themeCss.color.primary,
    ':hover': {
      background: themeCss.color.primaryLight1
    }
  },
  secondary: {
    background: themeCss.color.secondary,
    ':hover': {
      background: themeCss.color.secondaryLight1
    }
  },
  neutral: {
    background: themeCss.color.neutral,
    ':hover': {
      background: themeCss.color.neutralLight1
    }
  },
  warning: {
    background: themeCss.color.warning,
    ':hover': {
      background: themeCss.color.warningLight1
    }
  },
  info: {
    background: themeCss.color.info,
    ':hover': {
      background: themeCss.color.infoLight1
    }
  },
  disabled: {
    background: themeCss.color.disabled,
    ':hover': {
      background: themeCss.color.disabledLight1
    }
  },
  inactive: {
    background: themeCss.color.inactive,
    ':hover': {
      background: themeCss.color.inactiveLight1
    }
  }
})

export const cssButtonSize: any = StyleSheet.create({
  large: {
    minHeight: themeCss.size.button.size3
  },
  medium: {
    minHeight: themeCss.size.button.size2
  },
  small: {
    minHeight: themeCss.size.button.size1
  }
})
