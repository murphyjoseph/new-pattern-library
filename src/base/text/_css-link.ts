import { StyleSheet, css } from 'aphrodite';
import { getColor, getSizeButton, getSizeSpacing } from '../../shared/styles/getters';
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
    color: theme.color.global,
    ':hover': {
      color: theme.color.globalLight1
    }
  },
  primary: {
    color: theme.color.primary,
    ':hover': {
      color: theme.color.primaryLight1
    }
  },
  secondary: {
    color: theme.color.secondary,
    ':hover': {
      color: theme.color.secondaryLight1
    }
  },
  neutral: {
    color: theme.color.neutral,
    ':hover': {
      color: theme.color.neutralLight1
    }
  },
  warning: {
    color: theme.color.warning,
    ':hover': {
      color: theme.color.warningLight1
    }
  },
  info: {
    color: theme.color.info,
    ':hover': {
      color: theme.color.infoLight1
    }
  },
  disabled: {
    color: theme.color.disabled,
    ':hover': {
      color: theme.color.disabledLight1
    }
  },
  inactive: {
    color: theme.color.inactive,
    ':hover': {
      color: theme.color.inactiveLight1
    }
  }
})
