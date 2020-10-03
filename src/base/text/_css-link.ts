import { StyleSheet, css } from 'aphrodite';
import { getColor, getSizeButton, getSizeSpacing } from '../../shared/styles-js/config/utilities/getters';
import { theme } from '../../theme';

export const cssLink: any = StyleSheet.create({
  base: {
    color: theme.color.global,
    textUnderline: "underline"
  },
  hover: {
    ':hover': {
      color: theme.color.globalLight1,
      transition: "200ms"
    }
  }
})

export const cssLinkVariant: any = StyleSheet.create({
  global: {
    background: theme.color.global,
    ':hover': {
      background: theme.color.globalLight1
    }
  },
  primary: {
    background: theme.color.primary,
    ':hover': {
      background: theme.color.primaryLight1
    }
  },
  secondary: {
    background: theme.color.secondary,
    ':hover': {
      background: theme.color.secondaryLight1
    }
  },
  neutral: {
    background: theme.color.neutral,
    ':hover': {
      background: theme.color.neutralLight1
    }
  },
  warning: {
    background: theme.color.warning,
    ':hover': {
      background: theme.color.warningLight1
    }
  },
  info: {
    background: theme.color.info,
    ':hover': {
      background: theme.color.infoLight1
    }
  },
  disabled: {
    background: theme.color.disabled,
    ':hover': {
      background: theme.color.disabledLight1
    }
  },
  inactive: {
    background: theme.color.inactive,
    ':hover': {
      background: theme.color.inactiveLight1
    }
  }
})
