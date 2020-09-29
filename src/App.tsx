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
import { mapSizes, SIZES } from './shared/styles-js/config/map-sizes';
import {render} from 'react-dom'
import { stylePadding } from './shared/styles-js/config/utilities/padding';
// import { cx, css } from 'emotion'
import '@compiled/css-in-js';
import { stylerAttributeAndClassSetup, styler } from './shared/services/styler';
import { mapColors } from './shared/styles-js/config/map-colors';
import { mapLabels } from './shared/styles-js/config/map-labels';
import { getSizePadding } from './shared/styles-js/config/utilities/getters';


// import classes

function App() {

  const myClickEvent = () => {
    console.log("you clicked.")
  }

  // console.log(mapSizes)

  // REACT-JSS

  // const useStyles = createUseStyles({
  //   padding: {...stylePadding({direction: "all", size: "size4"})}
  // })

  // const classes = useStyles()

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

  // const foo = true
  // const bar = false

  const headingStyles = {
    padding: "1em",
    background: "blue"
  }

  const textStyles = {
    color: "white",
    background: "green",
    '&:hover': {
      background: "red"
    }
  }

  console.log("HEY")
  console.log(styler({colorBackground: "primary", display: "block", colorText: "global"}))
  const test = styler({colorBackground: "primary", display: "block", colorText: "global"})

  return (
    <div
      className="App"
      css={`
        main {
          background: ${mapColors.primary};
          padding-left: ${SIZES.spacing.size12}em;
          padding-top: ${SIZES.spacing.size12}em;
        }
      `}
    >
      <header>

      </header>
      <main css={{
        target: {
          background: "red",
          padding: "10px"
        }
      }}>
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
          <div className="target">target</div>
          <div css={test}>
            <h1> HEY 2 </h1>
          </div>
          <h1 css={[textStyles, headingStyles]}>
            Hey
          </h1>

        </PageMarketing>

      </main>
    </div>
  );
}

export default App;
