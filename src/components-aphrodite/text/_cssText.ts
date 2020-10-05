import { StyleSheet } from 'aphrodite';
import { themeCss } from '../../themeCss';

// how do we enforce types here? e.g. have a type of text elements?

export const cssText = StyleSheet.create({
  base: {
    color: themeCss.color.black,
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
    ...themeCss.typography.headingOne
  },
  headingTwo: {
    ...themeCss.typography.headingTwo
  },
  headingThree: {
    ...themeCss.typography.headingThree
  },
  titleOne: {
    ...themeCss.typography.titleOne
  },
  titleTwo: {
    ...themeCss.typography.titleTwo
  },
  bodyOne: {
    ...themeCss.typography.bodyOne
  },
  bodyTwo: {
    ...themeCss.typography.bodyTwo
  },
  description: {
    ...themeCss.typography.description
  },
  list: {
    ...themeCss.typography.list
  },
  button: {
    ...themeCss.typography.button
  },
  link: {
    ...themeCss.typography.link
  },
  labelOne: {
    ...themeCss.typography.labelOne
  },
  labelTwo: {
    ...themeCss.typography.labelTwo
  },
  input: {
    ...themeCss.typography.input
  },
  placeholder: {
    ...themeCss.typography.placeholder
  },
  icon: {
    ...themeCss.typography.icon
  },
  option: {
    ...themeCss.typography.option
  },
  invalid: {
    ...themeCss.typography.invalid
  },
  counter: {
    ...themeCss.typography.counter
  },
  figcaption: {
    ...themeCss.typography.figcaption
  }
})

// export const cssTextSize = StyleSheet.create({

// })