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
  headingOne: {
    ...t.typography.headingOne
  },
  headingTwo: {
    ...t.typography.headingTwo
  },
  headingThree: {
    ...t.typography.headingThree
  },
  titleOne: {
    ...t.typography.titleOne
  },
  titleTwo: {
    ...t.typography.titleTwo
  },
});

// export const cssTextVariant = {
//   headingOne: {
//     ...themeCss.typography.headingOne
//   },
//   headingTwo: {
//     ...themeCss.typography.headingTwo
//   },
//   headingThree: {
//     ...themeCss.typography.headingThree
//   },
//   titleOne: {
//     ...themeCss.typography.titleOne
//   },
//   titleTwo: {
//     ...themeCss.typography.titleTwo
//   },
//   bodyOne: {
//     ...themeCss.typography.bodyOne
//   },
//   bodyTwo: {
//     ...themeCss.typography.bodyTwo
//   },
//   description: {
//     ...themeCss.typography.description
//   },
//   list: {
//     ...themeCss.typography.list
//   },
//   button: {
//     ...themeCss.typography.button
//   },
//   link: {
//     ...themeCss.typography.link
//   },
//   labelOne: {
//     ...themeCss.typography.labelOne
//   },
//   labelTwo: {
//     ...themeCss.typography.labelTwo
//   },
//   input: {
//     ...themeCss.typography.input
//   },
//   placeholder: {
//     ...themeCss.typography.placeholder
//   },
//   icon: {
//     ...themeCss.typography.icon
//   },
//   option: {
//     ...themeCss.typography.option
//   },
//   invalid: {
//     ...themeCss.typography.invalid
//   },
//   counter: {
//     ...themeCss.typography.counter
//   },
//   figcaption: {
//     ...themeCss.typography.figcaption
//   }
// }
