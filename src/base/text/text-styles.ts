import { StyleSheet, css } from 'aphrodite';
import { getColor, getSizeButton, getSizeSpacing } from '../../shared/styles-js/config/utilities/getters';

export const StylesButton: any = StyleSheet.create({
  base: {
    display: "block",
    minHeight: getSizeButton("size2"),
    padding: getSizeSpacing("size2"),
    cursor: "pointer",
    background: getColor("primary"),
  },
  hover: {
    ':hover': {
      background: getColor("global"),
      transition: "200ms"
    }
  },
  primary: {
    background: getColor("primary"),
    ':hover': {
      background: getColor('primaryLight1')
    }
  },
  secondary: {
    background: getColor("secondary"),
    ':hover': {
      background: getColor("secondaryLight1")
    }
  },
  global: {
    background: getColor("global"),
    ':hover': {
      background: getColor("globalLight1")
    }
  },
  large: {
    height: getSizeButton("size4")
  },
  medium: {
    height: getSizeButton("size3")
  },
  small: {
    height: getSizeButton("size1")
  }
})