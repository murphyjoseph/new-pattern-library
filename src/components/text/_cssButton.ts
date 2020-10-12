import { theme } from '../../theme';
import { TBranding } from '../../types/util-types';
import { mixinBorder } from '../../styles/mixinBorder';

export const mixinButtonSolid: any = (brand: TBranding) => (
  {
    ...mixinBorder(theme.size.border.size1, theme.color[brand]),
    minWidth: theme.size.button.size2,
    padding: theme.size.spacing.size2,
    cursor: "pointer",
    background: theme.color[brand],
    // outline is important for accessibility
    outlineWidth: theme.size.border.size1,
    outlineColor: theme.color.transparent,
    '&:hover': {
      ...mixinBorder(theme.size.border.size1, theme.color[`${brand}Light1`]),
      background: theme.color[`${brand}Light1`],
      transition: "200ms",
    },
    $nest: {
      '.kitter_text': {
        color: theme.branding[`${brand}Contrast`],
      }
    }
  }
)

export const cssButton: any = {
  ...mixinButtonSolid(theme.branding.global)
}

export const cssButtonVariant: any = {
  global:    { ...mixinButtonSolid('global') },
  primary:   { ...mixinButtonSolid('primary') },
  secondary: { ...mixinButtonSolid('secondary') },
  tertiary:  { ...mixinButtonSolid('tertiary') },
  neutral:   { ...mixinButtonSolid('neutral') },
  warning:   { ...mixinButtonSolid('warning') },
  info:      { ...mixinButtonSolid('info') },
  disabled:  { ...mixinButtonSolid('disabled') },
  inactive:  { ...mixinButtonSolid('inactive') }
}

export const cssButtonSize: any = {
  large: {
    minWidth: theme.size.button.size3
  },
  medium: {
    minWidth: theme.size.button.size3
  },
  small: {
    minWidth: theme.size.button.size3
  }
}
