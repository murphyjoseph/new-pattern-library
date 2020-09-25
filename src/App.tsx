import React from 'react';
import logo from './logo.svg';
import { TextLink } from './foundation/text/text-link';
import { TextAction } from './foundation/text/text-action';
import { TextCTA } from './foundation/text/text-cta';
import { HeadingOne } from './components/typography/heading-one';
import { BodyOne } from './components/typography/body-one';
import { BtnPrimary } from './components/btn/btn-primary';
import { BtnUtility } from './components/btn/btn-utility';
import { BodyTwo } from './components/typography/body-two';
import { PageMarketing } from './components/pages/page-marketing';
import { mapVariants } from './shared/styles-js/config/map-variants';
import { setSizes } from './shared/styles-js/config/set-sizes';
import { mapSizes } from './shared/styles-js/config/map-sizes';
import {render} from 'react-dom'
import {createUseStyles} from 'react-jss'
import { stylePadding } from './shared/styles-js/config/utilities/padding';
// import { cx, css } from 'emotion'
// import { utilityPadding } from './shared/styles-js/config/utilities/astro-padding';
import { css } from 'astroturf';

// import classes

function App() {

  const myClickEvent = () => {
    console.log("you clicked.")
  }

  // REACT-JSS

  const useStyles = createUseStyles({
    padding: {...stylePadding({direction: "all", size: "size4"})}
  })

  const classes = useStyles()

  // EMOTION
  // https://emotion.sh/docs/emotion

  // const cls1 = css`
  //   font-size: 20px;
  //   background: green;
  // `
  // const cls2 = css`
  //   font-size: 20px;
  //   background: blue;
  // `

  const foo = true
  const bar = false

  // ASTROTURF


 const mapLabels: any = {
  sizes: {
    size1  : 'size1',
    size2  : 'size2',
    size3  : 'size3',
    size4  : 'size4',
    size5  : 'size5',
    size6  : 'size6',
    size7  : 'size7',
    size8  : 'size8',
    size9  : 'size9',
    size10 : 'size10',
    size11 : 'size11',
    size12 : 'size12'
  },
  directions: {
    general: {
      all         : 'all',
      bottom      : 'bottom',
      bottomLeft  : 'bottom-left',
      bottomRight : 'bottom-right',
      horizontal  : 'horizontal',
      left        : 'left',
      right       : 'right',
      top         : 'top',
      topLeft     : 'top-left',
      topRight    : 'top-right',
      vertical    : 'vertical',
      center      : 'center',
      middle      : 'middle'
    },
    positional: {
      center              : 'center',
      centerVertical      : 'center-vertical',
      centerVerticalLeft  : 'center-vertical-left',
      centerVerticalRight : 'center-vertical-right',
      centerHorizontal    : 'center-horizontal',
      centerBlock         : 'center-block',
      top                 : 'top',
      topRight            : 'top-right',
      topLeft             : 'top-left',
      left                : 'left',
      right               : 'right',
      bottom              : 'bottom',
      bottomRight         : 'bottom-right',
      bottomLeft          : 'bottom-left'
    },
    spacing: {
      top        : 'top',
      right      : 'right',
      left       : 'left',
      bottom     : 'bottom',
      horizontal : 'horizontal',
      vertical   : 'vertical',
      all        : 'all'
    }
  }
}

const mapSizes: any = {
  "general": {
    "unitOfMeasurement": "em",
    "size1": 0.25,
    "size2": 0.48,
    "size3": 0.71,
    "size4": 0.94,
    "size5": 1.17,
    "size6": 1.4,
    "size7": 1.63,
    "size8": 1.86,
    "size9": 2.09,
    "size10": 2.32,
    "size11": 2.55,
    "size12": 2.78
  },
  "position": {
    "unitOfMeasurement": "em",
    "size1": 0.5,
    "size2": 0.96,
    "size3": 1.42,
    "size4": 1.88,
    "size5": 2.34,
    "size6": 2.8,
    "size7": 3.26,
    "size8": 3.72,
    "size9": 4.18,
    "size10": 4.64,
    "size11": 5.1,
    "size12": 5.56
  },
  spacing: {
    unitOfMeasurement: "em",
    size1: 0.2,
    size2: 0.43,
    size3: 0.66,
    size4: 0.89,
    size5: 1.12,
    size6: 1.35,
    size7: 1.58,
    size8: 1.81,
    size9: 2.04,
    size10: 2.27,
    size11: 2.5,
    size12: 2.73
  },
  "border": {
    "unitOfMeasurement": "px",
    "size1": 1,
    "size2": 2,
    "size3": 3,
    "size4": 4,
    "size5": 5,
    "size6": 6,
    "size7": 7,
    "size8": 8,
    "size9": 9,
    "size10": 10,
    "size11": 11,
    "size12": 12
  },
  "button": {
    "unitOfMeasurement": "em",
    "size1": 2.5,
    "size2": 4.79,
    "size3": 7.08,
    "size4": 9.37,
    "size5": 11.66,
    "size6": 13.95,
    "size7": 16.24,
    "size8": 18.53,
    "size9": 20.82,
    "size10": 23.11,
    "size11": 25.4,
    "size12": 27.69
  },
  "fonts": {
    "unitOfMeasurement": "em",
    "size1": 0.6,
    "size2": 0.8,
    "size3": 1,
    "size4": 1.2,
    "size5": 1.4,
    "size6": 1.6,
    "size7": 1.8,
    "size8": 2,
    "size9": 2.2,
    "size10": 2.4,
    "size11": 2.6,
    "size12": 2.8
  },
  "shadow": {
    "unitOfMeasurement": "em",
    "size1": 0.08,
    "size2": 0.15,
    "size3": 0.22,
    "size4": 0.29,
    "size5": 0.36,
    "size6": 0.43,
    "size7": 0.5,
    "size8": 0.57,
    "size9": 0.64,
    "size10": 0.71,
    "size11": 0.78,
    "size12": 0.85
  },
  "icons": {
    "unitOfMeasurement": "em",
    "size1": 0.25,
    "size2": 0.48,
    "size3": 0.71,
    "size4": 0.94,
    "size5": 1.17,
    "size6": 1.4,
    "size7": 1.63,
    "size8": 1.86,
    "size9": 2.09,
    "size10": 2.32,
    "size11": 2.55,
    "size12": 2.78
  },
  "logo": {
    "unitOfMeasurement": "em",
    "size1": 0.19,
    "size2": 0.36,
    "size3": 0.53,
    "size4": 0.7,
    "size5": 0.87,
    "size6": 1.04,
    "size7": 1.21,
    "size8": 1.38,
    "size9": 1.55,
    "size10": 1.72,
    "size11": 1.89,
    "size12": 2.06
  },
  "drawer": {
    "unitOfMeasurement": "em",
    "size1": 1.75,
    "size2": 3.35,
    "size3": 4.95,
    "size4": 6.55,
    "size5": 8.15,
    "size6": 9.75,
    "size7": 11.35,
    "size8": 12.95,
    "size9": 14.55,
    "size10": 16.15,
    "size11": 17.75,
    "size12": 19.35
  },
  "tracking": {
    "unitOfMeasurement": "em",
    "size1": 0.25,
    "size2": 0.48,
    "size3": 0.71,
    "size4": 0.94,
    "size5": 1.17,
    "size6": 1.4,
    "size7": 1.63,
    "size8": 1.86,
    "size9": 2.09,
    "size10": 2.32,
    "size11": 2.55,
    "size12": 2.78
  },
  "counter": {
    "unitOfMeasurement": "em",
    "size1": 0.25,
    "size2": 0.48,
    "size3": 0.71,
    "size4": 0.94,
    "size5": 1.17,
    "size6": 1.4,
    "size7": 1.63,
    "size8": 1.86,
    "size9": 2.09,
    "size10": 2.32,
    "size11": 2.55,
    "size12": 2.78
  },
  "modal": {
    "unitOfMeasurement": "em",
    "size1": 10,
    "size2": 15.42,
    "size3": 20.84,
    "size4": 26.26,
    "size5": 31.68,
    "size6": 37.1,
    "size7": 42.52,
    "size8": 47.94,
    "size9": 53.36,
    "size10": 58.78,
    "size11": 64.2,
    "size12": 69.62
  },
  "gutter": {
    "unitOfMeasurement": "em",
    "size1": 0.25,
    "size2": 0.48,
    "size3": 0.71,
    "size4": 0.94,
    "size5": 1.17,
    "size6": 1.4,
    "size7": 1.63,
    "size8": 1.86,
    "size9": 2.09,
    "size10": 2.32,
    "size11": 2.55,
    "size12": 2.78
  },
  "field": {
    "unitOfMeasurement": "em",
    "size1": 3,
    "size2": 5.75,
    "size3": 8.5,
    "size4": 11.25,
    "size5": 14,
    "size6": 16.75,
    "size7": 19.5,
    "size8": 22.25,
    "size9": 25,
    "size10": 27.75,
    "size11": 30.5,
    "size12": 33.25
  },
  "container": {
    "unitOfMeasurement": "em",
    "size1": 10,
    "size2": 17.5,
    "size3": 25,
    "size4": 32.5,
    "size5": 40,
    "size6": 47.5,
    "size7": 55,
    "size8": 62.5,
    "size9": 70,
    "size10": 77.5,
    "size11": 85,
    "size12": 92.5
  },
  "column": {
    "width": {
      "unitOfMeasurement": "em",
      "size1": 7.5,
      "size2": 14.38,
      "size3": 21.26,
      "size4": 28.14,
      "size5": 35.02,
      "size6": 41.9,
      "size7": 48.78,
      "size8": 55.66,
      "size9": 62.54,
      "size10": 69.41,
      "size11": 76.29,
      "size12": 83.17
    },
    "auto": {
      "unitOfMeasurement": "none",
      "size1": 1,
      "size2": 2,
      "size3": 3,
      "size4": 4,
      "size5": 5,
      "size6": 6,
      "size7": 7,
      "size8": 8,
      "size9": 9,
      "size10": 10,
      "size11": 11,
      "size12": 12
    }
  }
}



 let utilityPadding: any = {}

Object.keys(mapLabels.directions.spacing).forEach(direction => {
  Object.keys(mapLabels.sizes).forEach(size => {
    console.log(size)
    let style = {padding: `${mapSizes.spacing[size]}em`}
    // utilityPadding[`${direction}${size}`] = css`padding: ${mapSizes.spacing[size]}em`
  })
});


  console.log(utilityPadding)

  return (
    <div className="App">
      <header>

      </header>
      <main className={classes.padding}>
        <PageMarketing title="Examples">
          <HeadingOne tag="h1" text="Heading One" />
          {/* <div className={padding({size: "size12", direction: "all"})} /> */}
          <BodyOne text="body one Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <BodyTwo text="body two Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
          <BtnPrimary text="Fire Event" onClick={myClickEvent} size="medium" />
          {/* <div
            className={cx(
              { [cls1]: foo },
              { [cls2]: bar }
            )}>
              Emotion Example
          </div> */}
          {/* <div className={utilityPadding}>

          </div> */}
        </PageMarketing>

      </main>
    </div>
  );
}

export default App;
