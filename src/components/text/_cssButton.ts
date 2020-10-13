import { theme } from '../../theme';
import { TBrand } from '../../types/util-types';
import { mixinBorder } from '../../styles/mixinBorder';

export const mixinButtonSolid: any = (brand: TBrand) => {

  const brandBase = theme.brand[`${brand}Color`];
  const brandContrast = theme.brand[`${brand}Contrast`];
  const brandHover = theme.color[`${brand}Light1`];

  return {
    ...mixinBorder(theme.size.border.size1, brandBase),
    minWidth: theme.size.button.size2,
    padding: theme.size.spacing.size2,
    cursor: "pointer",
    background: brandBase,
    // outline is important for accessibility
    outlineWidth: theme.size.border.size1,
    outlineColor: theme.color.transparent,
    '&:hover': {
      ...mixinBorder(theme.size.border.size1, brandHover),
      background: brandHover,
      transition: "200ms",
    },
    $nest: {
      '.kitter_text': {
        color: brandContrast,
      }
    },
    '&.kitter_disabled': {
      cursor: "not-allowed",
      background: theme.color.disabled
    },
    '&.kitter_success': {
      cursor: "not-allowed",
      background: theme.color.success
    },
    '&.kitter_loading': {
      cursor: "progress",
      background: theme.color.loading
    }
  }
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
