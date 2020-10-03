import { StyleSheet, css } from 'aphrodite';
import { getColor, getSizeButton, getSizeSpacing } from '../../shared/styles-js/config/utilities/getters';
import { theme } from '../../theme';

// how do we enforce types here? e.g. have a type of text elements?

export const cssText = StyleSheet.create({
  base: {
    color: theme.color.black,
    fontWeight: "normal",
    lineHeight: 1.1
  }
})

export const cssTextWeight = StyleSheet.create({
  bold: {
    fontWeight: "bold"
  },
  bolder: {
    fontWeight: "bolder"
  },
  lighter: {
    fontWeight: "lighter"
  },
  normal: {
    fontWeight: "normal"
  }
})

export const cssTextStyle = StyleSheet.create({
  italic: {
    fontStyle: "italic"
  },
  crossedOut: {
    textDecoration: "line-through"
  },
  underlined: {
    textDecoration: "underline"
  },
  nowrap: {
    whiteSpace: "nowrap"
  },
  capitalize: {
    textTransform: "uppercase"
  }
})

export const cssTextVariant = StyleSheet.create({
  headingOne: {
    ...theme.typography.headingOne
  },
  headingTwo: {
    ...theme.typography.headingTwo
  },
  headingThree: {
    ...theme.typography.headingThree
  },
  titleOne: {
    ...theme.typography.titleOne
  },
  titleTwo: {
    ...theme.typography.titleTwo
  },
  bodyOne: {
    ...theme.typography.bodyOne
  },
  bodyTwo: {
    ...theme.typography.bodyTwo
  },
  description: {
    ...theme.typography.description
  },
  list: {
    ...theme.typography.list
  },
  button: {
    ...theme.typography.button
  },
  link: {
    ...theme.typography.link
  },
  labelOne: {
    ...theme.typography.labelOne
  },
  labelTwo: {
    ...theme.typography.labelTwo
  },
  input: {
    ...theme.typography.input
  },
  placeholder: {
    ...theme.typography.placeholder
  },
  icon: {
    ...theme.typography.icon
  },
  option: {
    ...theme.typography.option
  },
  invalid: {
    ...theme.typography.invalid
  },
  counter: {
    ...theme.typography.counter
  },
  figcaption: {
    ...theme.typography.figcaption
  }
})

// export const cssTextSize = StyleSheet.create({

// })