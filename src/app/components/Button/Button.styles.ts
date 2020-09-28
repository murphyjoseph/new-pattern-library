import { css } from '@emotion/core';
import { StyleSheet } from 'aphrodite';
import { mapSizes } from '../../../shared/styles-js/config/map-sizes';
import { mapColors } from '../../../shared/styles-js/config/map-colors';
import { theme } from '../../../shared/styles-js/theming';

const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const BUTTON_THEMES = {
  GLOBAL: 'global',
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
};

export const buttonBase = css`
  label: button-base;
  border-style: solid;
  border-width: 1px;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .2s ease-in-out;
  &:hover {
    .ns-tabs & {
      border: none;
    }
  }
`;

export const getButtonSize = (size: any) => {
  let buttonSize = '';
  const unit = mapSizes.spacing.unitOfMeasurement;
  console.log('getting button sizes');
  switch (size) {
    case BUTTON_SIZES.SMALL:
      buttonSize = `padding: ${mapSizes.spacing['size1']}${unit} ${mapSizes.spacing['size3']}${unit}`;
      break;
    default:
      buttonSize = `padding: ${mapSizes.spacing['size2']}${unit} ${mapSizes.spacing['size5']}${unit}`
  }
  return css`
  label: size;
  ${buttonSize}`
}


export const setButtonTheme = (
  bgColor: string,
  borderColor: string,
  text: string,
) => css`
    background: ${bgColor};
    border-color: ${borderColor};
    color: ${text};
  `;


export const getButtonTheme = (variant: any) => {
  console.log(theme)
  const { btns: { skins } } = theme;
  const { main, hover } = skins[variant];
  console.log(skins[variant])
  return css`
    label: theme-${variant};
    ${setButtonTheme(main.bg, main.border, main.text)}
    &:hover {
      ${setButtonTheme(hover.bg, hover.border, hover.text)}
    }
  `
}

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

