import { StyleSheet } from 'aphrodite';
import { themeCss } from '../../themeCss';

export const cssFieldInput = StyleSheet.create({
  base: {
    display: "block",
  },
  input: {
    borderStyle: "solid",
    borderWidth: `${themeCss.size.border.size2}${themeCss.size.border.unit}`,
    borderColor: themeCss.color.global
  }
})