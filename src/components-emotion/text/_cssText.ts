import { themeCss } from '../../themeCss';

// how do we enforce types here? e.g. have a type of text elements?

export const cssText = (t: any) => ({
  base: {
    color: t.color.info,
    fontWeight: "normal",
    lineHeight: 1.1
  }
});

export const cssTextWeight = {
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
}

export const cssTextStyle = {
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
}

export const cssTextVariant = (t: any) => ({
  titleTwo: {
    ...t.typography.titleTwo
  },
});

// export const cssTextVariant = {
//   headingOne: {
//     ...theme.typography.headingOne
//   },
//   headingTwo: {
//     ...theme.typography.headingTwo
//   },
//   headingThree: {
//     ...theme.typography.headingThree
//   },
//   titleOne: {
//     ...theme.typography.titleOne
//   },
//   titleTwo: {
//     ...theme.typography.titleTwo
//   },
//   bodyOne: {
//     ...theme.typography.bodyOne
//   },
//   bodyTwo: {
//     ...theme.typography.bodyTwo
//   },
//   description: {
//     ...theme.typography.description
//   },
//   list: {
//     ...theme.typography.list
//   },
//   button: {
//     ...theme.typography.button
//   },
//   link: {
//     ...theme.typography.link
//   },
//   labelOne: {
//     ...theme.typography.labelOne
//   },
//   labelTwo: {
//     ...theme.typography.labelTwo
//   },
//   input: {
//     ...theme.typography.input
//   },
//   placeholder: {
//     ...theme.typography.placeholder
//   },
//   icon: {
//     ...theme.typography.icon
//   },
//   option: {
//     ...theme.typography.option
//   },
//   invalid: {
//     ...theme.typography.invalid
//   },
//   counter: {
//     ...theme.typography.counter
//   },
//   figcaption: {
//     ...theme.typography.figcaption
//   }
// }
