import { themeCss } from '../../themeCss';
import { styleDisplay } from '../../styles-typestyle/display';
import { TBranding } from '../../types/util-types';
import { mixinBorder } from '../../styles-typestyle/mixin-border';

export const mixinButtonSolid: any = (brand: TBranding) => (
  {
    ...styleDisplay('block'),
    ...mixinBorder(themeCss.size.border.size1, themeCss.color[brand]),
    minWidth: themeCss.size.button.size2,
    padding: themeCss.size.spacing.size2,
    cursor: "pointer",
    background: themeCss.color[brand],
    color: themeCss.color[`${brand}Contrast`],
    // outline is important for accessibility
    outlineWidth: themeCss.size.border.size1,
    outlineColor: themeCss.color.transparent,
    '&:hover': {
      ...mixinBorder(themeCss.size.border.size1, themeCss.color[`${brand}Light1`]),
      background: themeCss.color[`${brand}Light1`],
      transition: "200ms",
    }
  }
)

export const cssButton: any = {
  ...styleDisplay('block'),
  minWidth: themeCss.size.button.size2,
  padding: themeCss.size.spacing.size2,
  cursor: "pointer",
  background: themeCss.color.global,
  borderWidth: themeCss.size.border.size1,
  borderStyle: 'solid',
  borderColor: themeCss.color.global,
  outlineWidth: themeCss.size.border.size1,
  outlineColor: themeCss.color.transparent,
    '&:hover': {
      background: themeCss.color.globalLight1,
      transition: "200ms",
      borderWidth: themeCss.size.border.size1,
      borderStyle: 'solid',
      borderColor: themeCss.color.globalLight1,
    }

}



export const cssButtonVariant: any = {
  global: {
    background: themeCss.color.global,
    ':hover': {
      background: themeCss.color.globalLight1
    }
  },
  primary: {
    background: themeCss.color.primary,
    color: "red !important",
    '&:hover': {
      background: themeCss.color.primaryLight1
    },
    $nest: {
      'span': {
        color: "red"
      }
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
}

export const cssButtonSize: any = {
  large: {
    minWidth: themeCss.size.button.size3
  },
  medium: {
    minWidth: themeCss.size.button.size3
  },
  small: {
    minWidth: themeCss.size.button.size3
  }
}
