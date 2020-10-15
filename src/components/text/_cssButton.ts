import { theme } from '../../theme';
import { TBrand, TColorCore, TColor, TKindButton } from '../../types/util-types';
import { mixinBorder } from '../../styles/mixinBorder';
import { COLOR, EColor } from '../../theme.enum';

export const mixinButtonSolid: any = (colorCore: TColorCore) => {

  const brandBase = theme.color[`${colorCore}`];
  const brandContrast = theme.color[`${colorCore}Contrast`];
  const brandHover = theme.color[`${colorCore}Light1`];

  return {
    ...mixinBorder(theme.size.border.size2, brandBase),
    background: brandBase,
    color: brandContrast,
    '&:hover': {
      ...mixinBorder(theme.size.border.size2, brandHover),
      background: brandHover,
      // color: "red"
    },
  }
}

export const mixinButtonText: any = (colorCore: TColorCore) => {

  const brandBase = theme.color[colorCore];
  const brandHover = theme.color[`${colorCore}Light1`];

  return {
    color: brandBase,
    '&:hover': {
      background: theme.color.neutralLight3,
      color: brandHover
    }
  }
}

export const mixinButtonOutline: any = (colorCore: TColorCore) => {

  const brandBase = theme.color[colorCore];
  const brandContrast = theme.color[`${colorCore}Contrast`];
  const brandHover = theme.color[`${colorCore}Light1`];

  return {
    ...mixinBorder(theme.size.border.size4, colorCore),
    background: 'transparent',
    color: brandBase,
    '&:hover': {
      ...mixinBorder(theme.size.border.size4, COLOR[colorCore]),
      background: theme.color.neutral,
      color: brandHover
    }
  }
}

export const mixinButton: any = {

    minWidth: theme.size.button.size2,
    padding: theme.size.spacing.size2,
    cursor: "pointer",
    // outline is important for accessibility
    outlineWidth: theme.size.border.size1,
    outlineColor: theme.color.transparent,

}

export const cssButtonKind: any = (kind: TKindButton, variant: TColorCore) => {
  if (kind === 'outline') return { ...mixinButtonOutline(variant)}
  if (kind === 'solid')   return { ...mixinButtonSolid(variant)}
  if (kind === 'text')    return { ...mixinButtonText(variant)}
}

export const cssButtonVariant: any = {
  global:    { ...mixinButton },
  primary:   { ...mixinButton },
  secondary: { ...mixinButton },
  tertiary:  { ...mixinButton },
  neutral:   { ...mixinButton },
  warning:   { ...mixinButton },
  info:      { ...mixinButton },
  disabled:  { ...mixinButton },
  inactive:  { ...mixinButton },
  loading:   { ...mixinButton }
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
