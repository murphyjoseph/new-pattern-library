import { StyleSheet, css } from 'aphrodite';
import { getColor, getSizeButton, getSizeSpacing } from '../../styles-aphrodite/getters';
import { theme } from '../../../theme';

export const cssButton: any = StyleSheet.create({
  base: {
    display: "block",
    minHeight: `${theme.size.button.size2}${theme.size.button.unit}`,
    padding: `${theme.size.spacing.size2}${theme.size.spacing.unit}`,
    cursor: "pointer",
    background: theme.color.global,
  },
  hover: {
    ':hover': {
      background: theme.color.globalLight1,
      transition: "200ms"
    }
  }
})

export const cssButtonVariant: any = StyleSheet.create({
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

export const cssButtonSize: any = StyleSheet.create({
  large: {
    minHeight: getSizeButton("size4")
  },
  medium: {
    minHeight: getSizeButton("size3")
  },
  small: {
    minHeight: getSizeButton("size1")
  }
})