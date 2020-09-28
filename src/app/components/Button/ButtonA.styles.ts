import { StyleSheet } from 'aphrodite';
import { theme } from '../../../shared/styles-js/theming';
import { mapSizes } from '../../../shared/styles-js/config/map-sizes';

const BUTTON_THEMES = {
  GLOBAL: 'global',
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
};

const setTheme = (variant: string) => {
  const { btns: { skins } } = theme;
  const { main, hover } = skins[variant];
  return {
    background: main.bg,
    borderColor: main.border,
    color: main.text,
    '&:hover': {
      background: hover.bg,
      borderColor: hover.border,
      color: hover.text,
    }
  }
}
export const buttonThemeAphrodite = StyleSheet.create({
  buttonBase: {
    borderStyle: 'solid',
    borderWidth: '1px',
    position: 'relative',
    cursor: 'pointer',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      border: 'none',
    }
  },
  small: {
    padding: `${mapSizes.spacing['size1']}${mapSizes.spacing.unitOfMeasurement} ${mapSizes.spacing['size3']}${mapSizes.spacing.unitOfMeasurement}`,
  },
  medium: {
    padding: `${mapSizes.spacing['size2']}${mapSizes.spacing.unitOfMeasurement} ${mapSizes.spacing['size4']}${mapSizes.spacing.unitOfMeasurement}`,
  },
  global: setTheme(BUTTON_THEMES.GLOBAL),
  primary: setTheme(BUTTON_THEMES.PRIMARY),
  primaryOutline: setTheme(BUTTON_THEMES.PRIMARY_OUTLINE),
});