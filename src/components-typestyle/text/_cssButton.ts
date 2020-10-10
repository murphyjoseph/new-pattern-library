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
    // outline is important for accessibility
    outlineWidth: themeCss.size.border.size1,
    outlineColor: themeCss.color.transparent,
    '&:hover': {
      ...mixinBorder(themeCss.size.border.size1, themeCss.color[`${brand}Light1`]),
      background: themeCss.color[`${brand}Light1`],
      transition: "200ms",
    },
    $nest: {
      '.kitter_text': {
        color: themeCss.branding[`${brand}Contrast`],
      }
    }
  }
)

export const cssButton: any = {
  ...mixinButtonSolid(themeCss.branding.global)
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
    minWidth: themeCss.size.button.size3
  },
  medium: {
    minWidth: themeCss.size.button.size3
  },
  small: {
    minWidth: themeCss.size.button.size3
  }
}
