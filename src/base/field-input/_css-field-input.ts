import { StyleSheet, css } from 'aphrodite';
import { getColor, getSizeButton, getSizeSpacing } from '../../shared/styles/getters';
import { theme } from '../../theme';

export const cssFieldInput = StyleSheet.create({
  base: {
    display: "block",
  },
  input: {
    borderStyle: "solid",
    borderWidth: `${theme.sizes.border.size2}${theme.sizes.border.unit}`,
    borderColor: theme.color.global
  }
})