import { StyleSheet, css } from 'aphrodite';
import { getColor, getSizeButton, getSizeSpacing } from '../../styles-aphrodite/getters';
import { theme } from '../../../theme';

export const cssFieldInput = StyleSheet.create({
  base: {
    display: "block",
  },
  input: {
    borderStyle: "solid",
    borderWidth: `${theme.size.border.size2}${theme.size.border.unit}`,
    borderColor: theme.color.global
  }
})