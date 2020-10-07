import { createUseStyles } from 'react-jss';
import { themeCss } from '../../themeCss';

export const cssFieldInput: any = createUseStyles({
  base: {
    display: "block",
  },
  input: {
    borderStyle: "solid",
    borderWidth: `${themeCss.size.border.size2}${themeCss.size.border.unit}`,
    borderColor: themeCss.color.global
  }
})