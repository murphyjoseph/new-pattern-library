import { theme } from "../theme";
import { TColor } from '../types/util-types';

export const mixinColorText = (color: TColor) => (
  { color: theme.color[color] }
)

export const mixinColorBackground = (color: TColor) => (
  { background: theme.color[color] }
)