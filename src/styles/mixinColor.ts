import { theme } from "../theme";
import { TColors } from '../types/util-types';

export const mixinColorText = (color: TColors) => (
  { color: theme.color[color] }
)

export const mixinColorBackground = (color: TColors) => (
  { background: theme.color[color] }
)