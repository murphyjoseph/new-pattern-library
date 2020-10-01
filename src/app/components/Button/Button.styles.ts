import { css } from '@emotion/core';
import { mapSizes } from '../../../shared/styles-js/config/map-sizes';
import { theme } from '../../../shared/styles-js/theming';

const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
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
  switch (size) {
    case BUTTON_SIZES.SMALL:
      buttonSize = `padding: ${mapSizes.spacing['size1']}${unit} ${mapSizes.spacing['size3']}${unit}`;
      break;
    case BUTTON_SIZES.MEDIUM:
      buttonSize = `padding: ${mapSizes.spacing['size3']}${unit} ${mapSizes.spacing['size5']}${unit}`;
      break;
    case BUTTON_SIZES.LARGE:
      buttonSize = `padding: ${mapSizes.spacing['size5']}${unit} ${mapSizes.spacing['size7']}${unit}`;
      break;
    default:
      buttonSize = `padding: ${mapSizes.spacing['size2']}${unit} ${mapSizes.spacing['size5']}${unit}`
  }
  return css`
  label: size_${size};
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
  const { btns: { skins } } = theme;
  const { main, hover } = skins[variant];
  return css`
    label: theme_${variant};
    ${setButtonTheme(main.bg, main.border, main.text)}
    &:hover {
      ${setButtonTheme(hover.bg, hover.border, hover.text)}
    }
  `
}



