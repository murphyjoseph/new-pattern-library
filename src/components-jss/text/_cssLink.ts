import { createUseStyles } from 'react-jss'
import { themeCss } from '../../themeCss';

export const cssLink: any = createUseStyles({
  base: {
    color: themeCss.color.global,
    textUnderline: "underline"
  },
  hover: {
    ':hover': {
      color: themeCss.color.globalLight1,
      transition: "200ms"
    }
  }
})

export const cssLinkVariant: any = createUseStyles({
  global: {
    color: themeCss.color.global,
    ':hover': {
      color: themeCss.color.globalLight1
    }
  },
  primary: {
    color: themeCss.color.primary,
    ':hover': {
      color: themeCss.color.primaryLight1
    }
  },
  secondary: {
    color: themeCss.color.secondary,
    ':hover': {
      color: themeCss.color.secondaryLight1
    }
  },
  neutral: {
    color: themeCss.color.neutral,
    ':hover': {
      color: themeCss.color.neutralLight1
    }
  },
  warning: {
    color: themeCss.color.warning,
    ':hover': {
      color: themeCss.color.warningLight1
    }
  },
  info: {
    color: themeCss.color.info,
    ':hover': {
      color: themeCss.color.infoLight1
    }
  },
  disabled: {
    color: themeCss.color.disabled,
    ':hover': {
      color: themeCss.color.disabledLight1
    }
  },
  inactive: {
    color: themeCss.color.inactive,
    ':hover': {
      color: themeCss.color.inactiveLight1
    }
  }
})
