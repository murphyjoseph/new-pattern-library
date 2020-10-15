import { theme } from '../../theme';

// how do we enforce types here? e.g. have a type of text elements?

export const cssTextWeight = {
  bold:    { fontWeight: "bold" },
  bolder:  { fontWeight: "bolder" },
  lighter: { fontWeight: "lighter" },
  normal:  { fontWeight: "normal" }
}

export const cssTextStyle = {
  italic:     { fontStyle: "italic" },
  crossedOut: { textDecoration: "line-through" },
  underlined: { textDecoration: "underline" },
  nowrap:     { whiteSpace: "nowrap" },
  capitalize: { textTransform: "uppercase" }
}

export const cssTextVariant = {
  headingOne: {
    ...theme.typography.level1
  },
  headingTwo: {
    ...theme.typography.level2
  },
  headingThree: {
    ...theme.typography.level3
  },
  titleOne: {
    ...theme.typography.level4
  },
  titleTwo: {
    ...theme.typography.level5
  },
  bodyOne: {
    ...theme.typography.level6
  },
  bodyTwo: {
    ...theme.typography.level7
  },
  description: {
    ...theme.typography.level8
  },
  list: {
    ...theme.typography.level5
  },
  button: {
    ...theme.typography.level5
  },
  link: {
    ...theme.typography.level5
  },
  labelOne: {
    ...theme.typography.level5
  },
  labelTwo: {
    ...theme.typography.level7
  },
  input: {
    ...theme.typography.level5
  },
  placeholder: {
    ...theme.typography.level5
  },
  icon: {
    ...theme.typography.level5
  },
  option: {
    ...theme.typography.level5
  },
  invalid: {
    ...theme.typography.level5
  },
  counter: {
    ...theme.typography.level5
  },
  figcaption: {
    ...theme.typography.level5
  }
}