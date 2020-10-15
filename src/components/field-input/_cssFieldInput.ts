import { mixinBorder } from '../../styles/mixinGeneral';
import { mixinPadding } from '../../styles/mixinPadding';
import { theme } from '../../theme';

export const cssFieldInput = {
  base: {
    display: "block",
  },
  input: {
    ...mixinBorder('size1', 'black'),
    ...mixinPadding({direction: 'all', size: 'size1'}),
    outlineWidth: theme.size.border.size1,
    outlineColor: theme.color.transparent,
    display: "block"
  }
}