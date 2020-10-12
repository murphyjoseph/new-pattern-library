import { themeCss } from '../../themeCss';

export const cssFieldInput = {
  base: {
    display: "block",
  },
  input: {
    borderStyle: "solid",
    borderWidth: `${themeCss.size.border.size2}${themeCss.size.border.unit}`,
    borderColor: themeCss.color.global
  }
}