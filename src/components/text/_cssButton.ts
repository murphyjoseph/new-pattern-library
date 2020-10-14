import { theme } from '../../theme';
import { TBrand, TColorCore, TColor } from '../../types/util-types';
import { mixinBorder } from '../../styles/mixinBorder';
import { EColor } from '../../theme.enum';

const mixinButtonFill: any = (colorCore: TColorCore) => {

  const brandBase = theme.color[`${colorCore}`];
  const brandContrast = theme.color[`${colorCore}Contrast`];
  const brandHover = theme.color[`${colorCore}Light1`];

  return {
    ...mixinBorder(theme.size.border.size2, brandBase),
    background: brandBase,
    $nest: {
      '&:hover': {
        ...mixinBorder(theme.size.border.size2, brandHover),
        background: brandBase,
      },
      '.kitter_text': {
        color: brandBase
      }
    }
  }
}

const mixinButtonText: any = (colorCore: TColorCore) => {

  const brandBase = theme.color[colorCore];
  const brandContrast = theme.color[`${colorCore}Contrast`];
  const brandHover = theme.color[`${colorCore}Light1`];

  return {
    '&:hover': {
      background: theme.color.neutralLight3,
      '.kitter_text': {
        color: brandHover
      }
    },
    '.kitter_text': {
      color: brandBase
    }
  }
}

const mixinButtonOutline: any = (colorCore: TColorCore) => {

  const brandBase = theme.color[colorCore];
  const brandContrast = theme.color[`${colorCore}Contrast`];
  const brandHover = theme.color[`${colorCore}Light1`];

  console.log("BrandBase")
  console.log(brandBase)
  console.log(colorCore)

  return {
    ...mixinBorder(theme.size.border.size4, colorCore),
    background: 'transparent',
    '&:hover': {
      ...mixinBorder(theme.size.border.size4, brandHover),
      background: theme.color.neutral,
      '.kitter_text': {
        color: brandHover
      }
    },
    'span': {
      color: theme.color.warning,
      // boxSizing: 'inherit',
      // background: brandBase,
      '&:before': {
        content: `'${brandBase}'`
      }
    }
  }
}

export const mixinButton: any = (brand: TBrand) => {

  const brandBase = theme.brand[`${brand}Color`];
  const brandContrast = theme.brand[`${brand}Contrast`];
  const brandHover = theme.color[`${brand}Light1`];

  return {
    minWidth: theme.size.button.size2,
    padding: theme.size.spacing.size2,
    cursor: "pointer",
    // outline is important for accessibility
    outlineWidth: theme.size.border.size1,
    outlineColor: theme.color.transparent,
    // ...mixinButtonOutline(brand),
    ...mixinButtonOutline(brand),
    '&.kitter_button_outline': {
      ...mixinButtonOutline(brand)
    },
    '&:kitter_button_solid': {
      ...mixinButtonFill(brand)
    },
    '&:kitter_button_text': {
      ...mixinButtonText(brand)
    }



  }
}

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
    '&.disabled': {
      ...mixinBorder(theme.size.border.size1, theme.color.disabled),
      cursor: "not-allowed",
      background: theme.color.disabled,
      '&:hover': {
        ...mixinBorder(theme.size.border.size1, theme.color.disabledLight1),
        background: theme.color.disabledLight1,
      }
    },
    '&.kitter_success': {
      cursor: "not-allowed",
      background: theme.color.success
    },
    '&.kitter_loading': {
      ...mixinBorder(theme.size.border.size1, theme.color.loading),
      cursor: "progress",
      background: theme.color.loading,
      '&:hover': {
        ...mixinBorder(theme.size.border.size1, theme.color.loadingLight1),
        background: theme.color.loadingLight1,
      }
    }
  }
}

export const cssButtonVariant: any = {
  global:    { ...mixinButton('global') },
  primary:   { ...mixinButton('primary') },
  secondary: { ...mixinButton('secondary') },
  tertiary:  { ...mixinButton('tertiary') },
  neutral:   { ...mixinButton('neutral') },
  warning:   { ...mixinButton('warning') },
  info:      { ...mixinButton('info') },
  disabled:  { ...mixinButton('disabled') },
  inactive:  { ...mixinButton('inactive') },
  loading:   { ...mixinButton('loading') }
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
